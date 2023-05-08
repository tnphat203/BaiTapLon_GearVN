
import { getAll } from "../API/API.js";
var cart = JSON.parse(localStorage.getItem('GioHang'));
var listXaKho = document.querySelector('.product-xakho > .product-list');
var listPC1 = document.querySelector('.product-pc > .ls1 ');
var listPC2 = document.querySelector('.product-pc > .ls2');
var listltgm1 = document.querySelector('.product-ltgm > .ls1');
var listltgm2 = document.querySelector('.product-ltgm > .ls2');
var listLaptop1 = document.querySelector('.product-lt > .ls1');
var listLaptop2 = document.querySelector('.product-lt > .ls2');
var listTV1 = document.querySelector('.product-tv > .ls1');
var listTV2 = document.querySelector('.product-tv > .ls2');
var sosp = document.querySelector('.header-SoSanPham');
document.addEventListener('DOMContentLoaded',async function(){
    var listsp = await getAll();
    console.log(listsp);

    var lsxakho = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listXaKho.insertAdjacentHTML('beforeend',lsxakho);

    var lspc1 = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listPC1.insertAdjacentHTML('beforeend',lspc1);

    var lspc2 = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listPC2.insertAdjacentHTML('beforeend',lspc2);

    var lsltgm1 = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listltgm1.insertAdjacentHTML('beforeend',lsltgm1);

    var lsltgm2 = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listltgm2.insertAdjacentHTML('beforeend',lsltgm2);

    var lslt1 = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listLaptop1.insertAdjacentHTML('beforeend',lslt1);

    var lslt2 = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listLaptop2.insertAdjacentHTML('beforeend',lslt2);

    var lsTV1 = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listTV1.insertAdjacentHTML('beforeend',lsTV1);

    var lsTV2 = listsp.splice(0,5).map(function(item){
        return `<a href="/HTML/ChiTietSanPham.html?id=${item.id}" class="product-one">
        <img src=${item.hinh[0]} alt="" class="product-img">
        <div class="product-one-inf">
            <div class="product-one-inf-name">
                <b>${item.ten}</b>
            </div>
            <div class="product-one-price-discount" style="gap: 95px;">
                <div class="product-one-price">
                    <b class="product-one-price-old">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia)}</b>
                    <b class="product-one-price-new">${new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(item.gia-item.giamGia/100*item.gia)}</b>
                </div>
                <div class="Discount">
                    <img src="/IMG/IMGTrangChu/Product/Discount.png" alt="" >
                    <div class="Discount-number">${item.giamGia}%</div>
                </div>
            </div>
        </div>
    </a>`
    }).join('');
    listTV2.insertAdjacentHTML('beforeend',lsTV2);

    if (!localStorage.getItem('GioHang')) {
        var khoitao = {
          items: [],
          soLuong: 0,
        };
    
        localStorage.setItem('GioHang', JSON.stringify(khoitao));
    }

    sosp.textContent = cart.items.length;
});