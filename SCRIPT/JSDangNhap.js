var btnDangNhap = document.querySelector('.btn-DangNhap');
var inpEmail = document.querySelector('.Email');
var inpPassword = document.querySelector('.Password');
var CheckAccount = document.querySelector('.Check-Account');

btnDangNhap.addEventListener('click',function(){
   if(inpEmail.value==='tnphat203@gmail.com'&&
        inpPassword.value === '11111111'){
            localStorage.setItem('user', 'admin');
            window.location.href = '/HTML/TrangChu.html';
    }else{
        CheckAccount.textContent = 'Thông tin đăng nhập không hợp lệ';
    }
});
