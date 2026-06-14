# 个人品牌网站 — 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个灰蓝色调、纯静态、响应式单页个人品牌网站，面向管培生面试官展示专业形象。

**Architecture:** 单页 HTML 入口文件，通过 CSS 变量管理配色和响应式布局，JavaScript 仅负责滚动动画与交互。所有内容硬编码在 HTML 中，无需构建工具，可直接在浏览器打开。

**Tech Stack:** HTML5 + CSS3 (CSS Variables, Grid, Flexbox, Media Queries) + Vanilla JS (Intersection Observer, scroll animations)，部署至 Vercel/GitHub Pages。

---

## 文件总览

| 文件 | 职责 |
|------|------|
| `index.html` | 完整页面结构，6个语义化模块 |
| `css/style.css` | 全局样式、配色变量、布局、动画、响应式 |
| `js/main.js` | Intersection Observer、滚动渐入、导航高亮、时间线动画 |
| `images/avatar.jpg` | 占位头像图片 |
| `README.md` | 项目说明 |

---

### Task 1: 项目脚手架

**Files:**
- Create: `personal-website/index.html`
- Create: `personal-website/css/style.css`
- Create: `personal-website/js/main.js`
- Create: `personal-website/README.md`

- [ ] **Step 1: 创建目录结构和空文件**

```bash
mkdir -p personal-website/css personal-website/js personal-website/images
touch personal-website/index.html personal-website/css/style.css personal-website/js/main.js personal-website/README.md
```

- [ ] **Step 2: 写入 README.md**

```markdown
# 个人品牌网站

工商管理专业 · 管培生候选人个人网站

## 技术

纯 HTML/CSS/JS，无需构建工具。

## 本地预览

直接用浏览器打开 `index.html`，或运行：

npx serve .

## 部署

推送到 GitHub 后通过 Vercel 或 GitHub Pages 自动部署。
```

- [ ] **Step 3: 提交**

```bash
cd personal-website && git init && git add -A && git commit -m "feat: scaffold project structure"
```

---

### Task 2: HTML 页面结构

**Files:**
- Modify: `personal-website/index.html`

- [ ] **Step 1: 写入完整 HTML 结构**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="张同学 · 工商管理专业 · 管培生候选人个人网站">
  <title>张同学 | 管培生候选人</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- 导航栏 -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <div class="nav-brand">
        <span class="nav-name">张同学</span>
        <span class="nav-divider">|</span>
        <span class="nav-title">管培生候选人</span>
      </div>
      <ul class="nav-links">
        <li><a href="#about" class="nav-link">关于</a></li>
        <li><a href="#education" class="nav-link">教育</a></li>
        <li><a href="#skills" class="nav-link">能力</a></li>
        <li><a href="#projects" class="nav-link">项目</a></li>
        <li><a href="#contact" class="nav-link">联系</a></li>
      </ul>
    </div>
  </nav>

  <main class="container">
    <!-- 个人陈述 -->
    <section id="about" class="hero reveal">
      <div class="hero-avatar">
        <img src="images/avatar.jpg" alt="张同学" class="avatar-img">
      </div>
      <div class="hero-text">
        <h1 class="hero-name">张同学</h1>
        <p class="hero-tagline">工商管理专业 · 目标管培生</p>
        <p class="hero-statement">
          以结构化思维驱动商业问题，以踏实态度走出每一步。正在寻找能让我快速成长的管培生机会。
        </p>
      </div>
    </section>

    <!-- 教育背景 + 核心能力 -->
    <div class="card-grid reveal">
      <section id="education" class="card card-left-line">
        <div class="card-header">
          <span class="card-icon">🎓</span>
          <h2 class="card-title">教育背景</h2>
        </div>
        <div class="card-body">
          <p class="school-name"><strong>XX大学</strong> · 工商管理专业</p>
          <p class="school-meta">2024级 · 预计2028年毕业</p>
          <p class="school-detail">GPA 3.5 / 4.0</p>
          <p class="school-detail">核心课程：管理学原理、市场营销、会计学基础、组织行为学</p>
        </div>
      </section>

      <section id="skills" class="card card-left-line">
        <div class="card-header">
          <span class="card-icon">🛠️</span>
          <h2 class="card-title">核心能力</h2>
        </div>
        <div class="card-body">
          <div class="skill-item">
            <span class="skill-label">数据分析 (Excel/SPSS)</span>
            <span class="skill-dots" data-level="4">●●●●○</span>
          </div>
          <div class="skill-item">
            <span class="skill-label">商业写作与演示</span>
            <span class="skill-dots" data-level="3">●●●○○</span>
          </div>
          <div class="skill-item">
            <span class="skill-label">团队协作与沟通</span>
            <span class="skill-dots" data-level="5">●●●●●</span>
          </div>
          <div class="skill-item">
            <span class="skill-label">英语 (CET-6)</span>
            <span class="skill-dots" data-level="3">●●●○○</span>
          </div>
        </div>
      </section>
    </div>

    <!-- 项目经历 -->
    <section id="projects" class="section reveal">
      <div class="section-header">
        <span class="section-icon">📂</span>
        <h2 class="section-title">课程项目与社会实践</h2>
      </div>
      <div class="projects-grid">
        <article class="project-card">
          <h3 class="project-title">某快消品牌市场分析</h3>
          <p class="project-meta">市场营销课程 · 小组组长</p>
          <p class="project-desc">运用 SWOT + 4P 分析框架，完成品牌定位与市场进入策略报告，获课程优秀案例。</p>
        </article>
        <article class="project-card">
          <h3 class="project-title">校园社团招新活动策划</h3>
          <p class="project-meta">学生会实践部</p>
          <p class="project-desc">统筹50人团队从策划到执行全流程，吸引300+新生参与，活动满意度94%。</p>
        </article>
      </div>
    </section>

    <!-- 成长轨迹 -->
    <section id="growth" class="section reveal">
      <div class="section-header">
        <span class="section-icon">📈</span>
        <h2 class="section-title">成长轨迹</h2>
        <span class="section-subtitle">每一步都在积累</span>
      </div>
      <div class="timeline" id="timeline">
        <div class="timeline-item" data-delay="0">
          <div class="timeline-dot completed"></div>
          <div class="timeline-content">
            <time class="timeline-date">2026.06</time>
            <p class="timeline-text">完成 MOS Excel 专家级认证</p>
          </div>
        </div>
        <div class="timeline-item" data-delay="1">
          <div class="timeline-dot completed"></div>
          <div class="timeline-content">
            <time class="timeline-date">2025.12</time>
            <p class="timeline-text">参加全国大学生商业案例分析大赛</p>
          </div>
        </div>
        <div class="timeline-item" data-delay="2">
          <div class="timeline-dot in-progress"></div>
          <div class="timeline-content">
            <time class="timeline-date">进行中</time>
            <p class="timeline-text">Coursera 商业数据分析专项课程</p>
          </div>
        </div>
        <div class="timeline-item timeline-placeholder" data-delay="3">
          <div class="timeline-dot future"></div>
          <div class="timeline-content">
            <time class="timeline-date">期待中</time>
            <p class="timeline-text">第一份实习，从这里开始...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系方式 -->
    <section id="contact" class="contact-bar reveal">
      <a href="mailto:zhang@email.com" class="contact-item">
        <span class="contact-icon">📧</span>
        <span class="contact-text">zhang@email.com</span>
      </a>
      <a href="tel:13800000000" class="contact-item">
        <span class="contact-icon">📱</span>
        <span class="contact-text">138-xxxx-xxxx</span>
      </a>
      <a href="#" class="contact-item">
        <span class="contact-icon">💼</span>
        <span class="contact-text">LinkedIn</span>
      </a>
    </section>

  </main>

  <footer class="footer">
    <p>&copy; 2026 张同学. All rights reserved.</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 浏览器打开 index.html 确认结构完整**

直接用浏览器打开 `personal-website/index.html`，确认所有文字内容可见（此时无样式，纯裸 HTML）。

- [ ] **Step 3: 提交**

```bash
git add index.html && git commit -m "feat: add complete HTML structure"
```

---

### Task 3: CSS 全局基础

**Files:**
- Modify: `personal-website/css/style.css`

- [ ] **Step 1: 写入 CSS Reset + 变量 + 基础排版**

```css
/* === CSS Reset & Variables === */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --color-primary: #2c5282;
  --color-primary-light: #5a9bd5;
  --color-accent: #a0c4e8;
  --color-bg: #edf2f7;
  --color-card: #ffffff;
  --color-text-dark: #1a202c;
  --color-text-mid: #4a5568;
  --color-text-light: #718096;
  --color-text-muted: #a0aec0;
  --color-border: #e2e8f0;
  --color-timeline-line: #e2e8f0;
  --max-width: 720px;
  --nav-height: 56px;
  --radius: 8px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --transition: 0.3s ease;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
}

body {
  font-family: 'Noto Sans SC', system-ui, -apple-system, 'Segoe UI', sans-serif;
  background: var(--color-bg);
  color: var(--color-text-mid);
  font-size: 13px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  color: var(--color-text-dark);
  line-height: 1.3;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: calc(var(--nav-height) + 24px) 16px 48px;
}
```

- [ ] **Step 2: 刷新浏览器确认全局样式生效**

背景色、字体应该已变化。

- [ ] **Step 3: 提交**

```bash
git add css/style.css && git commit -m "feat: add CSS reset, variables, and base typography"
```

---

### Task 4: CSS 导航栏

**Files:**
- Modify: `personal-website/css/style.css`（追加）

- [ ] **Step 1: 写入导航栏样式**

在 style.css 末尾追加：

```css
/* === Navigation === */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--color-primary);
  height: var(--nav-height);
  display: flex;
  align-items: center;
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.nav-name {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
}

.nav-divider {
  color: var(--color-accent);
  font-weight: 300;
}

.nav-title {
  font-size: 11px;
  color: var(--color-accent);
  font-weight: 300;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 16px;
}

.nav-link {
  font-size: 11px;
  color: var(--color-accent);
  transition: color var(--transition);
}

.nav-link:hover,
.nav-link.active {
  color: #fff;
}
```

- [ ] **Step 2: 刷新确认导航栏固定在顶部，深蓝背景**

- [ ] **Step 3: 提交**

```bash
git add css/style.css && git commit -m "feat: add navigation bar styles"
```

---

### Task 5: CSS 个人陈述 (Hero)

**Files:**
- Modify: `personal-website/css/style.css`（追加）

- [ ] **Step 1: 写入 Hero 样式**

```css
/* === Hero / Personal Statement === */
.hero {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 0 24px;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 20px;
}

.hero-avatar {
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-primary-light);
  box-shadow: var(--shadow-sm);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
}

.hero-name {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 2px;
}

.hero-tagline {
  font-size: 13px;
  color: var(--color-primary-light);
  font-weight: 500;
  margin-bottom: 8px;
}

.hero-statement {
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.6;
  max-width: 480px;
}
```

- [ ] **Step 2: 刷新确认 Hero 区排版**

左圆图右文字，分隔线下方。

- [ ] **Step 3: 提交**

```bash
git add css/style.css && git commit -m "feat: add hero/personal statement styles"
```

---

### Task 6: CSS 卡片网格 + 能力条

**Files:**
- Modify: `personal-website/css/style.css`（追加）

- [ ] **Step 1: 写入卡片与技能样式**

```css
/* === Card Grid === */
.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}

.card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 16px;
  transition: transform var(--transition), box-shadow var(--transition);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.card-left-line {
  border-left: 3px solid var(--color-primary-light);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
}

.card-icon {
  font-size: 16px;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-dark);
}

.card-body {
  font-size: 11px;
  color: var(--color-text-mid);
  line-height: 1.6;
}

/* === Skills === */
.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

.skill-item + .skill-item {
  border-top: 1px solid #f7fafc;
}

.skill-label {
  font-size: 11px;
  color: var(--color-text-mid);
}

.skill-dots {
  font-size: 10px;
  color: var(--color-primary);
  letter-spacing: 1px;
}
```

- [ ] **Step 2: 刷新确认双列卡片布局**

- [ ] **Step 3: 提交**

```bash
git add css/style.css && git commit -m "feat: add card grid and skill bar styles"
```

---

### Task 7: CSS 项目区 + 时间线 + 联系方式

**Files:**
- Modify: `personal-website/css/style.css`（追加）

- [ ] **Step 1: 写入项目、时间线、联系方式样式**

```css
/* === Section Heading === */
.section {
  margin-bottom: 16px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.section-icon {
  font-size: 16px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-dark);
}

.section-subtitle {
  font-size: 10px;
  color: var(--color-text-muted);
  margin-left: 4px;
}

/* === Projects === */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.project-card {
  background: var(--color-card);
  border-radius: 6px;
  padding: 12px;
  border: 1px solid var(--color-border);
  transition: transform var(--transition), box-shadow var(--transition);
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.project-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 2px;
}

.project-meta {
  font-size: 10px;
  color: var(--color-text-light);
  margin-bottom: 4px;
}

.project-desc {
  font-size: 10px;
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* === Timeline === */
.timeline {
  position: relative;
  padding-left: 24px;
  border-left: 2px solid var(--color-timeline-line);
  margin-left: 8px;
}

.timeline-item {
  position: relative;
  margin-bottom: 16px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.timeline-item.revealed {
  opacity: 1;
  transform: translateY(0);
}

.timeline-dot {
  position: absolute;
  left: -29px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.timeline-dot.completed {
  background: var(--color-primary-light);
}

.timeline-dot.in-progress {
  background: #fff;
  border: 2px solid var(--color-primary-light);
}

.timeline-dot.future {
  background: #fff;
  border: 2px dashed var(--color-text-muted);
}

.timeline-date {
  font-size: 10px;
  color: var(--color-text-light);
  display: block;
  margin-bottom: 2px;
}

.timeline-text {
  font-size: 11px;
  color: var(--color-text-mid);
  font-weight: 500;
}

.timeline-placeholder .timeline-text {
  color: var(--color-text-muted);
}

/* === Contact Bar === */
.contact-bar {
  display: flex;
  justify-content: center;
  gap: 28px;
  padding: 16px;
  background: var(--color-bg);
  border-radius: var(--radius);
  margin-top: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--color-text-mid);
  transition: color var(--transition);
}

.contact-item:hover {
  color: var(--color-primary);
}

.contact-icon {
  font-size: 16px;
}
```

- [ ] **Step 2: 刷新确认所有模块样式正确**

- [ ] **Step 3: 提交**

```bash
git add css/style.css && git commit -m "feat: add projects, timeline, and contact styles"
```

---

### Task 8: CSS 响应式 + Footer + 动画

**Files:**
- Modify: `personal-website/css/style.css`（追加）

- [ ] **Step 1: 写入响应式、Footer、动画基础**

```css
/* === Footer === */
.footer {
  text-align: center;
  padding: 24px 16px;
  font-size: 10px;
  color: var(--color-text-muted);
}

/* === Scroll Reveal Base === */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* === Responsive === */
@media (max-width: 600px) {
  .container {
    padding-left: 12px;
    padding-right: 12px;
  }

  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-statement {
    max-width: 100%;
  }

  .nav-links {
    gap: 10px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .contact-bar {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}

/* === Reduced Motion === */
@media (prefers-reduced-motion: reduce) {
  .reveal,
  .timeline-item {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .card:hover,
  .project-card:hover {
    transform: none;
  }
}
```

- [ ] **Step 2: 浏览器缩小至手机宽度验证单列布局**

确认 @media 断点 (600px) 触发后卡片从双列变单列，Hero 区居中堆叠。

- [ ] **Step 3: 提交**

```bash
git add css/style.css && git commit -m "feat: add responsive styles, footer, and reduced motion"
```

---

### Task 9: JavaScript — 滚动渐入 + 导航高亮

**Files:**
- Modify: `personal-website/js/main.js`

- [ ] **Step 1: 写入 Intersection Observer 和导航逻辑**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // === Scroll Reveal ===
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // === Navigation Highlight ===
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-56px 0px -20% 0px' }
  );

  sections.forEach((section) => navObserver.observe(section));
});
```

- [ ] **Step 2: 浏览器中滚动验证**

滚动页面时，卡片应从下方淡入；导航栏当前区域对应链接应高亮。

- [ ] **Step 3: 提交**

```bash
git add js/main.js && git commit -m "feat: add scroll reveal and navigation highlight"
```

---

### Task 10: JavaScript — 时间线动画

**Files:**
- Modify: `personal-website/js/main.js`（追加）

- [ ] **Step 1: 追加时间线逐个点亮逻辑**

在 `DOMContentLoaded` 回调末尾追加：

```javascript
  // === Timeline Stagger Animation ===
  const timeline = document.getElementById('timeline');
  if (timeline) {
    const timelineItems = timeline.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineItems.forEach((item, index) => {
              const delay = parseInt(item.getAttribute('data-delay')) || index;
              setTimeout(() => {
                item.classList.add('revealed');
              }, delay * 200);
            });
            timelineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineObserver.observe(timeline);
  }
```

- [ ] **Step 2: 刷新页面，滚到时间线区域**

时间线节点应从上方逐个淡入（每个间隔 200ms），而非同时出现。

- [ ] **Step 3: 提交**

```bash
git add js/main.js && git commit -m "feat: add timeline stagger animation"
```

---

### Task 11: 最终检查与优化

**Files:**
- Modify: `personal-website/index.html`（如有需要）
- Modify: `personal-website/css/style.css`（如有需要）

- [ ] **Step 1: 移动端全页测试**

浏览器 DevTools 切换到 iPhone SE / Pixel 5 视口，逐模块滚过：
- 导航栏不换行 ✅
- Hero 居中堆叠 ✅
- 卡片单列全宽 ✅
- 项目单列 ✅
- 联系方式纵排 ✅
- 所有文字可读 ✅

- [ ] **Step 2: 性能检查**

在浏览器 DevTools → Network 面板：
- 总请求数应 < 5（HTML、CSS、JS、Google Font CSS、头像图片）
- 首屏加载 < 2 秒

- [ ] **Step 3: 无障碍检查**

- 所有图片有 `alt` 属性 ✅
- 语义化 HTML（nav、main、section、article、footer）✅
- 链接可键盘聚焦 ✅
- `prefers-reduced-motion` 媒体查询 ✅

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "chore: final polish and accessibility checks"
```

---

## 实施后待办（需用户提供真实信息后替换）

- [ ] 替换 `index.html` 中所有「张同学」为真实姓名
- [ ] 替换学校名称、专业、GPA
- [ ] 替换 `images/avatar.jpg` 为真实照片
- [ ] 替换课程项目为真实经历
- [ ] 替换联系方式（邮箱、电话、LinkedIn）
- [ ] 部署至 Vercel 或 GitHub Pages
