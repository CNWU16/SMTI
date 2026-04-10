/**
 * SMTI 计分引擎
 * 
 * 负责：
 * 1. 收集答案后按维度累加分数
 * 2. 将分数映射到 L/M/H 等级
 * 3. 用汉明距离匹配最接近的人格类型
 */

const Calculator = {
  /**
   * 从用户答案计算各维度原始分
   * @param {Object} answers - { questionId: selectedScore }
   * @returns {Object} - { dimensionKey: totalScore }
   */
  calcDimensionScores(answers) {
    const scores = {};

    // 初始化所有维度为 0
    for (const dim of getAllDimensions()) {
      scores[dim.key] = 0;
    }

    // 按维度累加
    for (const q of QUESTIONS) {
      const selectedScore = answers[q.id];
      if (selectedScore !== undefined) {
        scores[q.dimension] = (scores[q.dimension] || 0) + selectedScore;
      }
    }

    return scores;
  },

  /**
   * 将原始分映射为 L/M/H 等级
   * @param {Object} scores - { dimensionKey: totalScore }
   * @returns {Object} - { dimensionKey: 'L'|'M'|'H' }
   */
  calcDimensionLevels(scores) {
    // 统计每维度题数，用于自适应阈值
    const qCount = {};
    for (const q of QUESTIONS) {
      qCount[q.dimension] = (qCount[q.dimension] || 0) + 1;
    }

    const levels = {};
    for (const [key, score] of Object.entries(scores)) {
      levels[key] = scoreTolevel(score, qCount[key] || 2);
    }
    return levels;
  },

  /**
   * 计算用户等级向量与某个人格类型的汉明距离
   * @param {Object} userLevels - { dimensionKey: 'L'|'M'|'H' }
   * @param {Object} pattern - 人格类型的 pattern 对象
   * @returns {number} - 不匹配的维度数（0-15）
   */
  hammingDistance(userLevels, pattern) {
    let distance = 0;
    for (const key of Object.keys(pattern)) {
      if (userLevels[key] !== pattern[key]) {
        distance++;
      }
    }
    return distance;
  },

  /**
   * 匹配最接近的人格类型
   * @param {Object} answers - { questionId: selectedScore }
   * @returns {Object} - { personality, matchPercent, scores, levels }
   */
  matchPersonality(answers) {
    const scores = this.calcDimensionScores(answers);
    const levels = this.calcDimensionLevels(scores);

    let bestMatch = null;
    let bestDistance = Infinity;

    for (const p of PERSONALITIES) {
      const dist = this.hammingDistance(levels, p.pattern);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestMatch = p;
      }
    }

    const totalDimensions = Object.keys(levels).length;
    const matchPercent = Math.round((1 - bestDistance / totalDimensions) * 100);

    return {
      personality: bestMatch,
      matchPercent,
      scores,
      levels,
      distance: bestDistance
    };
  }
};
