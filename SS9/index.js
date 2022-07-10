// Vị trí localStorage trên trình duyệt ở tab application

// Tác dụng localStorage:
// _ Lưu trữ 1 số giá trị cho tới khi bị xóa đi
// _ Chuyển dữ liệu giữa các trang html khác nhau
// _ Lưu trữ trạng thái ứng dụng (trạng thái đăng nhập,lưu lại thông tin sản phẩm trong giỏ hàng)

let email = document.getElementById("email");
let loginBtn = document.getElementById("login");

// Lưu trữ dữ liệu dạng string hoặc number
loginBtn.addEventListener("click", () => {
  // Lưu thông tin email của người dùng vào localStorage
  // Create
  //   localStorage.setItem("email", email.value);
  //   // key      value
  //   window.location.href = "home.html";
});

// // Read
// console.log(localStorage.getItem("email"))

// // Update
// localStorage.setItem("email", "MinhTien@gmail.com")

// // Delete
// localStorage.removeItem("email")

// Lưu trữ dữ liệu dạng array hoặc object

// Khi cần lưu object hoặc array vào local thì dùng JSON.stringify
// Khi cần lấy lại object hoặc array để đọc giá trị hoặc update thì dùng JSON.parse

let userInfo = {
  name: "Long",
  age: 30,
};
loginBtn.addEventListener("click", () => {
  // Lưu thông tin email của người dùng vào localStorage
  // Create
  localStorage.setItem("information", JSON.stringify(userInfo));
});

if (localStorage.information) {
  let tg = JSON.parse(localStorage.information);
  tg.name = "Minh Tiến";
  localStorage.information = JSON.stringify(tg);
}

// _ Trên trang HTML tạo 2 thẻ input và 2 thẻ button bao gồm:
// 1. Thẻ nhập email
// 2. Thẻ nhập password
// 3. Nút bấm đăng kí
// 4. Nút bấm đăng nhập
// _ Một số chức năng:
// 1. Lấy ra giá trị người dùng nhập vào trong ô input
// 2. Khi bấm nút đăng kí sẽ lưu thông tin email + password vào localStorage
// 3. Khi bấm nút đăng nhập sẽ kiểm tra email, password có trong localStorage hay không. 
//      + Nếu có tức là người dùng đã đăng kí -> alert("Đăng nhập thành công") 
//      + Nếu không có -> alert("Tài khoản không tồn tại")
