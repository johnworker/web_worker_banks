// 圖片輪播
$(document).ready(function () {
    var $slider = $('.image_mask_box');
    $slider.slick({
        dots: false,
        infinite: true,
        fade: true,
        arrows: false,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 5000, // 動畫持續時間為5秒
        speed: 5000, // 圖片切換速度為5秒
        pauseOnHover: false,
        cssEase: 'linear'
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        $slider.slick('slickPause'); // 停止自動播放
        setTimeout(function() {
            $slider.slick('slickPlay'); // 3秒後重新開始播放
        }, 3000); // 停3秒
    });
});

// 圓形符號動畫區

function animateCircle() {
    gsap.fromTo(".animate_curcle_one",
        {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0
        },
        {
            scale: 1.5, // 可根據需求調整擴大的比例
            opacity: 0,
            x: -200, // 固定向左移動的距離，可根據需求調整
            y: -150,
            duration: 5, // 動畫持續5秒
            ease: "power1.inOut",
            repeat: -1, // 無限重複
            repeatDelay: 3, // 每次動畫結束後3秒重新開始
            delay: 1 // 初始延遲1秒
        }
    );

    gsap.fromTo(".animate_curcle_two",
        {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0
        },
        {
            scale: 0.8, // 可根據需求調整擴大的比例
            opacity: 0,
            x: -200, // 固定向左移動的距離，可根據需求調整
            y: 50,
            duration: 5, // 動畫持續5秒
            ease: "power1.inOut",
            repeat: -1, // 無限重複
            repeatDelay: 2, // 每次動畫結束後2秒重新開始
            delay: 1 // 初始延遲1秒
        }
    );

    gsap.fromTo(".animate_curcle_three",
        {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0
        },
        {
            scale: 0.65, // 可根據需求調整擴大的比例
            opacity: 0,
            x: -200, // 固定向左移動的距離，可根據需求調整
            y: 0,
            duration: 5, // 動畫持續5秒
            ease: "power1.inOut",
            repeat: -1, // 無限重複
            repeatDelay: 8, // 每次動畫結束後8秒重新開始
            delay: 1 // 初始延遲1秒
        }
    );

    gsap.fromTo(".animate_curcle_four",
        {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0
        },
        {
            scale: 0.65, // 可根據需求調整擴大的比例
            opacity: 0,
            x: 200, // 固定向左移動的距離，可根據需求調整
            y: -180,
            duration: 5, // 動畫持續5秒
            ease: "power1.inOut",
            repeat: -1, // 無限重複
            repeatDelay: 4, // 每次動畫結束後4秒重新開始
            delay: 1 // 初始延遲1秒
        }
    );

    gsap.fromTo(".animate_curcle_five",
        {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0
        },
        {
            scale: 0.65, // 可根據需求調整擴大的比例
            opacity: 0,
            x: 200, // 固定向左移動的距離，可根據需求調整
            y: -80,
            duration: 5, // 動畫持續5秒
            ease: "power1.inOut",
            repeat: -1, // 無限重複
            repeatDelay: 5, // 每次動畫結束後5秒重新開始
            delay: 1 // 初始延遲1秒
        }
    );

    gsap.fromTo(".animate_curcle_six",
        {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0
        },
        {
            scale: 0.65, // 可根據需求調整擴大的比例
            opacity: 0,
            x: 200, // 固定向左移動的距離，可根據需求調整
            y: 0,
            duration: 5, // 動畫持續5秒
            ease: "power1.inOut",
            repeat: -1, // 無限重複
            repeatDelay: 3, // 每次動畫結束後3秒重新開始
            delay: 1 // 初始延遲1秒
        }
    );
}

animateCircle(); // 初始化動畫


//關於我們輪播區
// 圖片輪播
$(document).ready(function () {
    var $slider = $('.about_pic_show');
    $slider.slick({
        dots: false,
        infinite: true,
        arrows: false,
        draggable: false,
        autoplay: true,
        speed: 5000, // 圖片切換速度為5秒
        pauseOnHover: false,
        cssEase: 'linear'
    });
});