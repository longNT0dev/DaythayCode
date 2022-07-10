let list = document.getElementById("container");

// Các cách xử lí code bất đồng bộ

// Cách 1: Sử dụng callback -> callback hell

// Cách 2: Sử dụng .then +  Sử dụng Promise -> sử dụng then, catch
// let data = fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/products")
//             .then((result) => result.json())
//             .then((result) => { // result tương đương mảng trong js buổi trước làm
//                 // for(let e of result) {
//                 //     list.innerHTML += e.productName + '<br>'
//                 // }
//             })
//             // .then()
//             // ....

// Cách 3: async/await -> await chỉ được sử dụng bên trong hàm async

const url = "https://60bc32b7b8ab37001759ee4d.mockapi.io/products";
// Get all data
// async function fetchData(url) {
// Chúng ta sẽ đặt await ở đâu ? Đặt ở những vị trí giá trị trả về là 1 promise
//     let data = await fetch(url)
//     data = await data.json()

//     console.log(data)
// }
// fetchData(url)

// Get data by id
async function getDataById(id, url) {
  let data = await fetch(url + `/${id}`); // https://60bc32b7b8ab37001759ee4d.mockapi.io/products/:id
  data = await data.json();

  console.log(data);
}

getDataById(1, url);

// add new product
async function addNewProduct(url, productInfo) {
  let res = await fetch(url, {
    method: "POST", // POST dùng để gửi dữ liệu đi / GET để lấy dữ liệu về
    body: JSON.stringify(productInfo),
    headers: {
        'Content-Type': 'application/json'
    },
  });

  console.log(await res.json());
}

// addNewProduct(url, {
//   product:"NEW PRODUCT ADDED"
// });


// update by id - method put

// async function updateById(url,id,newProductInfo) {
//     await fetch(url + `/${id}`,{
//         method: "PUT", // PUT dùng để cập nhật dữ liệu đã có 
//         body: JSON.stringify(newProductInfo),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
// }

// updateById(url,26,{product:"PRODUCT UPDATED"})


// delete by id - method delete
async function deleteById(url,id) {
    await fetch(url + `/${id}`,{
        method: "DELETE", // DELETE dùng để xóa dữ liệu đã có 
    })
}

deleteById(url,28)


// BTVN:
// Từ đoạn code mẫu: Hãy thực hiện các công việc Read, UpdateById , DeleteById

// Bất đồng bộ trong js

// console.log("hello 1")
// console.log("hello 2")

// Trên lớp cô giao 2 bài tập khác nhau cho 2 bạn và yêu cầu nếu xong thì báo cáo
// Bạn 1 thực hiện công việc A (nhẹ nhàng và làm trong 1p)
// Bạn 2 thực hiện công việc B (phức tạp và làm trong 10p)

// setTimeout(() => {
//     console.log("Hello, tôi làm sau")
// },2000)

// console.log("hello")
