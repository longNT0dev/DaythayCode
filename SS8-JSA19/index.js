// 1. ES6 trong js là gì 
// Một phiên bản của js, cung cấp 1 số các từ khóa mới giúp việc code 
// ngắn gọn và tránh gây lỗi

// 2. ES6 có gì cần quan tâm 

// Làm thế nào khai báo 1 biến trong js 
// var name = "Quốc Cường"
// var age = 16

// 2.1 ES6 chúng ta khai báo biến bằng từ khóa let hoặc const 

// var name = "Long"
// var name = "Huy Phương"
// console.log(name)


// Từ khóa let không cho phép khai báo các biến cùng tên trong 
// 1 scope
{
    // local scope 
}

// Ví dụ về let và const 
// let name = "Long"
// let name = "Huy Phương"
// Tương tự với const 

// Không thể thay đổi giá trị của biến khai báo với const
// const pi = 3.1415
// pi = 5 -> Sai 
// console.log(pi)


// console.log(a)
// let a = 5 

// hoisting của từ khóa var 
// console.log(b)
// var b = 10

// var b 
// console.log(b)
// b = 10


// 2.2. Cách khai báo function mới arrow function

// function sum(a,b) {
//     return a + b
// }

// console.log(sum(5,6))


// const sum = (a,b) => a + b


// const tenHam = (params1,params2) => {
    // Thân hàm -> Thực hiện 1 số thứ gì đó
// }

// console.log(sum(5,6))


// 3. Kiến thức về API
// API - aplication program interface: Một cách để client tương tác với server


// Server-Database: Nó là nơi lưu trữ dữ liệu và cung cấp API cho client gọi tới
// Client: Gọi API 


// Method- phương thức mặc định của fetch là GET
fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/products")
.then((response) => response.json())
.then((data) => {
    console.log(data)
})