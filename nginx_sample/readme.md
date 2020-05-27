# Demo nginx as load balancer

1. Đứng ở thư mục `nginx_sample/service`, mở terminal:

```bash
npm run app1
npm run app2
```

2. Đứng ở thư mục `nginx_sample`, chạy cmd:

```bash
docker build -t nginxapp .
```

3. Start `nginx` bằng cmd:

```bash
docker run -p 8002:8002 nginxapp
```

4. Mở trình duyệt gõ url: `localhost:8002` và xem kết

## Lưu ý
- Máy bạn phải cài đặt trước:
    - Nodejs
    - Docker

- Trước khi run `docker build` thì phải sửa lại địa chỉ `ip` của server trong `nginx.conf` bằng với địa chỉ ip hiện tại của máy bạn, vì run nginx trong máy ảo docker nên cần địa chỉ ip của máy thật bên ngoài.