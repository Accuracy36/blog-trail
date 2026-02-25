# Match的个人博客网站

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

一个现代化、响应式的个人博客网站，包含完整的博客功能、主题切换和移动端适配。

## 🌐 在线演示

访问地址：`https://[你的用户名].github.io/match-personal-blog/`

## ✨ 功能特性

### 🎨 设计特点
- **响应式设计** - 完美适配手机、平板、桌面设备
- **主题切换** - 亮色/暗色模式，自动保存用户偏好
- **现代UI** - 简洁美观的界面设计，流畅的动画效果
- **可访问性** - 良好的键盘导航和屏幕阅读器支持

### 📱 页面功能
1. **首页** (`index.html`)
   - 个人简介展示
   - 精选文章推荐
   - 技能统计展示
   - 最新动态

2. **博客页面** (`blog.html`)
   - 文章列表展示
   - 搜索和筛选功能
   - 分类和标签系统
   - 分页导航
   - 侧边栏小工具

3. **关于页面** (`about.html`)
   - 个人资料展示
   - 技能专长（带动画效果）
   - 学习历程时间线
   - 兴趣爱好展示
   - 价值观和理念

4. **联系页面** (`contact.html`)
   - 联系表单（前端验证）
   - 联系信息展示
   - 常见问题FAQ
   - 社交媒体链接

### 🔧 技术特性
- **纯静态网站** - 无需服务器，部署简单
- **模块化CSS** - 使用CSS变量实现主题系统
- **渐进增强** - 核心功能在不支持JS时仍可用
- **性能优化** - 快速加载，优化渲染性能

## 🚀 快速开始

### 本地运行
```bash
# 克隆仓库
git clone https://github.com/[你的用户名]/match-personal-blog.git

# 进入目录
cd match-personal-blog

# 使用Python启动本地服务器
python -m http.server 8000

# 在浏览器中访问
# http://localhost:8000
```

### 直接打开
1. 下载项目文件
2. 双击 `index.html` 文件
3. 浏览器会自动打开网站

## 📁 项目结构

```
match-personal-blog/
├── index.html          # 首页
├── blog.html          # 博客页面
├── about.html         # 关于页面
├── contact.html       # 联系页面
├── css/
│   └── style.css     # 主样式文件（包含主题变量）
├── js/
│   ├── script.js     # 通用功能（主题切换、导航等）
│   ├── blog.js       # 博客页面功能
│   ├── about.js      # 关于页面功能
│   └── contact.js    # 联系页面功能
├── README.md         # 项目说明（本文件）
└── README.txt        # 详细使用说明
```

## 🎯 部署指南

### GitHub Pages（推荐）
1. Fork或创建新仓库
2. 上传所有文件到仓库
3. 进入仓库设置 → Pages
4. 选择分支：`main`，文件夹：`/`（根目录）
5. 保存后访问：`https://[你的用户名].github.io/match-personal-blog/`

### 其他部署选项
- **Vercel** - 拖拽部署，自动SSL
- **Netlify** - 免费CDN，自动部署
- **Cloudflare Pages** - 边缘网络，快速访问
- **自定义服务器** - 任何支持静态文件的Web服务器

## 🛠️ 自定义配置

### 修改主题颜色
编辑 `css/style.css` 中的CSS变量：
```css
:root {
    --primary-color: #4361ee;    /* 主色调 */
    --secondary-color: #3a0ca3;  /* 次要色调 */
    --accent-color: #f72585;     /* 强调色 */
    --text-color: #333333;       /* 文字颜色 */
    --bg-color: #ffffff;         /* 背景颜色 */
    /* ... 更多变量 */
}
```

### 添加新文章
在 `blog.html` 中添加：
```html
<article class="blog-article">
    <div class="article-meta">
        <span class="article-date"><i class="far fa-calendar"></i> 2024-01-01</span>
        <span class="article-category"><i class="far fa-folder"></i> 技术</span>
    </div>
    <h2><a href="#">文章标题</a></h2>
    <p class="article-excerpt">文章摘要内容...</p>
    <a href="#" class="read-more">阅读全文 →</a>
</article>
```

### 更新个人信息
编辑各个HTML文件中的相关内容，或通过JavaScript动态加载。

## 📚 使用说明

### 主题切换
- 点击右上角的月亮/太阳图标切换主题
- 用户偏好会自动保存在本地存储中
- 系统会根据设备主题自动选择初始主题

### 移动端菜单
- 在移动设备上，点击汉堡菜单图标展开导航
- 菜单支持触摸滑动关闭
- 适配各种屏幕尺寸

### 表单验证
- 联系表单包含前端验证
- 实时验证输入内容
- 友好的错误提示

## 🔗 外部资源

- **字体**：Google Fonts (Noto Sans SC, Source Code Pro)
- **图标**：Font Awesome 6.4.0
- **配色方案**：基于现代设计原则

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 📞 联系

- 通过博客联系页面联系
- 提交GitHub Issue
- 发送邮件到 match@example.com

---

**创建时间**：2026年2月25日  
**最后更新**：2026年2月26日  
**版本**：1.0.0