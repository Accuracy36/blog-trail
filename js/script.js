// 主题切换功能
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// 检查本地存储的主题偏好
const currentTheme = localStorage.getItem('theme') || 'light';

// 应用保存的主题
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// 主题切换事件
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // 切换到亮色主题
        document.documentElement.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        // 切换到暗色主题
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// 卡片悬停效果增强
document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 控制台欢迎信息
console.log('%c🎉 欢迎来到Match的个人博客！', 'color: #4361ee; font-size: 16px; font-weight: bold;');
console.log('%c📚 这里记录着我的学习和思考', 'color: #666; font-size: 14px;');
console.log('%c💡 希望你能在这里找到有价值的内容', 'color: #666; font-size: 14px;');

// 获取当前年份
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(element => {
    element.textContent = currentYear;
});

// 移动端菜单切换（如果需要的话）
function initMobileMenu() {
    const navbar = document.querySelector('.navbar .container');
    const navLinks = document.querySelector('.nav-links');
    
    // 创建移动菜单按钮
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // 插入到导航栏
    navbar.appendChild(mobileMenuBtn);
    
    // 移动菜单切换
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('show') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // 点击链接关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// 检查是否为移动设备并初始化菜单
if (window.innerWidth <= 768) {
    initMobileMenu();
}

// 窗口大小变化时重新检查
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        if (!mobileBtn) {
            initMobileMenu();
        }
    } else {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.remove('show');
        }
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        if (mobileBtn) {
            mobileBtn.remove();
        }
    }
});

// 添加CSS样式用于移动菜单
const mobileMenuStyles = `
@media (max-width: 768px) {
    .mobile-menu-btn {
        background: none;
        border: none;
        color: var(--text-color);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        background-color: var(--bg-color);
        flex-direction: column;
        padding: 1rem;
        box-shadow: var(--shadow);
        display: none;
    }
    
    .nav-links.show {
        display: flex;
    }
    
    .nav-links li {
        width: 100%;
    }
    
    .nav-links a {
        padding: 0.8rem;
        border-bottom: 1px solid var(--border-color);
    }
}
`;

// 添加移动菜单样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);