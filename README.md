## Giới thiệu

**carousel-slider-ww** là một dự án demo Carousel / Slider xây dựng bằng **React + TypeScript + Vite**, kết hợp với:

- **Axios** để gọi API, làm việc với dữ liệu **JSON**
- **@tanstack/react-query** để quản lý trạng thái bất đồng bộ (fetch/cache dữ liệu)
- **TailwindCSS** để xây giao diện nhanh, gọn, dễ tùy chỉnh
- **JSON Server** (script `npm run json`) để mô phỏng API backend từ file `db.json`

Mục tiêu của project là minh họa cách xây dựng một gallery / slider hiện đại, mượt mà, có hiệu ứng cuộn ngang (focus gallery) cùng với luồng dữ liệu tách biệt, dễ mở rộng.

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

- **Node.js**: Khuyến nghị >= 18.x
- **pnpm** (khuyến nghị) hoặc công cụ quản lý package tương đương

Kiểm tra phiên bản:

```bash
node -v
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

Trong `package.json` đã cấu hình script:

- **`pnpm json`**: chạy JSON Server ở port `3001` và theo dõi file `./src/db/db.json`.

Chạy:

```bash
pnpm json
```

> **Lưu ý**: Nên chạy JSON Server trong một terminal riêng để không chặn dev server của Vite.

### 4. Chạy môi trường phát triển

```bash
pnpm dev
```

Theo mặc định, Vite sẽ chạy ở `http://localhost:5173` (có thể khác một chút, xem trong terminal).

### 5. Build & preview bản production

- **Build**:

```bash
pnpm build
```

Script này gồm:

- `tsc -b`: build TypeScript
- `vite build`: build bundle production

- **Preview** (serve build):

```bash
pnpm preview
```

---

## Các script trong `package.json`

- **`pnpm dev`**: Chạy Vite dev server (HMR, hot reload).
- **`pnpm build`**: Build TypeScript và bundle production bằng Vite.
- **`pnpm lint`**: Chạy ESLint cho toàn bộ project.
- **`pnpm preview`**: Serve thư mục build để xem thử bản production.
- **`pnpm json`**: Chạy JSON Server với file `./src/db/db.json` tại port 3001.

---

## Cấu trúc thư mục (mô tả cơ bản)

> Lưu ý: Tên file/thư mục chi tiết có thể thay đổi tùy cách bạn tổ chức, đây là mô tả khái quát.

- **`src/`**
  - **`main.tsx` / `App.tsx`**: Entry chính của ứng dụng React.
  - **`components/`**: Chứa các component UI (Carousel, Slider item, Navigation, v.v.).
  - **`hooks/`**: Các custom hook (ví dụ: hook dùng `react-query` để fetch data).
  - **`services/`**: Nơi cấu hình instance Axios, các hàm gọi API.
  - **`db/db.json`**: File dữ liệu JSON được JSON Server sử dụng làm “database”.
  - **`index.css`**: Import Tailwind, custom CSS cho animation/hiệu ứng (ví dụ class `focus-gallery`, `.items`, animation `pop-in`,...).
- **`public/`**: Static assets (hình ảnh dùng cho carousel, icon, ...).
- **`vite.config.ts`**: Cấu hình Vite.

---

## Luồng dữ liệu & cách hoạt động (tóm tắt)

- **JSON Server** đọc dữ liệu từ `src/db/db.json` và expose các endpoint REST (ví dụ: `/slides`, `/images`, ...).
- **Axios** được cấu hình (baseURL, interceptor nếu cần) để gọi dữ liệu từ JSON Server.
- **@tanstack/react-query**
  - Dùng `useQuery` để fetch dữ liệu (danh sách slide, hình ảnh,...).
  - Tự động quản lý trạng thái **loading**, **error**, **cache**, **refetch**.
- **UI Carousel/Slider**
  - Sử dụng TailwindCSS kết hợp CSS custom (`focus-gallery`, animation `pop-in`) để tạo hiệu ứng cuộn ngang, focus ở giữa.
  - Mỗi item/slide được render từ dữ liệu fetch được.

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

## Hướng dẫn mở rộng

- **Thêm endpoint mới**:
  - Cập nhật `src/db/db.json` với cấu trúc dữ liệu mới.
  - Tạo thêm service Axios + hook `react-query` để fetch.
  - Xây UI component hiển thị dữ liệu.
- **Thêm tính năng cho Carousel**:
  - Auto-play, pagination, thumbnail preview.
  - Responsive: điều chỉnh số lượng item hiển thị theo kích thước màn hình.
  - Thêm animation, transition phức tạp hơn (Framer Motion, v.v.).

---

## License

Tùy mục đích sử dụng, bạn có thể giữ project ở trạng thái private hoặc bổ sung license (MIT, v.v.) trong tương lai.

