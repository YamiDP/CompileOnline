# Nhóm 9 _ Môn điện toán đám mây chiều thứ 7 <br />
## Thành viên nhóm: <br />
1. Nguyễn Duy Phương - 20110546 <br />
2. Trần Thanh Phương - 20110547 <br />
3. Nguyễn Đình Quang Huy - 20110494 <br />
## Tên đề tài: Xây dựng trang web viết code online cho Java, C#, Python, C++ <br />
## Hướng dẫn sử dụng <br />
1. Chọn dịch vụ EC2 của AWS. <br />
Nhập Name and tags muốn đặt cho intance: <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-34-35.png)<br />
2. Name and tags Application and OS Images (Amazon Machine Image) <br />
Chọn Amazon Linux 2 AMI (HVM) - Kernel 5.10, SSD Volume Type <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-34-46.png) <br />
3. Instance type <br />
Chọn t2.micro <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-15.png) <br />
Key pair (login) <br />
Chọn Create key pair. Sau đó nhập tên key pair và create key pair<br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-20.png) <br />
3. Network settings  <br />
Chọn nút edit <br />
Auto-assign public IP chọn enable <br />
Firewall (security groups) chọn Create security group <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-24.png) <br />
Nhập Security group name và Description <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-28.png) <br />
Chọn remove Inbound security groups rules <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-31.png) <br />
Các phần cọn lại để cấu hình mặc định và chọn Launch instance để create instance <br />
4. Trở lại phần EC2 Dashboard <br />
Click chọn Security groups <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-35.png) <br />
Chọn group security tương ứng với tên của group security được phía trên <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-39.png) <br />
Chọn phần Inbound rules và chọn Edit inbound rules <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-42.png) <br />
Thiết SSH để client kết nối với intance và HTTP để triển khai dịch vụ web. Cả 2 đều chọn Anywhere-IPv4. Sau đó chọn Save rules <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-46.png) <br />
Quay trở lại phần Intances và chọn intance được tạo bên trên. Sau đó chọn Connect <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-50.png) <br />
![My Image]([.](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-53.png) <br />
Sau đó mở terminal ở vị trí chưa phần key pair được tạo và tải về bên trên <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-35-57.png) <br />
Thực hiện 2 câu lệnh để kết nối với intance từ máy local: <br />
chmod 400 mykey.pem <br />
ssh -i "mykey.pem" ec2-user@ec2-3-84-16-91.compute-1.amazonaws.com <br />
Kết nối thành công <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-36-01.png) <br />
Thực hiện các lệnh tiếp tục sau trên terminal trên máy local: <br />
sudo -i <br />
yum update y <br />
yum install docker <br />
systemctl start docker <br />
docker pull phuondog/final-project-cp:1.0.0 <br />
docker run -p 80:8080 phuondog/final-project-cp:1.0.0 <br />    
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-36-05.png) <br />
Click chọn intance được tạo bên trên <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-36-09.png) <br />
Copy Public IPv4 address hoặc Public IPv4 DNS để xem kết quả <br />
![My Image](https://raw.githubusercontent.com/YamiDP/CompileOnline/main/image/image_2022-12-24_21-36-12.png) <br />






