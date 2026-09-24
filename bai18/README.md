# Bài 18 – Json Array Model – Group Customers

## Mô tả

- Dữ liệu khách hàng lưu trong file JSON `public/assets/data/customers.json` (được phục vụ tại `assets/data/customers.json`), chia theo loại khách hàng:
  - `1` – VIP: Obama, Kim jong Un, Putin
  - `2` – Normal: Hồ Cẩm Đào, Tap Can Binh
- Interface `ICustomer` và `ICustomerGroup` nằm trong `src/app/icustomer.ts`.
- `CustomerHttpService` (`src/app/customer-http.service.ts`) dùng `HttpClient` để đọc file JSON (áp dụng bài 16):
  - `getCustomerGroups()` – gọi `http.get`, thử lại 3 lần (`retry(3)`) và bắt lỗi bằng `catchError(handleError)`.
  - `handleError()` – trả về lỗi bằng `throwError`.
- `ServiceCustomerHttpGroupComponent` dùng `*ngFor` lồng nhau (áp dụng bài 14) để hiển thị từng loại khách hàng và danh sách khách hàng thuộc loại đó (mã, tên, email, tuổi, hình). Nếu có lỗi, thông báo lỗi hiển thị màu đỏ phía trên bảng.
- `provideHttpClient()` được khai báo trong `src/app/app.config.ts`.
- Ảnh đại diện nằm trong `public/assets/avatars/`.

> Tên thuộc tính `CustomterTypeName` được giữ nguyên theo đề bài.

## Routes

| URL | Component |
|-----|-----------|
| `/` | chuyển hướng tới `/service-customer-http-group` |
| `/service-customer-http-group` | Danh sách khách hàng theo nhóm |

## Thử xử lý lỗi

Sửa `_url` trong `customer-http.service.ts` thành đường dẫn sai (ví dụ `./assets/data/customersXXX.json`), trang sẽ hiển thị thông báo lỗi thay cho dữ liệu.

## Cách chạy

```bash
cd bai18
npm install
npm start      # hoặc: ng serve
```

Mở <http://localhost:4200/>.

## Build

```bash
npm run build
```

Kết quả nằm trong `dist/bai18/`.
