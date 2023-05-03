var imgFeature = document.querySelector('.hinh');
var imgList = document.querySelector('.list-hinh');
var nextImgMain = document.querySelector(".img_main");

var currentIndex = 0;
function UpdateIndex(index) {
    //remove active class
    document.querySelectorAll('.img_list div').forEach(item=>{
        item.classList.remove('active');
    });
    currentIndex = index;
    imgFeature.src = imgList[index].getAttribute('src');
    imgList[index].parentElement.classList.add('active');
}

imgList.addEventListener('click', function (e) {
    console.log(e.target)
    document.querySelector('.list-hinh .active').classList.remove('active');

    if (e.target.getAttribute('src')) {
        e.target.classList.add('active');
        document.querySelector('.hinh').setAttribute('src', e.target.getAttribute('src'));
    }
})

// imgList.forEach ((imgElement,index)=>{
//     imgElement.addEventListener('click',img=> {
//       UpdateIndex(index);
//     });
// });
// nextImgMain.addEventListener('click',img=>{
//     if(currentIndex== imgList.length -1){
//         currentIndex = 0;
//     } else {
//         currentIndex++;
//     }
//     UpdateIndex(currentIndex);
// });