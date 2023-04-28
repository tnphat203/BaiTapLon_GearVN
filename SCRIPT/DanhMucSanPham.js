var danhMuc = document.querySelector('.menu-DanhMucSanPham');
var groupProduct = document.querySelector('.group-product')
danhMuc.addEventListener('mouseover',function(){
    groupProduct.style.display = 'flex';
});

groupProduct.addEventListener('mouseleave',function(){
    groupProduct.style.display = 'none';
});

danhMuc.addEventListener('mouseleave',function(){
    groupProduct.style.display = 'none';
});

groupProduct.addEventListener('mouseover',function(){
    groupProduct.style.display = 'flex';
});