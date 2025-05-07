# RPT Website - Product Requirements Document

## Tổng quan sản phẩm
Website RPT là nền tảng trực tuyến giới thiệu về công ty RPT - một công ty công nghệ chuyên xây dựng các AI Agent thế hệ mới và Agentic AI. Website sẽ cung cấp thông tin về công ty, các giải pháp công nghệ, và demo tương tác với AI agent.

## Mục tiêu

- Giới thiệu RPT là một công ty công nghệ tiên phong trong lĩnh vực AI Agent
- Trình bày các vấn đề hiện tại mà RPT giải quyết trong thế giới AI agent
- Minh họa cách RPT sử dụng các công nghệ A2A và MCP để hỗ trợ giao tiếp AI-to-AI và AI-to-human
- Cung cấp demo tương tác cho người dùng trải nghiệm công nghệ của RPT

## Đối tượng người dùng

- Các công ty đang tìm kiếm giải pháp AI tiên tiến
- Các nhà đầu tư quan tâm đến công nghệ AI Agent
- Nhà phát triển và người dùng công nghệ quan tâm đến AI Agents
- Các đối tác tiềm năng

## Yêu cầu chức năng

### 1. Landing Page
- Hero section với thông điệp chính và CTA
- Giới thiệu về RPT và tầm nhìn
- Các vấn đề RPT giải quyết trong thế giới AI mới
- Giải pháp công nghệ của RPT (A2A, MCP)
- Lợi ích khi sử dụng công nghệ của RPT
- Section giới thiệu nhóm phát triển (nếu có)
- Liên hệ và kêu gọi hành động

### 2. Demo Section
- Giao diện chat đơn giản để người dùng tương tác với AI agent
- Hiển thị khả năng của công nghệ A2A
- Giải thích cách thức hoạt động của demo

## Yêu cầu kỹ thuật

### Front-end
- Vue.js (phiên bản mới nhất)
- Vite làm build tool
- Tailwind CSS cho styling
- PWA plugin để hỗ trợ Progressive Web App
- Responsive design cho mọi thiết bị

### Performance
- Thời gian tải trang < 3 giây
- Optimized images và assets
- Lazy loading cho các thành phần không cần thiết ngay lập tức

### SEO
- Meta tags tối ưu
- Semantic HTML
- Sitemap

## Thiết kế UI/UX

### Style Guide
- Sử dụng font sans-serif hiện đại (Inter hoặc SF Pro Display)
- Bảng màu: xanh dương đậm, xanh dương nhạt, trắng, xám nhạt (có thể điều chỉnh)
- Icon set nhất quán
- Micro-animations cho trải nghiệm người dùng tốt hơn

### Layout
- Header với logo và menu navigation
- Các section rõ ràng, có spacing hợp lý
- Footer với thông tin liên hệ và social links

## Lộ trình phát triển

### Phase 1: MVP
- Thiết lập dự án với Vite, Vue, Tailwind CSS và PWA
- Phát triển landing page với nội dung cơ bản
- Responsive design

### Phase 2: Enhanced Features
- Phát triển demo section 
- Tối ưu hiệu suất và SEO

### Phase 3: Final Polish
- Testing và debugging
- Tinh chỉnh UI/UX
- Triển khai PWA

## Theo dõi và đánh giá
- Theo dõi lượng truy cập trang
- Đánh giá thời gian tương tác trên trang
- Phân tích hiệu quả của demo section
