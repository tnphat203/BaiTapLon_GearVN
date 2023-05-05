var user = localStorage.getItem('user');

if (user === 'admin') {
    document.querySelector('body > section.header.fixed-top > div.header-container > div > div.header-control > div.header-list-control-btn > a:nth-child(1) > b').textContent = 'TRẦN NGỌC PHÁT';
    document.querySelector('body > section.header.fixed-top > div.header-container > div > div.header-control > div.header-list-control-btn > a:nth-child(2) > b').textContent = 'ĐĂNG XUẤT';
} else {
    document.querySelector('body > section > section.header > div.header-container > div > div.header-control > div.header-list-control-btn > a:nth-child(1) > b').textContent = 'ĐĂNG KÝ';
    document.querySelector('body > section > section.header > div.header-container > div > div.header-control > div.header-list-control-btn > a:nth-child(2) > b').textContent = 'ĐĂNG NHẬP';
}   