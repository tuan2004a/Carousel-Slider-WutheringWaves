# Carousel Slider WutheringWaves

**Carousel-slider-ww là một dự án demo Carousel/Slider lấy cảm hứng từ Wuthering Waves, được xây dựng nhằm minh họa animation mượt mà, hiệu ứng chuyển slide tự nhiên và cách trình bày nhân vật trực quan.

---

## Mục lục

- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Yêu cầu môi trường](#yêu-cầu-môi-trường)
- [Cài đặt & chạy dự án](#cài-đặt--chạy-dự-án)
- [Các script trong `package.json`](#các-script-trong-packagejson)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Video Demo](#video-demo)
- [Lưu ý khi phát triển](#lưu-ý-khi-phát-triển)
- [License](#license)
- [Contact](#contact)
---

## Công nghệ sử dụng

- **React 19 + TypeScript**: Xây UI dạng component, type-safe, dễ bảo trì.
- **Vite**: Công cụ build và dev server nhanh, hỗ trợ HMR.
- **Axios**: Client HTTP để gọi API, xử lý request/response linh hoạt.
- **@tanstack/react-query**: Quản lý query/mutation, cache dữ liệu, refetch, loading/error state.
- **TailwindCSS 4**: Utility-first CSS framework để tạo UI nhanh chóng.
- **JSON Server**: Dựng API giả lập từ file JSON, dùng cho môi trường dev.

---

## Yêu cầu môi trường

- **Node.js**: Khuyến nghị >= 20.x
```bash
node -v
```
- **pnpm**: Khuyến nghị >= 10.x
```bash
pnpm -v
```

---

## Cài đặt & chạy dự án

### 1. Clone project

```bash
git clone <your-repo-url>
cd carousel-slider-ww
```

### 2. Cài đặt dependencies

```bash
pnpm install
```

### 3. Chạy JSON Server (mock API)

```bash
pnpm json
```

> **Lưu ý**: Trong `package.json` đã cấu hình script và chạy JSON Server ở port `3001`.

### 4. Chạy môi trường phát triển

```bash
pnpm dev
```
> **Lưu ý**: Mặc định Vite sẽ chạy ở `http://localhost:5173`

---

## Các script trong `package.json`

- **`pnpm dev`**: Chạy Vite dev server (HMR, hot reload).
- **`pnpm build`**: Build TypeScript và bundle production bằng Vite.
- **`pnpm lint`**: Chạy ESLint cho toàn bộ project.
- **`pnpm preview`**: Serve thư mục build để xem thử bản production.
- **`pnpm json`**: Chạy JSON Server với file `./src/db/db.json` tại port 3001.

---

## Cấu trúc thư mục

> **Lưu ý**: Tổ chức file/folder theo Feature-based architecture, đây là mô tả khái quát:

```
src/
├── config/  
├── db/                         # JSON Server sử dụng làm “database”
└── features/                   # Feature-based architecture
    ├── [modules]               # Các feature modules (ví dụ: carousel, character, v.v.)
    │   ├── components/         # Chứa các component UI (Carousel, Slider item, Navigation, v.v.).
    │   ├── hooks/              # Custom hook dễ tái sử dụng
    │   ├── queries/            # Các query hooks và functions cho React Query
    │   ├──shared/              # Nơi dùng chung các components hoặc file
    │   └──types/               # Cấu hình dùng chung trong [modules]
    └── ...                     # Các modules khác
```
---
## Preview Video

https://github.com/tuan2004a/Carousel-Slider-WutheringWaves/blob/main/public/carousel-slider-ww.mp4
---

## Lưu ý khi phát triển

- **Chạy JSON Server song song**: Hãy luôn đảm bảo `pnpm json` đang chạy khi bạn dev, nếu không axios sẽ bị lỗi gọi API.
- **Port xung đột**:
  - Vite: thường ở `5173`
  - JSON Server: `3001`
  - Nếu port đã được dùng, hãy đổi port hoặc tắt service đang chiếm port.
- **Cấu hình Axios**:
  - Đảm bảo `baseURL` trỏ đúng tới `http://localhost:3001` (hoặc port bạn cấu hình).
  - Nếu bạn build production và deploy, cần thay đổi `baseURL` phù hợp backend thực tế.
- **Tailwind v4**:
  - Ở file `src/index.css` có dòng `@import "tailwindcss";` theo style mới của Tailwind v4.
  - Nên tránh override global quá nhiều để không bị xung đột class.

---

### License
Dự án này được phát hành dưới MIT License. Bạn có thể tự do sử dụng, chỉnh sửa và chia sẻ, nhưng không được sử dụng cho mục đích thương mại dưới bất kỳ hình thức nào.

---
## Contact

* Author: Trantuan07a
* Email: dev.lamtuan@gmail.com
* GitHub: [@Trantuan07a](https://github.com/Trantuan07a)

---

<div align="center">

**✨ Được tạo nên với niềm đam mê dành cho cộng đồng Wuthering Waves ✨**

</div> 
