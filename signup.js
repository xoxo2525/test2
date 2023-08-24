// signup.js

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 사용자 정보를 Local Storage에 저장
  const user = {
    username: username,
    password: password
  };

  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  alert('회원가입이 완료되었습니다!');
  window.location.href = 'login.html';
});
