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
});

// 页面加载后初始化指示器
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

// 标签页切换功能
document.querySelectorAll('.nav-tabs li').forEach(tab => {
  tab.addEventListener('click', function() {
    const target = this.getAttribute('data-tab');
    const tabs = document.querySelectorAll('.nav-tabs li');
    const contents = document.querySelectorAll('.tab-content');
    
    // 更新标签状态
    tabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    
    // 更新内容显示
    contents.forEach(content => {
      content.classList.remove('active');
      if (content.id === target) {
        content.classList.add('active');
      }
    });
    
    // 平滑更新指示器
    updateTabIndicator();
  });
});

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

// 点击模态框外部关闭
window.onclick = function(event) {
  const modal = document.getElementById('blog-detail-modal');
  if (event.target == modal) {
    closeBlogDetail();
  }
}

// ========== 图片大图页切换功能 ========== //
const galleryImages = Array.from(document.querySelectorAll('.gallery-list img'));
let currentImageIndex = 0;

function showFullImageByIndex(index) {
  if (index < 0 || index >= galleryImages.length) return;
  currentImageIndex = index;
  const viewer = document.getElementById('image-viewer');
  const fullImage = document.getElementById('full-image');
  const src = galleryImages[index].src.replace('w=400', 'w=1200');
  fullImage.src = src;
  viewer.style.display = 'flex';
  setTimeout(() => {
    viewer.classList.add('active');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function showFullImage(src) {
  const index = galleryImages.findIndex(img => img.src === src);
  if (index !== -1) {
    showFullImageByIndex(index);
  }
}

function closeImageViewer() {
  const viewer = document.getElementById('image-viewer');
  viewer.classList.remove('active');
  setTimeout(() => {
    viewer.style.display = 'none';
  }, 300);
  document.body.style.overflow = 'auto';
}

document.getElementById('prev-image').onclick = function(e) {
  e.stopPropagation();
  if (currentImageIndex > 0) showFullImageByIndex(currentImageIndex - 1);
};
document.getElementById('next-image').onclick = function(e) {
  e.stopPropagation();
  if (currentImageIndex < galleryImages.length - 1) showFullImageByIndex(currentImageIndex + 1);
};

document.addEventListener('keydown', function(e) {
  const viewer = document.getElementById('image-viewer');
  if (viewer.classList.contains('active')) {
    if (e.key === 'ArrowLeft') {
      if (currentImageIndex > 0) showFullImageByIndex(currentImageIndex - 1);
    } else if (e.key === 'ArrowRight') {
      if (currentImageIndex < galleryImages.length - 1) showFullImageByIndex(currentImageIndex + 1);
    } else if (e.key === 'Escape') {
      closeImageViewer();
    }
  }
});

// ========== 博客tab分类切换功能（重写） ========== //
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

// ========== 其余tab和指示器功能（保持不变） ========== //
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

document.addEventListener('DOMContentLoaded', function() {
  // 初始化标签页内容
  const defaultTab = document.querySelector('.nav-tabs li.active');
  if (defaultTab) {
    const target = defaultTab.getAttribute('data-tab');
    const targetContent = document.getElementById(target);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  }
  updateTabIndicator();
});

document.querySelectorAll('.nav-tabs li').forEach(tab => {
  tab.addEventListener('click', function() {
    const target = this.getAttribute('data-tab');
    const tabs = document.querySelectorAll('.nav-tabs li');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    contents.forEach(content => {
      content.classList.remove('active');
      if (content.id === target) {
        content.classList.add('active');
      }
    });
    updateTabIndicator();
  });
});

// ========== 博客详情页和图片查看器关闭功能（保持不变） ========== //
function showBlogDetail(blogId) {
  const modal = document.getElementById('blog-detail-modal');
  const content = document.getElementById('blog-detail-content');
  const blog = blogDetails[blogId];
  if (blog) {
    content.innerHTML = blog.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeBlogDetail() {
  const modal = document.getElementById('blog-detail-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
  const viewer = document.getElementById('image-viewer');
  const modal = document.getElementById('blog-detail-modal');
  if (event.target == viewer) {
    closeImageViewer();
  }
  if (event.target == modal) {
    closeBlogDetail();
  }
}

// 微信二维码弹窗功能
function showWeChatModal(event) {
  event.stopPropagation();
  document.getElementById('wechat-modal').classList.add('active');
}
function closeWeChatModal() {
  document.getElementById('wechat-modal').classList.remove('active');
}
document.addEventListener('click', function(e) {
  const modal = document.getElementById('wechat-modal');
  const modalContent = document.querySelector('.wechat-modal-content');
  if (modal && modal.classList.contains('active')) {
    // 只允许点击遮罩关闭，点击内容不关闭
    if (e.target === modal) {
      closeWeChatModal();
    }
  }
}); 