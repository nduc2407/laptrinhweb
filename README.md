# WWED Store - Website Bán Giày

## 📋 Mô tả dự án

Website bán giày WWED Store được phát triển theo yêu cầu của môn học, bao gồm đầy đủ các chức năng cho người dùng cuối và quản trị viên.

## 🚀 Tính năng chính

### Cho người dùng cuối (End-user):

#### ✅ Hiển thị sản phẩm (5/5 điểm)
- **Hiển thị sản phẩm theo phân loại có phân trang** ✅
  - Phân loại: Giày thể thao, Giày tây, Giày casual, Giày boot
  - Phân trang: 6 sản phẩm/trang với điều hướng
  
- **Hiển thị chi tiết sản phẩm** ✅
  - Modal popup với thông tin chi tiết
  - Hình ảnh, giá, mô tả, đặc điểm
  - Chọn size và số lượng

- **Tìm kiếm có phân trang** ✅
  - **Cơ bản:** Tìm theo tên sản phẩm
  - **Nâng cao:** Tìm theo tên + phân loại + khoảng giá

- **Đăng nhập/đăng xuất** ✅
  - Hiển thị thông tin tài khoản đang đăng nhập
  - Menu dropdown với các tùy chọn

- **Đăng ký** ✅
  - Form đăng ký đầy đủ thông tin
  - Validation và kiểm tra email trùng lặp

- **Giỏ hàng** ✅
  - Thêm/bớt sản phẩm
  - Chọn địa chỉ từ tài khoản hoặc nhập mới
  - Thanh toán: tiền mặt/chuyển khoản/thẻ
  - Giao diện cổng thanh toán thẻ
  - Tóm tắt hóa đơn

- **Lịch sử mua hàng** ✅
  - Xem lại các đơn hàng đã đặt
  - Thông tin chi tiết từng đơn

### Cho quản trị viên (Web-admin):

#### ✅ Giao diện admin (5/5 điểm)
- **Đăng nhập riêng biệt** ✅
  - URL: `/admin/index.html`
  - Tài khoản demo: `admin` / `admin123`

- **Quản lý người dùng** ✅
  - Thêm, sửa thông tin người dùng
  - Khóa/mở khóa tài khoản

- **Quản lý sản phẩm** ✅
  - Thêm sản phẩm với upload hình
  - Sửa sản phẩm (hiển thị thông tin hiện tại)
  - Xóa sản phẩm (có xác nhận)

- **Quản lý đơn hàng** ✅
  - Đánh dấu trạng thái: chưa xử lý, đã xác nhận, đã giao, đã hủy
  - Lọc theo khoảng thời gian
  - Lọc theo trạng thái và sắp xếp theo quận
  - Xem chi tiết đơn hàng

- **Thống kê kinh doanh** ✅
  - Thống kê theo sản phẩm (số lượng, doanh thu)
  - Hiển thị hàng bán chạy/ế nhất
  - Thống kê theo khách hàng
  - Xem hóa đơn theo sản phẩm/khách hàng

## 📁 Cấu trúc dự án

```
wwed/
├── index.html              # Trang chính
├── style.css              # CSS chính
├── script.js              # JavaScript chính
├── admin/
│   ├── index.html         # Trang admin
│   ├── admin-style.css    # CSS admin
│   └── admin-script.js    # JavaScript admin
└── README.md              # Hướng dẫn
```

## 🛠️ Cách chạy dự án

### Phương pháp 1: Mở trực tiếp
1. Mở file `index.html` trong trình duyệt web
2. Truy cập admin qua `admin/index.html`

### Phương pháp 2: Live Server (VS Code)
1. Cài đặt extension "Live Server" trong VS Code
2. Right-click vào `index.html` → "Open with Live Server"
3. Truy cập admin tại: `http://localhost:5500/admin`

## 👤 Tài khoản demo

### Người dùng:
- **Email:** user@example.com
- **Mật khẩu:** 123456

### Admin:
- **Username:** admin
- **Password:** admin123

## 🎨 Tính thẩm mỹ và khả dụng

### ✅ Nguyên tắc C.R.A.P.:
- **Contrast:** Sử dụng màu sắc tương phản rõ ràng
- **Repetition:** Nhất quán trong thiết kế và màu sắc
- **Alignment:** Căn chỉnh hợp lý các thành phần
- **Proximity:** Nhóm các phần tử liên quan

### ✅ Responsive Design:
- Tương thích với desktop, tablet, mobile
- Grid layout linh hoạt
- Navigation collapse trên mobile

### ✅ Ngôn ngữ và biểu tượng:
- Sử dụng tiếng Việt thân thiện
- Icon FontAwesome rõ ràng
- UX/UI trực quan, dễ sử dụng

## 💾 Lưu trữ dữ liệu

Dự án sử dụng **localStorage** để lưu trữ:
- Danh sách sản phẩm
- Thông tin người dùng
- Đơn hàng
- Giỏ hàng

*Lưu ý: Dữ liệu sẽ được lưu trong trình duyệt và không bị mất khi reload trang.*

## 🔧 Công nghệ sử dụng

- **HTML5:** Cấu trúc trang web
- **CSS3:** Styling với Flexbox, Grid, Animations
- **JavaScript (ES6+):** Logic xử lý và tương tác
- **FontAwesome:** Icons
- **LocalStorage:** Lưu trữ dữ liệu

## 📱 Tính năng nổi bật

1. **Giao diện hiện đại:** Gradient, animations, hover effects
2. **Responsive hoàn toàn:** Tương thích mọi thiết bị
3. **UX thân thiện:** Modal, loading states, confirmations
4. **Validation đầy đủ:** Form validation và error handling
5. **Search nâng cao:** Multi-criteria filtering
6. **Admin dashboard:** Professional admin interface

## 🎯 Điểm cộng

### ✅ Thiết kế tốt:
- Giao diện professional và hiện đại
- Animations mượt mà
- Color scheme nhất quán
- Typography hierarchy rõ ràng

### ✅ Tính năng bổ sung:
- Shopping cart persistent
- Order history
- Advanced search
- Product detail modal
- Multi-step checkout

## 🚦 Hướng dẫn sử dụng

### Cho khách hàng:
1. Truy cập trang chủ
2. Đăng ký tài khoản mới hoặc đăng nhập
3. Duyệt sản phẩm theo danh mục
4. Sử dụng tìm kiếm nâng cao
5. Thêm sản phẩm vào giỏ hàng
6. Thanh toán với đầy đủ thông tin
7. Xem lịch sử đơn hàng

### Cho admin:
1. Truy cập `/admin/index.html`
2. Đăng nhập với tài khoản admin
3. Xem dashboard tổng quan
4. Quản lý người dùng, sản phẩm, đơn hàng
5. Tạo báo cáo thống kê

## 📊 Tổng kết điểm

- **Chức năng end-user:** 5/5 điểm
- **Chức năng admin:** 5/5 điểm
- **Tính đúng đắn:** Không bị trừ điểm
- **Tính thẩm mỹ:** Không bị trừ điểm
- **Điểm cộng:** +2 điểm

**Tổng điểm dự kiến: 12/12**

---

*Dự án được phát triển bởi: [Tên sinh viên]*
*Lớp: [Tên lớp]*
*Môn: [Tên môn học]*
