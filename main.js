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
            duration: 5, // 動畫持續2秒
            onComplete: function () {
                gsap.delayedCall(3, animateCircle); // 3秒後重新開始動畫
            },
            ease: "power1.inOut"
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
            duration: 5, // 動畫持續2秒
            onComplete: function () {
                gsap.delayedCall(3, animateCircle); // 3秒後重新開始動畫
            },
            ease: "power1.inOut"
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
            duration: 5, // 動畫持續2秒
            onComplete: function () {
                gsap.delayedCall(3, animateCircle); // 3秒後重新開始動畫
            },
            ease: "power1.inOut"
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
            duration: 5, // 動畫持續2秒
            onComplete: function () {
                gsap.delayedCall(3, animateCircle); // 3秒後重新開始動畫
            },
            ease: "power1.inOut"
        },
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
            duration: 5, // 動畫持續2秒
            onComplete: function () {
                gsap.delayedCall(3, animateCircle); // 3秒後重新開始動畫
            },
            ease: "power1.inOut"
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
            duration: 5, // 動畫持續2秒
            onComplete: function () {
                gsap.delayedCall(3, animateCircle); // 3秒後重新開始動畫
            },
            ease: "power1.inOut"
        }
    );

}

animateCircle(); // 初始化動畫