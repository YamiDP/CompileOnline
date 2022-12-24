# Nhóm 9 _ Môn điện toán đám mây chiều thứ 7
## Thành viên nhóm:
1. Nguyễn Duy Phương - 20110546
2. Trần Thanh Phương - 20110547
3. Nguyễn Đình Quang Huy - 20110494
## Tên đề tài: Xây dựng trang web viết code online cho Java, C#, Python, C++
## Hướng dẫn sử dụng
1. Chọn dịch vụ EC2 của AWS.
Nhập Name and tags muốn đặt cho intance:
![My Image](D:\Desktop\image\image_2022-12-24_21-34-35.png)
2. Name and tags Application and OS Images (Amazon Machine Image)
Chọn Amazon Linux 2 AMI (HVM) - Kernel 5.10, SSD Volume Type
![My Image](D:\Desktop\image\image_2022-12-24_21-34-46.png)
3. Instance type
Chọn t2.micro
![My Image](D:\Desktop\image\image_2022-12-24_21-35-15.png)
Key pair (login)
Chọn Create key pair. Sau đó nhập tên key pair và create key pair
![My Image](D:\Desktop\image\image_2022-12-24_21-35-20.png)
3. Network settings 
Chọn nút edit
Auto-assign public IP chọn enable
Firewall (security groups) chọn Create security group
![My Image](D:\Desktop\image\image_2022-12-24_21-35-24.png) 
Nhập Security group name và Description
![My Image](D:\Desktop\image\image_2022-12-24_21-35-28.png)
Chọn remove Inbound security groups rules
![My Image](D:\Desktop\image\image_2022-12-24_21-35-31.png)
Các phần cọn lại để cấu hình mặc định và chọn Launch instance để create instance
4. Trở lại phần EC2 Dashboard
Click chọn Security groups
![My Image](D:\Desktop\image\image_2022-12-24_21-35-35.png) 
Chọn group security tương ứng với tên của group security được phía trên
![My Image](D:\Desktop\image\image_2022-12-24_21-35-39.png)
Chọn phần Inbound rules và chọn Edit inbound rules
![My Image](D:\Desktop\image\image_2022-12-24_21-35-42.png)
Thiết SSH để client kết nối với intance và HTTP để triển khai dịch vụ web. Cả 2 đều chọn Anywhere-IPv4. Sau đó chọn Save rules.
![My Image](D:\Desktop\image\image_2022-12-24_21-35-46.png)
Quay trở lại phần Intances và chọn intance được tạo bên trên. Sau đó chọn Connect
![My Image](D:\Desktop\image\image_2022-12-24_21-35-50.png) 
![My Image](D:\Desktop\image\image_2022-12-24_21-35-53.png)
Sau đó mở terminal ở vị trí chưa phần key pair được tạo và tải về bên trên
![My Image](D:\Desktop\image\image_2022-12-24_21-35-57.png)
Thực hiện 2 câu lệnh để kết nối với intance từ máy local:
chmod 400 mykey.pem
ssh -i "mykey.pem" ec2-user@ec2-3-84-16-91.compute-1.amazonaws.com
Kết nối thành công
![My Image](D:\Desktop\image\image_2022-12-24_21-36-01.png)
Thực hiện các lệnh tiếp tục sau trên terminal trên máy local:
sudo -i
yum update y
yum install docker
systemctl start docker
docker pull phuondog/final-project-cp:1.0.0
docker run -p 80:8080 phuondog/final-project-cp:1.0.0    
![My Image](D:\Desktop\image\image_2022-12-24_21-36-05.png)
Click chọn intance được tạo bên trên
![My Image](D:\Desktop\image\image_2022-12-24_21-36-09.png)
Copy Public IPv4 address hoặc Public IPv4 DNS để xem kết quả
![My Image](D:\Desktop\image\image_2022-12-24_21-36-12.png)






