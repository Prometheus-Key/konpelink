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

    }, 3500);
});

// --- フィルター機能の処理 ---
function filterWorks(category) {
    // 1. フィルターボタンの見た目（アクティブ状態）を更新
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // クリックされたボタンをアクティブにする
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // 2. 作品カードの表示/非表示を切り替え
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex'; // 表示する
        } else {
            card.style.display = 'none'; // 隠す
        }
    });


}
