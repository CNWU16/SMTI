/**
 * SMTI 答题页逻辑
 *
 * 负责：
 * 1. 渲染题目卡片
 * 2. 处理选项点击
 * 3. 更新进度条
 * 4. 收集答案
 */

const Quiz = {
  answers: {},       // { questionId: selectedScore }
  totalQuestions: 0,

  /**
   * 初始化答题页
   */
  init() {
    this.answers = {};
    this.totalQuestions = QUESTIONS.length;
    this.render();
    this.updateProgress();
    this.updateSubmitButton();

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * 渲染所有题目卡片
   */
  render() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    QUESTIONS.forEach((q, index) => {
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `question-${q.id}`;

      card.innerHTML = `
        <div class="question-header">
          <span class="question-number">第 ${q.id} 题</span>
          <span class="question-dimension">维度已隐藏</span>
        </div>
        <div class="question-text">${q.text}</div>
        <div class="options-group">
          ${q.options.map(opt => `
            <div class="option-item" data-question="${q.id}" data-score="${opt.score}" onclick="Quiz.selectOption(this, ${q.id}, ${opt.score})">
              <div class="option-radio"></div>
              <span class="option-label">${opt.label}</span>
              <span class="option-text">${opt.text}</span>
            </div>
          `).join('')}
        </div>
      `;

      container.appendChild(card);
    });
  },

  /**
   * 处理选项点击
   */
  selectOption(element, questionId, score) {
    // 移除同题其他选项的选中状态
    const siblings = element.parentElement.querySelectorAll('.option-item');
    siblings.forEach(s => s.classList.remove('selected'));

    // 选中当前选项
    element.classList.add('selected');

    // 记录答案
    this.answers[questionId] = score;

    // 更新进度
    this.updateProgress();
    this.updateSubmitButton();
  },

  /**
   * 更新进度条
   */
  updateProgress() {
    const answered = Object.keys(this.answers).length;
    const percent = (answered / this.totalQuestions) * 100;

    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');

    fill.style.width = `${percent}%`;
    text.textContent = `${answered} / ${this.totalQuestions}`;
  },

  /**
   * 更新提交按钮状态
   */
  updateSubmitButton() {
    const btn = document.getElementById('btn-submit');
    const hint = document.getElementById('quiz-footer-hint');
    const answered = Object.keys(this.answers).length;
    const allDone = answered >= this.totalQuestions;

    btn.disabled = !allDone;

    if (allDone) {
      hint.textContent = '都做完了。现在可以把你的电子魂魄交给结果页审判。';
      hint.style.color = 'var(--text-highlight)';
    } else {
      const remaining = this.totalQuestions - answered;
      hint.textContent = `还有 ${remaining} 题未完成`;
      hint.style.color = '';
    }
  },

  /**
   * 获取当前答案
   */
  getAnswers() {
    return { ...this.answers };
  }
};
