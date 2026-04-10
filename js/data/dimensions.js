/**
 * SMTI 维度定义
 * 
 * 5 大模型 × 3 维度 = 15 维度
 */

const DIMENSION_GROUPS = {
  self: {
    label: "自我模型",
    dimensions: {
      Se1: { name: "支配倾向", description: "你在关系中掌控与服从的倾向" },
      Se2: { name: "自我认知", description: "你对自身欲望和边界的清晰程度" },
      Se3: { name: "底线意识", description: "你坚守个人底线的能力" }
    }
  },
  emotion: {
    label: "情感模型",
    dimensions: {
      Em1: { name: "信任与安全", description: "你在亲密关系中的安全感水平" },
      Em2: { name: "情感强度", description: "你投入关系的情感浓烈程度" },
      Em3: { name: "依附模式", description: "你在关系中的依赖与独立平衡" }
    }
  },
  attitude: {
    label: "态度模型",
    dimensions: {
      At1: { name: "权力观", description: "你对权力与控制的态度" },
      At2: { name: "规则偏好", description: "你对规则和秩序的接受程度" },
      At3: { name: "痛苦哲学", description: "你从压力和痛苦中获取意义的能力" }
    }
  },
  action: {
    label: "行动驱力",
    dimensions: {
      Ac1: { name: "刺激阈值", description: "你追求极端体验的程度" },
      Ac2: { name: "主导风格", description: "你在决策和行动中的主导程度" },
      Ac3: { name: "仪式感", description: "你对计划和仪式的偏好程度" }
    }
  },
  social: {
    label: "社交模型",
    dimensions: {
      So1: { name: "社交能量", description: "你在社交场合的主动性" },
      So2: { name: "边界强度", description: "你维护个人边界的坚定程度" },
      So3: { name: "真实度", description: "你展示真实自我的意愿" }
    }
  }
};

/**
 * 将原始分映射为 L/M/H 等级（自适应阈值）
 *
 * 以题数为中位点，三等分：
 *   2 题 (max=4): L=0-1, M=2, H=3-4  → 各约 33%
 *   3 题 (max=6): L=0-2, M=3, H=4-6  → 各约 33%
 *
 * @param {number} score - 原始分
 * @param {number} questionCount - 该维度的题目数量
 */
function scoreTolevel(score, questionCount) {
  const mid = questionCount;  // 中位点 = 题数（每题0-2分的数学中心）
  if (score < mid) return 'L';
  if (score === mid) return 'M';
  return 'H';
}

/**
 * 获取所有维度的扁平列表
 */
function getAllDimensions() {
  const list = [];
  for (const [groupKey, group] of Object.entries(DIMENSION_GROUPS)) {
    for (const [dimKey, dim] of Object.entries(group.dimensions)) {
      list.push({ key: dimKey, group: groupKey, groupLabel: group.label, ...dim });
    }
  }
  return list;
}
