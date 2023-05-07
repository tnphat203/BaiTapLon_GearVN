// var GioHang = {
//     items: [
//         {
//             id: 1,
//             soLuong: 3
//         }
//     ]
// };
// localStorage.setItem('GioHang',JSON.stringify(GioHang));
import { getOne } from "../API/API.js";
var cart = JSON.parse(localStorage.getItem('GioHang'));
var tongtien = document.querySelector('.TongTien-Number');
var tong = 0;
var capnhat = document.querySelector('.btn-capnhat')
var xoa = document.querySelector('.btn-xoa');
var listThanhToan = document.querySelector('.list-thanhtoan');
var khongsp = document.querySelector('.KhongSP');
var cosp = document.querySelector('.CoSP');
document.addEventListener('DOMContentLoaded',async function(){
    if(cart.items.length>0){
        for (const item of cart.items) {
            var product = await getOne(item.id);
            var html = ` <div class="ThanhToan-SanPham">
            <div class="SanPham">
                <a href="/HTML/ChiTietSanPham.html?id=${product.id}">
                    <img src=${product.hinh[0]} alt="" style="width: 100px;height: 100px;">
                </a>
            </div>
            <div class="SanPham" style="width: 481px;">
                <a href="/HTML/ChiTietSanPham.html?id=${product.id}" class="TenSanPham"><b>${product.ten}</b></a>
            </div>
            <div class="SanPham" style="width: 177px;font-size: 14px;">
                <input type="number" class="SoLuong" min="1" value=${item.soLuong}>
            </div>
            <div class="SanPham tongtiensp" style="width: 222px;font-size: 14px;">
            ${new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format((product.gia-product.giamGia/100*product.gia)*item.soLuong)}
            </div>
            <div class="SanPham" style="width: 241;border-right: none;">
                <button style="border:none;"><img src="/IMG/IMGGioHang/XoaIcon.png" alt="" class="btn-xoa"></button>
            </div>
        </div>
        `
        document.querySelector('.list-thanhtoan').insertAdjacentHTML('beforeend',html);
        tong = tong + (product.gia-product.giamGia/100*product.gia)*item.soLuong;
        }
        tongtien.textContent = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(tong);
          khongsp.style.display = 'none';
    }else{
        khongsp.style.display = 'flex';
        cosp.style.display = 'none';
    }
});
listThanhToan.addEventListener('click',async function(e){
    if(e.target.classList.contains('btn-xoa')){
        var item = e.target.closest('.ThanhToan-SanPham');
        var index = Array.from(item.parentElement.children).indexOf(item);
        item.remove();
        cart.items.splice(index,1);
        localStorage.setItem('GioHang',JSON.stringify(cart));
        tong=0;
        for (const item of cart.items) {
            var product = await getOne(item.id);
            tong = tong + (product.gia-product.giamGia/100*product.gia)*item.soLuong;
        }
        tongtien.textContent = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(tong);
    }
    if(cart.items.length===0){
        khongsp.style.display = 'flex';
        cosp.style.display = 'none';
    }

});

capnhat.addEventListener('click',function(){
   
})


