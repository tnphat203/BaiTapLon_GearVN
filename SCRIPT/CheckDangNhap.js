var nhapxuat = document.querySelector('.nhap-xuat');
var nhapxuattxt = document.querySelector('.nhapxuattxt');;
var nametxt =  document.querySelector('.nametxt');
nhapxuat.addEventListener('click',function(){
    if(!localStorage.hasOwnProperty('user')){
        window.location.href = '/HTML/DangNhap.html';
    }else{
        window.location.href = '/HTML/DangNhap.html';
        localStorage.removeItem('user');
    }
})

if(localStorage.hasOwnProperty('user')){
    nhapxuattxt.textContent = 'ĐĂNG XUẤT';
    nametxt.textContent = 'TRẦN NGỌC PHÁT';
}else{
    nhapxuattxt.textContent = 'ĐĂNG NHẬP';
    nametxt.textContent = 'ĐĂNG KÝ' ;
}