/**
 * SMTI 主控制器
 * 
 * 负责：页面路由、全局操作
 */

// ========== 页面路由 ==========

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
  }
}

function goHome() {
  showPage('page-landing');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startQuiz() {
  showPage('page-quiz');
  Quiz.init();
}

function retakeQuiz() {
  showPage('page-quiz');
  Quiz.init();
}

function submitQuiz() {
  const answers = Quiz.getAnswers();

  // 检查是否全部作答
  if (Object.keys(answers).length < QUESTIONS.length) {
    alert('请完成所有题目后再提交！');
    return;
  }

  // 匹配人格
  const result = Calculator.matchPersonality(answers);

  // 渲染结果页
  Result.render(result);

  // 切换到结果页
  showPage('page-result');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== 初始化 ==========

document.addEventListener('DOMContentLoaded', () => {
  showPage('page-landing');
});
