// 联系页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 联系表单处理
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 表单验证
        if (!validateForm()) {
            return;
        }
        
        // 显示加载状态
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        submitBtn.disabled = true;
        
        // 模拟表单提交（实际应用中这里会发送到服务器）
        setTimeout(() => {
            // 收集表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                newsletter: document.getElementById('newsletter').checked,
                timestamp: new Date().toISOString()
            };
            
            // 记录到控制台（实际应用中会发送到服务器）
            console.log('表单提交:', formData);
            
            // 显示成功消息
            showNotification('消息发送成功！我会尽快回复你。', 'success');
            
            // 重置表单
            contactForm.reset();
            
            // 恢复按钮状态
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
            
        }, 1500); // 模拟网络延迟
    });
    
    // 表单验证
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // 清除之前的错误提示
        clearErrors();
        
        // 验证姓名
        if (name === '') {
            showError('name', '请输入姓名');
            isValid = false;
        } else if (name.length < 2) {
            showError('name', '姓名至少需要2个字符');
            isValid = false;
        }
        
        // 验证邮箱
        if (email === '') {
            showError('email', '请输入邮箱地址');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', '请输入有效的邮箱地址');
            isValid = false;
        }
        
        // 验证消息内容
        if (message === '') {
            showError('message', '请输入消息内容');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', '消息内容至少需要10个字符');
            isValid = false;
        }
        
        return isValid;
    }
    
    // 邮箱验证
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // 显示错误提示
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        
        // 添加错误类
        field.classList.add('error');
        
        // 创建错误消息元素
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        // 添加到表单组
        formGroup.appendChild(errorElement);
        
        // 聚焦到错误字段
        field.focus();
    }
    
    // 清除错误提示
    function clearErrors() {
        // 移除错误类
        document.querySelectorAll('.form-control.error').forEach(field => {
            field.classList.remove('error');
        });
        
        // 移除错误消息
        document.querySelectorAll('.error-message').forEach(error => {
            error.remove();
        });
    }
    
    // 实时验证
    const formFields = contactForm.querySelectorAll('input, textarea, select');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                validateField(this);
            }
        });
        
        field.addEventListener('input', function() {
            // 输入时移除错误状态
            this.classList.remove('error');
            const errorMsg = this.closest('.form-group')?.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
    
    // 单个字段验证
    function validateField(field) {
        const value = field.value.trim();
        const fieldId = field.id;
        
        switch (fieldId) {
            case 'name':
                if (value.length < 2) {
                    showError(fieldId, '姓名至少需要2个字符');
                    return false;
                }
                break;
                
            case 'email':
                if (!validateEmail(value)) {
                    showError(fieldId, '请输入有效的邮箱地址');
                    return false;
                }
                break;
                
            case 'message':
                if (value.length < 10) {
                    showError(fieldId, '消息内容至少需要10个字符');
                    return false;
                }
                break;
        }
        
        return true;
    }
    
    // FAQ功能
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // 切换当前FAQ
            const isActive = answer.style.display === 'block';
            
            // 关闭所有FAQ
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // 重置所有图标
            document.querySelectorAll('.faq-question i').forEach(ic => {
                ic.className = 'fas fa-chevron-down';
            });
            
            // 如果当前是关闭状态，则打开
            if (!isActive) {
                answer.style.display = 'block';
                icon.className = 'fas fa-chevron-up';
            }
        });
    });
    
    // 社交链接点击效果
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 模拟链接点击（实际应用中会跳转到相应页面）
            const platform = this.querySelector('i').className.split(' ')[1].replace('fa-', '');
            showNotification(`即将跳转到${platform}... (演示模式)`, 'info');
        });
    });
    
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
    
    // 添加样式
    const contactStyles = `
    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin: 2rem 0;
    }
    
    .contact-form-section,
    .contact-info-section {
        background-color: var(--card-bg);
        border-radius: var(--radius);
        padding: 2rem;
        box-shadow: var(--shadow);
    }
    
    .contact-form-section h2,
    .contact-info-section h2 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }
    
    .form-description {
        color: var(--text-light);
        margin-bottom: 2rem;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var(--text-color);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 0.8rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: inherit;
        font-size: 1rem;
        transition: var(--transition);
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #f44336;
    }
    
    .error-message {
        color: #f44336;
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }
    
    .checkbox-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .checkbox-group input[type="checkbox"] {
        width: auto;
    }
    
    .submit-btn {
        width: 100%;
        padding: 1rem;
        font-size: 1.1rem;
    }
    
    .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .contact-method {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1rem;
        align-items: start;
    }
    
    .method-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
    }
    
    .method-content h3 {
        font-size: 1.2rem;
        margin-bottom: 0.3rem;
    }
    
    .method-content p {
        color: var(--text-light);
        margin-bottom: 0.2rem;
    }
    
    .method-content small {
        color: var(--text-light);
        opacity: 0.8;
        font-size: 0.9rem;
    }
    
    .social-contact {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .social-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary-color);
        text-decoration: none;
        transition: var(--transition);
    }
    
    .social-link:hover {
        color: var(--secondary-color);
        transform: translateX(5px);
    }
    
    .faq-section {
        margin-bottom: 2rem;
    }
    
    .faq-section h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    
    .faq-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .faq-question {
        width: 100%;
        padding: 1rem;
        background-color: var(--bg-light);
        border: none;
        border-radius: var(--radius);
        text-align: left;
        font-weight: 500;
        color: var(--text-color);
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: var(--transition);
    }
    
    .faq-question:hover {
        background-color: var(--border-color);
    }
    
    .faq-answer {
        padding: 1rem;
        background-color: var(--bg-color);
        border-radius: var(--radius);
        margin-top: 0.5rem;
        display: none;
    }
    
    .faq-answer p {
        color: var(--text-light);
        line-height: 1.6;
    }
    
    .contact-tips {
        background-color: var(--bg-light);
        border-radius: var(--radius);
        padding: 1.5rem;
    }
    
    .contact-tips h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    
    .contact-tips ul {
        padding-left: 1.5rem;
        color: var(--text-light);
    }
    
    .contact-tips li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
    }
    
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
    
    .notification-info {
        border-left-color: #2196F3;
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
    
    @media (max-width: 768px) {
        .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = contactStyles;
    document.head.appendChild(styleSheet);
    
    // 控制台信息
    console.log('%c📧 联系页面已加载', 'color: #4361ee; font-size: 14px; font-weight: bold;');
    console.log('%c✅ 表单验证已启用', 'color: #666; font-size: 12px;');
    console.log('%c❓ FAQ功能已就绪', 'color: #666; font-size: 12px;');
    
    // 添加趣味控制台信息
    console.log('%c💬 "沟通是理解的桥梁"', 'color: #888; font-size: 11px; font-style: italic;');
});