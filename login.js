document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    // รับค่าจากฟอร์ม
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ตรวจสอบข้อมูลล็อกอิน
    if (username === "admin" && password === "1234") {
        // หากข้อมูลถูกต้อง เปิดหน้าถัดไป
        window.location.href = "dashboard.html";  // เปลี่ยนไปหน้า dashboard.html
    } else {
        // หากข้อมูลไม่ถูกต้อง แสดงข้อความผิดพลาด
        document.getElementById('error-message').style.display = 'block';
    }
});
