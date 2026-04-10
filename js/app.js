/**
 * SMTI 主控制器
 * 
 * 负责：页面路由、全局操作、广告触发
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

  // 在查看结果后触发弹窗广告（延迟 2 秒）
  setTimeout(() => {
    showAd();
  }, 2000);
}

// ========== 广告控制 ==========

function showAd() {
  const overlay = document.getElementById('ad-overlay');
  if (overlay) {
    overlay.classList.remove('hidden');
  }
}

function closeAd() {
  const overlay = document.getElementById('ad-overlay');
  if (overlay) {
    overlay.classList.add('hidden');
  }
}

// ========== 初始化 ==========

document.addEventListener('DOMContentLoaded', () => {
  // 默认显示首页
  showPage('page-landing');

  // 键盘快捷键：ESC 关闭广告
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAd();
    }
  });

  // 点击遮罩关闭广告
  const adOverlay = document.getElementById('ad-overlay');
  if (adOverlay) {
    adOverlay.addEventListener('click', (e) => {
      if (e.target === adOverlay) {
        closeAd();
      }
    });
  }
});
