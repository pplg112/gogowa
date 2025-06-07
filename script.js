// Toggle menu บนมือถือ
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
// บันทึกข้อมูลลง localStorage แบบง่าย (ไม่ปลอดภัย ใช้เฉพาะทดลอง)
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('reg-username').value;
      const password = document.getElementById('reg-password').value;

      localStorage.setItem('apc_user', JSON.stringify({ username, password }));
      alert('สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ');
      window.location.href = 'login.html';
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      const user = JSON.parse(localStorage.getItem('apc_user'));
      if (user && username === user.username && password === user.password) {
        alert('เข้าสู่ระบบสำเร็จ');
        window.location.href = 'index.html';
      } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    });
  }
});
