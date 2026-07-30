window.addEventListener('load', () => {
    // 2.7秒後（キューブが奥に消えかかる瞬間）に発火
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');

        // ローダーをフェードアウト
        loader.style.opacity = '0';

        // メインコンテンツの表示準備（noneを解除）
        mainContent.style.display = 'block';

        // 少しだけ遅らせてからフェードイン開始（確実にアニメーションさせるため）
        setTimeout(() => {
            mainContent.classList.add('show');
            // ローダーをDOMから消す（裏で触れないように）
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600);
        }, 50);

    }, 2700);
});