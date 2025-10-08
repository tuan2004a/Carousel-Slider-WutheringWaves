# Carousel Slider Resonators - Wuthering Waves

Một trang web hiển thị dàn Resonators của Wuthering Waves trong Carousel Slider đầy cuốn hút – đưa trải nghiệm khám phá nhân vật lên một tầm cao mới.

## 💻 Công nghệ sử dụng
- **Next.js**: Framework React hiện đại cho phát triển web.
- **JSON Server**: API giả lập để lưu trữ và truy xuất dữ liệu nhân vật.
- **TailwindCSS**: Thư viện CSS tiện lợi cho thiết kế giao diện hiện đại, responsive.

## ⚙️ Yêu cầu hệ thống
- Node.js >= 16.x
- npm, pnpm, yarn hoặc bun

## 🚀 Cài đặt và chạy

1. **Clone dự án:**
   ```bash
   git clone <repo-url>
   cd Carousel-Slider-DuetNightAbyss
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   # hoặc
   pnpm install
   # hoặc
   yarn install
   ```

3. **Khởi động JSON Server:**
   ```bash
   npx json-server --watch db/db.json --port 3001
   ```
   (Dữ liệu nhân vật được lưu tại `db/db.json`)

4. **Chạy ứng dụng Next.js:**
   ```bash
   npm run dev
   # hoặc
   pnpm dev
   # hoặc
   yarn dev
   ```

5. **Truy cập ứng dụng:**
   Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000) để xem Carousel Slider các nhân vật Resonators.

---

## 📚 Tham khảo
- [Next.js Documentation](https://nextjs.org/docs)
- [JSON Server](https://github.com/typicode/json-server)
- [TailwindCSS](https://tailwindcss.com/docs)
