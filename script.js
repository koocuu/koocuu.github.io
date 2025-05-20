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
  
  // 初始化博客分类
  if (document.querySelectorAll('.blog-menu-item').length) {
    document.querySelectorAll('.blog-menu-item').forEach(item => {
      item.addEventListener('click', function() {
        document.querySelectorAll('.blog-menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        document.querySelectorAll('.blog-card-list').forEach(list => {
          if (category === 'all') {
            list.style.display = (list.getAttribute('data-category') === 'all') ? '' : 'none';
          } else {
            list.style.display = (list.getAttribute('data-category') === category) ? '' : 'none';
          }
        });
      });
    });
  }
  
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

// 博客详情页功能
const blogDetails = {
  'travel-1': {
    title: '我的第一次欧洲之旅',
    date: '2024-03-15',
    content: `
      <h2>我的第一次欧洲之旅</h2>
      <p>去年夏天，我终于实现了去欧洲旅行的梦想。第一站是浪漫的巴黎...</p>
      <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" alt="巴黎铁塔">
      <p>埃菲尔铁塔比我想象中还要壮观，特别是在夜晚灯光亮起的时候...</p>
      <img src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=800" alt="巴黎街景">
      <p>漫步在巴黎的街头，感受着这座城市的艺术气息...</p>
    `
  },
  'tech-1': {
    title: '我的Android开发之路',
    date: '2024-03-10',
    content: `
      <h2>我的Android开发之路</h2>
      <p>从大学开始接触Android开发，到现在已经过去了5年...</p>
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800" alt="编程">
      <p>在这条路上，我遇到了很多挑战，也收获了很多成长...</p>
      <h3>主要技术栈：</h3>
      <ul>
        <li>Kotlin</li>
        <li>Jetpack Compose</li>
        <li>MVVM架构</li>
        <li>协程</li>
      </ul>
    `
  }
};

function showBlogDetail(blogId) {
  const modal = document.getElementById('blog-detail-modal');
  const content = document.getElementById('blog-detail-content');
  const blog = blogDetails[blogId];
  
  if (blog) {
    content.innerHTML = blog.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  }
}

function closeBlogDetail() {
  const modal = document.getElementById('blog-detail-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // 恢复背景滚动
}

// 点击遮罩关闭，仅针对微信弹窗
window.onclick = function(event) {
  const wechatModal = document.getElementById('wechat-modal');
  if (event.target === wechatModal) {
    closeWeChatModal();
  }
  // 其他模态框关闭逻辑可继续添加
}

// 微信二维码展示功能
function showWeChatModal(event) {
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