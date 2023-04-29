var imgFeature = document.querySelector('.img_feature');
var imgList = document.querySelectorAll('.img_list img');
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
imgList.forEach ((imgElement,index)=>{
    imgElement.addEventListener('click',img=> {
      UpdateIndex(index);
    });
});
nextImgMain.addEventListener('click',img=>{
    if(currentIndex== imgList.length -1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    UpdateIndex(currentIndex);
});