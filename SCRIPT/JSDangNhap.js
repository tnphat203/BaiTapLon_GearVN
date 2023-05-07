var btnDangNhap = document.querySelector('.DangNhap');
var inpEmail = document.querySelector('.Email');
var inpPassword = document.querySelector('.Password');
var CheckAccount = document.querySelector('.Check-Account');

btnDangNhap.addEventListener('click',function(){
    var tk = /^([a-z]|[A-Z])\w*\@(gmail.com)$/g;
    var mk = /\d{8,}/g;
    if(!tk.test(inpEmail.value)){
        CheckAccount.textContent = 'Email không đúng định dạng';
    }else if(!mk.test(inpPassword.value)){
        CheckAccount.textContent = 'Mật khẩu phải có từ 8 kí tự trở lên';
    }else{
        if(inpEmail.value==='tnphat203@gmail.com'&&
        inpPassword.value === '11111111'){
            localStorage.setItem('user', 'admin');
            window.location.href = '/index.html';
        }else{
            CheckAccount.textContent = 'Thông tin đăng nhập không hợp lệ';
        }
    }
   
});
