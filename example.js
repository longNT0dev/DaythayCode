// let data = [
//   {
//     id: 1,
//     picture: "img1.png",
//     description: "Bút chì",
//     price: 3000,
//     quantity: 40,
//   },
//   {
//     id: 2,
//     picture: "img2.png",
//     description: "Bút mực",
//     price: 5000,
//     quantity: 60,
//   },
//   {
//     id: 3,
//     picture: "img3.png",
//     description: "Thước kẻ",
//     price: 5000,
//     quantity: 60,
//   },
// ];

// // let data = [
// //   {
// //      id: 1,
// //      question: "Câu hỏi ở đây",
// //      answer1: "Đáp án 1",
// //      answer2: "Đáp án 2",
// //      trueAnswer: "Đáp án 1"
// //   }
// // ];

// // DOM
// let a = document.getElementById("container");
// for (let i = 0; i < data.length; i++) {
//   a.innerHTML += `
//   <a href="detail.html?id=${data[i].id}">
//     <div>
//     <img src=${data[i].picture} alt="">
//     <h1>Mô tả sản phẩm: ${data[i].description}</h1>
//     <span>Giá : ${data[i].price}</span>
//     <span>Số lượng: ${data[i].quantity}</span>
//     </div>
//     </a>
//     `;
// }

// // localStorage dùng để lưu trữ
// // Lưu trữ vào:
// // 1. Lưu trữ string hoặc number thì lưu bình thường
// // 2. Lưu trữ mảng hoặc object thì phải chuyển sang dạng string bằng JSON.stringify(mảng/object)
// // Lấy ra từ localStorage
// // 1. Lấy ra string hoặc number thì lấy bình thường
// // 2. Lấy ra mảng hoặc object thì phải chuyển sang dạng array/object bằng JSON.parse(mảng/object lấy từ localStorage)

// // Đây là lưu
// localStorage.data = JSON.stringify(data);

// // Đây là lấy

// let dataFromStorage = JSON.parse(localStorage.data);

// dataFromStorage.push({
//   id: 2,
//   question: "Câu hỏi ở đây 2",
//   answer1: "Đáp án 3",
//   answer2: "Đáp án 4",
//   trueAnswer: "Đáp án 3",
// });

// localStorage.data = JSON.stringify(dataFromStorage);

// Tài khoản đăng kí trong hệ thống

// Authentication: Kiểm tra thông tin người dùng nhập vào có trùng với ít nhất 1 tài khoản đã đăng kí trong hệ thống hay không

// Ví dụ về đăng kí

if (!localStorage.userList) {
  localStorage.userList = JSON.stringify([]);
}

let username = document.getElementById("username");
let password = document.getElementById("password");
let signup = document.getElementById("signup");
let login = document.getElementById("login");
let announce = document.getElementById("announce");

signup.addEventListener("click", () => {
  // Xử lí đăng kí
  let userList = JSON.parse(localStorage.userList);

  // Vòng lặp for để kiểm tra
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].username == username.value) {
      announce.innerText = "Tài khoản đã tồn tại";
      return;
    }
  }

  userList.push({
    username: username.value,
    password: password.value,
  });

  localStorage.userList = JSON.stringify(userList);
});

login.addEventListener("click", () => {
  // Xử lí login
  let userList = JSON.parse(localStorage.userList);

  // Vòng lặp for để kiểm tra
  for (let i = 0; i < userList.length; i++) {
    if (
      userList[i].username == username.value &&
      userList[i].password == password.value
    ) {
      //   console.log("Đăng nhập thành công")
      localStorage.token = "logged in"
      window.location.href = "detail.html";
      return;
    }
  }
  announce.innerText = "Tài khoản bạn vừa nhập không tồn tại";
});
