# Bài 13 – Service, hình ảnh và sự kiện xem chi tiết sản phẩm

## Mô tả

- `ProductService` (`src/app/product.service.ts`) chứa danh sách sản phẩm (mã, tên, giá, hình ảnh) và cung cấp:
  - `getProductsWithImages()` – lấy toàn bộ sản phẩm
  - `getProductDetail(id)` – lấy một sản phẩm theo mã
- `ServiceProductImageEventComponent` – hiển thị danh sách sản phẩm kèm hình; click vào sản phẩm để chuyển sang trang chi tiết.
- `ServiceProductImageEventDetailComponent` – đọc tham số `id` trên URL (`ActivatedRoute`) và hiển thị chi tiết sản phẩm, có nút quay lại.
- Hình ảnh nằm trong `public/assets/` (`h1.png` → `h3.png`).

## Routes

| URL | Component |
|-----|-----------|
| `/` | chuyển hướng tới `/service-product-image-event` |
| `/service-product-image-event` | Danh sách sản phẩm |
| `/service-product-image-event/:id` | Chi tiết sản phẩm (vd: `/service-product-image-event/p1`) |

## Cách chạy

```bash
cd bai13
npm install
npm start      # hoặc: ng serve
```

Mở <http://localhost:4200/>.

## Build

```bash
npm run build
```

Kết quả nằm trong `dist/bai13/`.
