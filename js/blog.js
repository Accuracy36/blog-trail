// 博客页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const articles = document.querySelectorAll('.blog-article');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // 显示所有文章
            articles.forEach(article => {
                article.style.display = 'block';
            });
            return;
        }
        
        let foundCount = 0;
        
        articles.forEach(article => {
            const title = article.querySelector('h2').textContent.toLowerCase();
            const excerpt = article.querySelector('.article-excerpt').textContent.toLowerCase();
            const tags = Array.from(article.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            const matches = title.includes(searchTerm) || 
                           excerpt.includes(searchTerm) || 
                           tags.some(tag => tag.includes(searchTerm));
            
            if (matches) {
                article.style.display = 'block';
                foundCount++;
                
                // 高亮匹配的文本
                highlightText(article, searchTerm);
            } else {
                article.style.display = 'none';
            }
        });
        
        // 显示搜索结果统计
        showSearchResults(foundCount, searchTerm);
    }
    
    function highlightText(element, searchTerm) {
        const textElements = element.querySelectorAll('h2, .article-excerpt');
        
        textElements.forEach(textElement => {
            const originalHTML = textElement.innerHTML;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedHTML = originalHTML.replace(regex, '<mark class="search-highlight">$1</mark>');
            textElement.innerHTML = highlightedHTML;
        });
    }
    
    function showSearchResults(count, term) {
        // 移除之前的搜索结果提示
        const existingResult = document.querySelector('.search-results-info');
        if (existingResult) {
            existingResult.remove();
        }
        
        if (term === '') return;
        
        const resultsInfo = document.createElement('div');
        resultsInfo.className = 'search-results-info';
        resultsInfo.innerHTML = `
            <p>找到 <strong>${count}</strong> 篇与 "<strong>${term}</strong>" 相关的文章</p>
            <button id="clearSearch" class="btn btn-outline">清除搜索</button>
        `;
        
        const articlesList = document.querySelector('.articles-list');
        articlesList.insertBefore(resultsInfo, articlesList.firstChild);
        
        // 清除搜索按钮
        document.getElementById('clearSearch').addEventListener('click', function() {
            searchInput.value = '';
            performSearch();
        });
    }
    
    // 搜索事件监听
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 分类和标签点击事件
    document.querySelectorAll('.categories-list a, .tags-cloud .tag').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.toLowerCase();
            searchInput.value = text;
            performSearch();
        });
    });
    
    // 订阅表单处理
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // 模拟订阅成功
                showNotification('订阅成功！你将收到最新的文章更新。', 'success');
                emailInput.value = '';
                
                // 记录订阅（在实际应用中，这里会发送到服务器）
                console.log(`新订阅: ${email}`);
            } else {
                showNotification('请输入有效的邮箱地址', 'error');
            }
        });
    }
    
    // 邮箱验证
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // 显示通知
    function showNotification(message, type) {
        // 移除之前的通知
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        document.body.appendChild(notification);
        
        // 显示通知
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // 关闭按钮
        notification.querySelector('.notification-close').addEventListener('click', function() {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // 自动关闭
        setTimeout(() => {
            if (notification.parentNode) {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // 添加通知样式
    const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        background-color: var(--card-bg);
        box-shadow: var(--shadow-hover);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        z-index: 9999;
        transform: translateX(100%);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        max-width: 400px;
        border-left: 4px solid var(--primary-color);
    }
    
    .notification.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    .notification-success {
        border-left-color: #4CAF50;
    }
    
    .notification-error {
        border-left-color: #f44336;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-light);
        cursor: pointer;
        padding: 0.2rem;
        font-size: 0.9rem;
        transition: var(--transition);
    }
    
    .notification-close:hover {
        color: var(--text-color);
    }
    
    .search-highlight {
        background-color: rgba(255, 235, 59, 0.3);
        padding: 0.1rem 0.2rem;
        border-radius: 2px;
    }
    
    .search-results-info {
        background-color: var(--bg-light);
        padding: 1.5rem;
        border-radius: var(--radius);
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);
    
    // 文章阅读时间计算（模拟）
    function calculateReadTime() {
        const articles = document.querySelectorAll('.blog-article');
        
        articles.forEach(article => {
            const excerpt = article.querySelector('.article-excerpt').textContent;
            const wordCount = excerpt.split(/\s+/).length;
            const readTime = Math.ceil(wordCount / 200); // 假设200字/分钟
            
            const readTimeElement = article.querySelector('.article-read-time');
            if (readTimeElement) {
                readTimeElement.innerHTML = `<i class="far fa-clock"></i> ${readTime}分钟阅读`;
            }
        });
    }
    
    // 初始化阅读时间
    calculateReadTime();
    
    // 控制台信息
    console.log('%c📖 博客页面已加载', 'color: #4361ee; font-size: 14px; font-weight: bold;');
    console.log('%c🔍 搜索功能已启用', 'color: #666; font-size: 12px;');
    console.log('%c📧 订阅功能已就绪', 'color: #666; font-size: 12px;');
});