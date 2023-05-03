import { getOne } from "../API/API.js";
function getQueryString(){
    var result = {},
      queryString = location.search.slice(1),
      re = /([^&=]+)=([^&]*)/g,
      m;
  
    while ((m = re.exec(queryString))) {
      result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
  
    return result;
};
function loadUI(product){
    var ten = document.querySelector('.ten');
    var tensp = document.querySelector('.tenSP');
    var gia = document.querySelector('.gia');
    var giamGia = document.querySelector('.giamGia');
    var hinh = document.querySelector('.list-hinh');
    var thongTin = document.querySelector('.thongTin');
    var hinhChinh = document.querySelector('.hinh');
    var danhmuc = document.querySelector('.danhmuc');
    danhmuc.textContent = product.danhMuc;
    ten.textContent = product.ten;
    tensp.textContent = product.ten;
    gia.textContent = product.gia + "₫";
    giamGia.textContent = product.gia-product.giamGia/100*product.gia + "₫";
    thongTin.innerHTML = product.thongTin;

    // Update images
    const imagesHTMLs = product.hinh.map((image) => {
    return `
    <div>
        <img src="${image}" alt="">
    </div>
    `;
  });

  hinh.innerHTML = imagesHTMLs.join('');
  hinh.firstElementChild.classList.add('active');
  hinhChinh.setAttribute('src', product.hinh[0]);
};
document.addEventListener('DOMContentLoaded',async function(){
    var string = getQueryString();
    var id = string.id;

    var product = await getOne(id);
    console.log(product);

    loadUI(product);
});

