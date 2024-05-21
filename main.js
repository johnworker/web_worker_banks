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
            duration: 2, // 動畫持續2秒
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
            duration: 2, // 動畫持續2秒
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
            duration: 2, // 動畫持續2秒
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
            duration: 2, // 動畫持續2秒
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
            duration: 2, // 動畫持續2秒
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
            duration: 2, // 動畫持續2秒
            ease: "power1.inOut",
            repeat: -1, // 無限重複
            repeatDelay: 3, // 每次動畫結束後3秒重新開始
            delay: 1 // 初始延遲1秒
        }
    );
}

animateCircle(); // 初始化動畫
