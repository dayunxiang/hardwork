$(function () {
  //初始化地图
 initMap()
//打开照片预览
openphotoyl() 

})

//初始化地图
function initMap() {
  //初始化地图，默认地图为在线高德地图
       var rmap = new RMap.Map('map');
       //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
       rmap.centerZoom(116.390985, 39.906358, 12);
}

//照片预览
 function openPhotoSwipe() {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        // build items array
        var items = [{
                src: 'img/yishui copy 6@3x.png',
                w: 964,
                h: 1024
            },
            {
                src: 'img/ico-upload.png',
                w: 1024,
                h: 683
            }
        ];
        // define options (if needed)
        var options = {
            // history & focus options are disabled on CodePen        
            history: false,
            focus: false,
            bgOpacity: 0.8,
            arrowEl: true,
            shareEl: false,
            fullscreenEl: true,
            download: false,
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
            enableKeyboard: true,
            mouseUsed: true,
            allowPanToNext: true
        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
//打开照片预览
function openphotoyl() {
   $('.wrap .mainContainer .content .jqdclContainer .jqdclmanaContainer>li .photo>div>img').on("click", function() {
        openPhotoSwipe()
    })
}

