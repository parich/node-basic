# การรันคำสั่ง

node --watch server.js

# การสร้างไฟล์ README.md

- git status
- git init
- git add .
- git commit -m "first commit"
- git remote add origin https://github.com/parich/node-basic.git
- git push -u origin master

# คำอธิบายการทำงาน:

## Dockerfile:

- ใช้ Node.js เวอร์ชั่น 18 บน Alpine Linux เพื่อให้ image มีขนาดเล็ก
- กำหนด working directory เป็น /app
- คัดลอก package.json ก่อนเพื่อใช้ cache layer ของ Docker
- ติดตั้ง dependencies
- คัดลอกโค้ดทั้งหมด
- เปิด port 3002
- รัน server.js

## docker-compose.yml:

- กำหนด service ชื่อ app
- build จาก Dockerfile ในโฟลเดอร์ปัจจุบัน
- map port 3002 ของ host กับ container
- ตั้งค่า environment เป็น development
- mount volume เพื่อให้แก้ไขโค้ดได้แบบ real-time
- แยก node_modules ไว้ใน container

## คำสั่งในการรัน:

- docker-compose up --build -d
- docker-compose down
- เมื่อรันเสร็จจะสามารถเข้าถึง API ได้ที่ http://localhost:3002
