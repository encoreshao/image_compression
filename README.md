# 图片压缩工具

这是一个简单的图片压缩网站，用户可以上传 PNG 和 JPG 格式的图片，选择压缩比例，查看压缩前后的效果，并下载压缩后的图片。

## 功能

- 上传 PNG, JPG 格式的图片
- 选择压缩比例
- 预览上传的图片和压缩后的图片
- 显示压缩前和压缩后的文件大小
- 下载压缩后的图片

## 技术栈

- 前端：HTML, CSS, JavaScript
- 后端：Node.js, Express
- 图片处理：Sharp

## 安装和运行

### 前提条件

- Node.js 和 npm 已安装

### 安装步骤

1. 克隆项目到本地：

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. 安装依赖：

   ```bash
   npm install express multer sharp
   npm install
   ```

3. 启动服务器：

   ```bash
   node server.js
   ```

4. 在浏览器中访问 `http://localhost:3000` 查看网站。

## 项目结构

```bash
➜  image_compression tree -I 'node_modules'
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── server.js

2 directories, 7 files
```

## 使用说明

1. 打开网站后，点击“上传图片”按钮选择要压缩的图片。
2. 使用滑动条选择压缩比例。
3. 点击“压缩图片”按钮，查看压缩前后的图片预览和文件大小。
4. 点击“下载压缩图片”按钮下载压缩后的图片。

## 贡献

欢迎贡献代码！请 fork 本项目并提交 pull request。

## 许可证

本项目采用 MIT 许可证。
