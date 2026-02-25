# Match的个人博客 - 使用说明

## 项目概述
这是一个完整的个人博客网站，包含首页、博客、关于、联系四个主要页面。网站采用现代响应式设计，支持暗色/亮色主题切换。

## 文件结构
```
personal_blog/
├── index.html          # 首页
├── blog.html          # 博客页面
├── about.html         # 关于页面
├── contact.html       # 联系页面
├── css/
│   └── style.css     # 主样式文件
├── js/
│   ├── script.js     # 通用功能
│   ├── blog.js       # 博客页面功能
│   ├── about.js      # 关于页面功能
│   └── contact.js    # 联系页面功能
└── README.txt        # 本文件
```

## 如何查看博客
1. **直接打开**：在文件管理器中双击 `index.html` 文件
2. **使用浏览器**：将 `index.html` 拖拽到浏览器窗口
3. **本地服务器**（推荐）：
   ```bash
   # 使用Python启动简单HTTP服务器
   python -m http.server 8000
   # 然后在浏览器访问 http://localhost:8000
   ```

## 主要功能

### 1. 首页 (index.html)
- 个人简介展示
- 精选文章推荐
- 统计数据展示
- 响应式设计

### 2. 博客页面 (blog.html)
- 文章列表展示
- 搜索功能
- 分类和标签筛选
- 分页导航
- 侧边栏小工具

### 3. 关于页面 (about.html)
- 个人资料展示
- 技能专长（带动画）
- 学习历程时间线
- 兴趣爱好
- 价值观展示

### 4. 联系页面 (contact.html)
- 联系表单（带验证）
- 联系信息展示
- 常见问题FAQ
- 联系提示

## 特色功能
- ✅ 暗色/亮色主题切换
- ✅ 响应式设计（支持手机、平板、桌面）
- ✅ 平滑滚动导航
- ✅ 表单验证
- ✅ 动画效果
- ✅ 通知系统
- ✅ 移动端菜单

## 技术栈
- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- JavaScript (ES6+)
- Font Awesome 图标
- Google Fonts 字体

## 浏览器兼容性
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- 移动端浏览器

## 自定义修改

### 修改内容
1. 编辑HTML文件修改文本内容
2. 修改 `css/style.css` 调整样式
3. 修改 `js/` 目录下的文件调整功能

### 修改主题颜色
在 `css/style.css` 中修改CSS变量：
```css
:root {
    --primary-color: #4361ee;    /* 主色调 */
    --secondary-color: #3a0ca3;  /* 次要色调 */
    --accent-color: #f72585;     /* 强调色 */
    /* ... 其他变量 */
}
```

### 添加新文章
在 `blog.html` 中添加新的文章卡片：
```html
<article class="blog-article">
    <div class="article-meta">
        <span class="article-date"><i class="far fa-calendar"></i> 日期</span>
        <span class="article-category"><i class="far fa-folder"></i> 分类</span>
        <span class="article-read-time"><i class="far fa-clock"></i> 阅读时间</span>
    </div>
    <h2><a href="#">文章标题</a></h2>
    <p class="article-excerpt">文章摘要...</p>
    <div class="article-tags">
        <span class="tag">标签1</span>
        <span class="tag">标签2</span>
    </div>
    <a href="#" class="read-more">阅读全文 <i class="fas fa-arrow-right"></i></a>
</article>
```

## 部署到网络

### GitHub Pages
1. 创建GitHub仓库
2. 上传所有文件到仓库
3. 在仓库设置中启用GitHub Pages
4. 访问 `https://你的用户名.github.io/仓库名`

### 其他静态托管
- Netlify
- Vercel
- Cloudflare Pages
- 任何支持静态文件的Web服务器

## 注意事项
1. 所有功能都在前端实现，无需后端支持
2. 表单提交功能为演示模式，实际使用需要后端支持
3. 图片资源使用Font Awesome图标，可替换为实际图片
4. 网站性能已优化，加载速度快

## 联系信息
如有问题或建议，请通过博客联系页面联系。

---
创建时间：2026年2月25日
版本：1.0