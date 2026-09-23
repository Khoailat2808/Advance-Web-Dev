# Bài 14 – Service danh mục sản phẩm (Catalog)

## Mô tả

- `CatalogService` (`src/app/catalog.service.ts`) chứa dữ liệu các loại sản phẩm, mỗi loại có danh sách sản phẩm riêng:
  - `cate1` – Nước ngọt: Coca, Pepsi, Sting
  - `cate2` – Bia: Heineken, 333, Sài Gòn
- `getCategories()` trả về toàn bộ danh mục.
- `ServiceProductCatalogComponent` dùng `*ngFor` lồng nhau để hiển thị từng loại và các sản phẩm (tên, giá, hình) thuộc loại đó.
- Hình ảnh nằm trong `public/assets/` (`h1.png` → `h6.png`).

## Routes

| URL | Component |
|-----|-----------|
| `/` | chuyển hướng tới `/service-product-catalog` |
| `/service-product-catalog` | Danh mục sản phẩm theo loại |

## Cách chạy

```bash
cd bai14
npm install
npm start      # hoặc: ng serve
```

Mở <http://localhost:4200/>.

## Build

```bash
npm run build
```

Kết quả nằm trong `dist/bai14/`.
