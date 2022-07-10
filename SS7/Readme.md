1. Client/Server 
Client: Gửi Request yêu cầu lấy dữ liệu 
Server: Thực hiện kiếm tra, truy cập vào cơ sở dữ liệu -> Response 
Client: Nhận được Response -> render dữ liệu ra màn hình thông qua js 



2. Cách Client/Server tương tác với nhau (APIs)


endpoint: 
    /login -> Đi tới trang đăng nhập
    /signup -> Đi tới trang signup 
    / -> Đi tới trang home 
method
    get: Gửi Request để lấy dữ liệu  

    post: Gửi Request lên server để server có thể lưu trữ thông tin lại  
        Đăng kí tài khoản -> Gửi username + password lên server
                          -> Server lưu username + password lại 
        Đăng nhập  -> Server kiểm tra các cái giá username + password có tồn tại và đúng không  
    patch 






