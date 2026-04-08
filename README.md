# 课题组官网原型

这是一个无需安装依赖的静态网站原型，适合您当前的路线：

- 公开官网放到 `GitHub Pages` 或 `Vercel`
- 内部文献、周报、会议纪要、代码、数据继续放在 NAS

## 文件说明

- `index.html`：页面结构
- `styles.css`：视觉样式与响应式布局
- `content.js`：课题组信息、成员、研究方向、更新位
- `script.js`：内容渲染、移动端导航、滚动显现

后续最常修改的是 `content.js`。

当前网页内容已经按 INSPIRE 作者页与指定论文重写，包含：

- 研究动态
- 学生成果展示
- 最新论文
- 成员梯队与联系信息

## 建议先补充的信息

请优先按需要更新 `content.js` 中这些内容：

- 研究动态中的聚焦论文
- 学生成果展示
- 最新论文列表
- 联系方式与招生信息

## 本地查看

直接双击 `index.html` 就能打开。

如果您想通过本地服务预览，也可以在当前目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`

## 部署建议

### 方案 A：GitHub Pages

适合最省心的公开托管。

1. 新建一个 GitHub 仓库
2. 上传这 4 个文件
3. 在仓库设置中开启 `Pages`
4. 选择发布分支即可

官方文档：
[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

### 方案 B：Vercel

适合希望页面更现代、后续还可能扩展的网站。

1. 把目录上传到 GitHub
2. 在 Vercel 导入该仓库
3. 保持默认静态站设置即可

官方文档：
[Vercel Docs](https://vercel.com/docs)

## NAS 建议目录

公开官网不要直接和内部资料混在一起。NAS 建议单独建立：

- `组会与周报`
- `文献与综述`
- `代码与作图`
- `数据与结果归档`

这样官网继续负责对外展示，NAS 专注内部协作与备份。
