/**
 * SMTI 结果页渲染
 */

const Result = {
  /**
   * 渲染结果页
   * @param {Object} result - Calculator.matchPersonality() 的返回值
   */
  render(result) {
    const { personality, matchPercent, scores, levels } = result;

    // 人格图片（暂用占位）
    const imgEl = document.getElementById('result-image');
    imgEl.src = personality.image;
    imgEl.alt = `${personality.code} - ${personality.name}`;
    imgEl.onerror = function() {
      // 图片不存在时显示占位
      this.style.display = 'none';
    };

    // 人格代码和名称（三明治：中文名 → 字母 → 副标题 → 定位说明）
    document.getElementById('result-name').textContent = personality.name;
    document.getElementById('result-code').textContent = personality.code;
    document.getElementById('result-subtitle').textContent = personality.subtitle || '';
    document.getElementById('result-tagline').textContent = personality.tagline || '';

    // 稀有度
    const rarity = personality.rarity || 3.7;
    document.getElementById('rarity-percent').textContent = rarity + '%';
    const congrats = document.querySelector('.rarity-congrats');
    if (rarity <= 2) congrats.textContent = '🏆 恭喜！你解锁了极稀有人格';
    else if (rarity <= 3.5) congrats.textContent = '🎊 恭喜！你解锁了稀有人格';
    else congrats.textContent = '✨ 你的人格类型已解锁';

    // 匹配度
    document.getElementById('result-match-value').textContent = `${matchPercent}%`;

    // 描述（支持多段落：用 \n\n 分段）
    const descEl = document.getElementById('result-description');
    descEl.innerHTML = personality.description
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');

    // 维度评分
    this.renderDimensions(levels, personality);

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * 渲染 15 维度评分
   */
  renderDimensions(levels, personality) {
    const container = document.getElementById('result-dimensions');
    container.innerHTML = '';

    const allDims = getAllDimensions();

    // 按模型分组渲染
    let currentGroup = '';
    for (const dim of allDims) {
      // 分组标题
      if (dim.group !== currentGroup) {
        currentGroup = dim.group;
        const groupHeader = document.createElement('div');
        groupHeader.className = 'dimension-group-header';
        groupHeader.style.cssText = `
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-highlight);
          padding: 8px 0 4px;
          margin-top: 8px;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.7;
        `;
        groupHeader.textContent = dim.groupLabel;
        container.appendChild(groupHeader);
      }

      const level = levels[dim.key] || 'M';
      const comment = personality.dimensionComments?.[dim.key] || '';

      const item = document.createElement('div');
      item.className = 'dimension-item';
      item.innerHTML = `
        <span class="dimension-name">${dim.name}</span>
        <div class="dimension-bar-container">
          <div class="dimension-bar level-${level}"></div>
        </div>
        <span class="dimension-level level-${level}">${level}</span>
        <span class="dimension-comment" title="${comment}">${comment}</span>
      `;

      container.appendChild(item);
    }
  }
};
