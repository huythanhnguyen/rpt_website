# RPT Website

Website giới thiệu cho công ty RPT, chuyên xây dựng các AI Agent thế hệ mới và Agentic AI.

## Công nghệ sử dụng

- Vue.js 3 (bản mới nhất)
- Vite
- Tailwind CSS
- PWA plugin

## Cấu trúc dự án

```
rpt_website/
├── public/             # Static assets
├── src/
│   ├── assets/         # Project assets (images, fonts, etc.)
│   ├── components/     # Vue components
│   ├── stores/         # Pinia stores 
│   ├── views/          # Page components
│   ├── App.vue         # Root component
│   ├── main.js         # Entry point
│   └── style.css       # Global CSS
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── prd.md              # Product Requirements Document
├── tasklog.md          # Task Log
├── rpt_project.md      # Project Rules
└── README.md           # Project documentation
```

## Cài đặt

1. Cài đặt dependencies:

```bash
npm install
```

2. Chạy development server:

```bash
npm run dev
```

3. Build cho production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Tài liệu dự án

- **prd.md**: Mô tả chi tiết về sản phẩm và yêu cầu
- **tasklog.md**: Ghi nhận các task đã và đang thực hiện
- **rpt_project.md**: Quy tắc và hướng dẫn cho dự án

## Nội dung website

1. **Landing Page**: Giới thiệu về RPT, công nghệ A2A và MCP
2. **Demo Page**: Demo tương tác với AI agent sử dụng công nghệ A2A

## Required Manual Steps

1. Add the Google AGENT2AGENT diagram image:
   - Save the provided diagram image as `agent2agent-diagram.png` 
   - Place it in the `src/assets/` directory
   - It's already imported and used in Home.vue

2. Create and add PWA icons:
   - Create the following icon files and place them in the `public/` directory:
     - pwa-192x192.png (192x192 pixels)
     - pwa-512x512.png (512x512 pixels)
     - favicon.ico
     - apple-touch-icon.png
     - masked-icon.svg
   - These are referenced in the vite.config.js for the PWA manifest
   - Without these icons, the build process will fail

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

The project follows Vue 3 + Vite structure with Tailwind CSS for styling.

## Deployment

```bash
# Build for production
npm run build
```
