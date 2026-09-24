# Advance-Web-Dev

Bài tập môn **Phát triển web kinh doanh nâng cao** (Angular 21).

| Bài | Nội dung | Thư mục |
|-----|----------|---------|
| 13 | Service + hình ảnh sản phẩm + sự kiện click xem chi tiết (route có tham số `:id`) | [`bai13`](bai13) |
| 14 | Service danh mục sản phẩm (Catalog) – hiển thị sản phẩm theo từng loại | [`bai14`](bai14) |
| 18 | Json Array Model – nhóm khách hàng đọc từ file JSON qua Http Service (có xử lý lỗi) | [`bai18`](bai18) |

## Yêu cầu

- [Node.js](https://nodejs.org/) 20.19+ (khuyến nghị 22 hoặc 24)
- npm (đi kèm Node.js)
- (Tuỳ chọn) Angular CLI: `npm install -g @angular/cli`

## Cách chạy

```bash
git clone https://github.com/Khoailat2808/Advance-Web-Dev.git
cd Advance-Web-Dev

# Chạy bài 13
cd bai13
npm install
npm start          # hoặc: ng serve
```

Mở trình duyệt tại <http://localhost:4200/>.

Để chạy bài 14 hoặc bài 18, làm tương tự với thư mục `bai14` / `bai18`. Nếu muốn chạy cả hai bài cùng lúc, dùng cổng khác cho bài thứ hai:

```bash
cd bai14
npm install
npx ng serve --port 4201
```

> Thư mục `node_modules/` và `dist/` không được đưa lên repo, vì vậy luôn chạy `npm install` trước khi `npm start`.

Xem hướng dẫn chi tiết trong README của từng bài.
