// 关于页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 技能条动画
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-level');
        
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // 初始化技能条动画
    setTimeout(animateSkillBars, 500);
    
    // 兴趣卡片悬停效果
    const interestCards = document.querySelectorAll('.interest-card');
    interestCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.interest-icon i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.interest-icon i');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // 技能标签点击效果
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除其他标签的激活状态
            skillTags.forEach(t => t.classList.remove('active'));
            
            // 添加当前标签的激活状态
            this.classList.add('active');
            
            // 显示相关技能信息（模拟）
            const skillName = this.textContent;
            showSkillInfo(skillName);
        });
    });
    
    function showSkillInfo(skillName) {
        // 创建技能信息弹窗
        const existingPopup = document.querySelector('.skill-popup');
        if (existingPopup) {
            existingPopup.remove();
        }
        
        const popup = document.createElement('div');
        popup.className = 'skill-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <h3>${skillName}</h3>
                <p>这是关于 ${skillName} 技能的详细信息...</p>
                <button class="popup-close"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // 显示弹窗
        setTimeout(() => {
            popup.classList.add('show');
        }, 10);
        
        // 关闭按钮
        popup.querySelector('.popup-close').addEventListener('click', function() {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.remove();
            }, 300);
        });
        
        // 点击外部关闭
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                popup.classList.remove('show');
                setTimeout(() => {
                    popup.remove();
                }, 300);
            }
        });
    }
    
    // 时间线项目点击效果
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除其他项目的激活状态
            timelineItems.forEach(i => i.classList.remove('active'));
            
            // 添加当前项目的激活状态
            this.classList.add('active');
            
            // 滚动到视图中心
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
    
    // 添加弹窗样式
    const popupStyles = `
    .skill-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    
    .skill-popup.show {
        opacity: 1;
        visibility: visible;
    }
    
    .popup-content {
        background-color: var(--card-bg);
        border-radius: var(--radius);
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        box-shadow: var(--shadow-hover);
        position: relative;
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }
    
    .skill-popup.show .popup-content {
        transform: translateY(0);
    }
    
    .popup-content h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    .popup-content p {
        color: var(--text-light);
        line-height: 1.6;
    }
    
    .popup-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: var(--text-light);
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        transition: var(--transition);
    }
    
    .popup-close:hover {
        color: var(--text-color);
    }
    
    .skill-tag.active {
        background-color: var(--primary-color);
        color: white;
    }
    
    .timeline-item.active .timeline-content {
        border: 2px solid var(--primary-color);
    }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = popupStyles;
    document.head.appendChild(styleSheet);
    
    // 个人统计数字动画
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000; // 2秒
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
            }, 16);
        });
    }
    
    // 当统计数字进入视图时触发动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // 观察统计区域
    const statsSection = document.querySelector('.profile-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // 控制台信息
    console.log('%c👤 关于页面已加载', 'color: #4361ee; font-size: 14px; font-weight: bold;');
    console.log('%c📊 技能动画已启用', 'color: #666; font-size: 12px;');
    console.log('%c⏳ 时间线交互已就绪', 'color: #666; font-size: 12px;');
    
    // 添加趣味控制台信息
    console.log('%c💭 "认识自己是智慧的开始" - 苏格拉底', 'color: #888; font-size: 11px; font-style: italic;');
});