# RPT Website - Project Rules

## Quy tắc chung

1. **Cấu trúc thư mục chuẩn**: Tuân thủ cấu trúc thư mục của Vite + Vue
2. **Quy tắc đặt tên**:
   - Kebab-case cho tên file (ví dụ: `hero-section.vue`)
   - PascalCase cho tên component (ví dụ: `HeroSection`)
   - camelCase cho biến và function
   - UPPER_SNAKE_CASE cho constants
3. **Commit message**: Tuân thủ format "type: message" (ví dụ: "feat: add hero section")

## Coding Standards

### Vue

1. **Component structure**:
   ```vue
   <script setup>
   // Imports
   // Props, emits
   // State, computed, watch
   // Lifecycle hooks
   // Methods
   </script>

   <template>
     <!-- Template content -->
   </template>

   <style scoped>
   /* Component-specific styles (if not using Tailwind classes) */
   </style>
   ```

2. **Props và Emit**:
   - Định nghĩa rõ ràng tất cả props với type và default value
   - Sử dụng emit cho event handling

3. **State Management**:
   - Sử dụng Pinia cho global state management
   - Sử dụng local state trong component khi có thể

### CSS/Tailwind

1. **Ưu tiên sử dụng Tailwind classes** trong template
2. **Extract component** khi có nhiều class lặp lại
3. **Responsive design**: Mobile-first approach
4. **Chủ đề màu sắc**: Sử dụng biến CSS hoặc Tailwind theme extension

## Git Workflow

1. **Branch naming**:
   - `feature/feature-name`
   - `bugfix/bug-description`
   - `hotfix/issue-description`

2. **Pull Request**:
   - Tối thiểu 1 người review trước khi merge
   - Tuân thủ PR template

## Testing

1. **Unit Testing**:
   - Viết test cho tất cả components và utilities
   - Đảm bảo coverage tối thiểu 70%

2. **E2E Testing**:
   - Viết test cho các luồng hoạt động chính

## Performance

1. **Lazy loading** cho các component không cần thiết ngay lập tức
2. **Image optimization** cho tất cả assets
3. **Bundle size monitoring** trong quá trình phát triển

## Documentation

1. **Cập nhật tasklog.md** khi hoàn thành mỗi task
2. **Viết JSDoc** cho các function phức tạp
3. **README rõ ràng** cho cách cài đặt và chạy dự án

## PWA Requirements

1. **App manifest** với đầy đủ thông tin
2. **Service worker** cho offline functionality
3. **Icons** đủ kích thước cho các platform khác nhau

## Security

1. **Không hardcode** sensitive information
2. **Sanitize user input** trước khi sử dụng
3. **CSP policy** để ngăn chặn XSS

## Cross-browser Compatibility

1. **Support** cho các trình duyệt hiện đại: Chrome, Firefox, Safari, Edge
2. **Fallback** cho các tính năng không được hỗ trợ
