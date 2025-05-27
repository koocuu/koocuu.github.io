// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 初始化标签页
  const defaultTab = document.querySelector('.nav-tabs li.active');
  if (defaultTab) {
    const target = defaultTab.getAttribute('data-tab');
    const targetContent = document.getElementById(target);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  }
  updateTabIndicator();
  
  // 初始化标签页切换
  document.querySelectorAll('.nav-tabs li').forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.getAttribute('data-tab');
      switchTab(target);
    });
  });

  // 遮罩关闭
  const wechatModal = document.getElementById('wechat-modal');
  if (wechatModal) {
    wechatModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeWeChatModal();
      }
    });
  }
  // 关闭按钮关闭
  const wechatCloseBtn = document.querySelector('.wechat-modal-content .close-btn');
  if (wechatCloseBtn) {
    wechatCloseBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeWeChatModal();
    });
  }

  // Home tab交互
  const homeTitle = document.getElementById('home-title');
  if (homeTitle) {
    homeTitle.addEventListener('click', function() {
      switchTab('about-me');
    });
  }
  const toExp = document.getElementById('to-experience');
  if (toExp) {
    toExp.addEventListener('click', function() {
      switchTab('about');
    });
  }
  const toBlog = document.getElementById('to-blog');
  if (toBlog) {
    toBlog.addEventListener('click', function() {
      switchTab('blog-tab');
    });
  }
  
  const toContact = document.getElementById('to-contact');
  if (toContact) {
    toContact.addEventListener('click', function() {
      switchTab('contacts');
    });
  }

  // 为微信卡片添加点击事件
  const wechatCard = document.querySelector('.contact-card.wechat-card');
  if (wechatCard) {
    wechatCard.addEventListener('click', function(event) {
      // 判断屏幕宽度
      if (window.innerWidth <= 768) {
        // 移动端：执行 Deep Link 跳转
        window.location.href = 'weixin://dl/chat?username=cuyooh2077';
      } else {
        // PC 端：显示弹窗
        showWechatModal(event);
      }
    });
  }

  // 处理iframe内的链接点击
  const blogIframe = document.getElementById('blog-iframe');
  if (blogIframe) {
    blogIframe.onload = function() {
      try {
        // 尝试访问iframe内容
        const iframeDoc = blogIframe.contentDocument || blogIframe.contentWindow.document;
        
        // 为iframe内的所有链接添加target属性
        const links = iframeDoc.getElementsByTagName('a');
        for (let link of links) {
          link.target = 'blog-frame';
        }
      } catch (e) {
        console.log('无法修改iframe内容，可能是因为跨域限制');
      }
    };
  }
});

// 更新标签页指示器
function updateTabIndicator() {
  const navTabs = document.querySelector('.nav-tabs');
  const activeTab = document.querySelector('.nav-tabs li.active');
  if (navTabs && activeTab) {
    navTabs.style.setProperty('--indicator-width', `${activeTab.offsetWidth}px`);
    navTabs.style.setProperty('--indicator-left', `${activeTab.offsetLeft}px`);
    navTabs.style.setProperty('--indicator-height', '2px');
    navTabs.style.setProperty('--indicator-bottom', '0px');
  }
}

function switchTab(tabName) {
  // 切换tab按钮
  document.querySelectorAll('.nav-tabs li').forEach(tab => {
    if (tab.getAttribute('data-tab') === tabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  
  // 切换内容
  document.querySelectorAll('.tab-content').forEach(content => {
    if (content.id === tabName) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });

  // 特殊处理blog-tab
  if (tabName === 'blog-tab') {
    document.getElementById('blog-tab').style.display = 'block';
  } else {
    document.getElementById('blog-tab').style.display = 'none';
  }

  updateTabIndicator();
}

// 点击遮罩关闭，仅针对微信弹窗
window.onclick = function(event) {
  const wechatModal = document.getElementById('wechat-modal');
  if (event.target === wechatModal) {
    closeWeChatModal();
  }
}

// 微信二维码展示功能
function showWechatModal(event) {
  event.preventDefault();
  event.stopPropagation();
  const modal = document.getElementById('wechat-modal');
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeWeChatModal() {
  const modal = document.getElementById('wechat-modal');
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
  document.body.style.overflow = 'auto';
} 