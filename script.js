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
// =========================================
// 作品データのリスト（追加・編集はここだけ！）
// =========================================
const worksData = [
    {
        type: "game",                 // 種類（game, music, illust）
        titleJa: "最高のゲーム",        // タイトル（日本語）
        titleEn: "Awesome Game",      // タイトル（英語）
        authorJa: "kali",             // 作者（日本語）
        category: "GAME",             // タグの文字
        thumbText: "Game Screen",     // サムネイルの仮文字
        link: "https://example.com",  // リンク先のURL
        btnText: "Play"               // ボタンの文字
    },
    {
        type: "music",
        titleJa: "エレクトロチューン",
        titleEn: "Electro Tune",
        authorJa: "△△",
        category: "MUSIC",
        thumbText: "Jacket Image",
        link: "https://example.com/music",
        btnText: "Listen"
    },
    {
        type: "illust",
        titleJa: "近未来都市",
        titleEn: "Cyber City",
        authorJa: "××",
        category: "ILLUSTRATION",
        thumbText: "Artwork",
        link: "https://example.com/illust",
        btnText: "View"
    },

    {
        type: "web",                  // さっきCSSで作った「web」を指定
        titleJa: "サークル公式Web",
        titleEn: "Official Website",
        authorJa: "Web制作班",
        authorEn: "Web Team",
        category: "WEB",
        thumbText: "Browser Screen",
        link: "https://dot-cube.github.io/", // 実際のWebサイトのURL
        btnText: "Visit"
    }
];

// =========================================
// データを元にHTMLを自動生成する関数
// =========================================
function renderWorks() {
    const grid = document.getElementById('works-grid');
    let htmlString = '';

    // 作品リストを1つずつ順番に処理してHTMLの文字列を作る
    worksData.forEach(work => {
        htmlString += `
        <div class="card ${work.type}">
            <div class="thumb">${work.thumbText}</div>
            <div class="card-content">
                <h2>
                    <span class="ja-text">${work.titleJa}</span>
                </h2>
                <div class="tags">${work.category}</div>
                <p>
                    <span class="ja-text">作者: ${work.authorJa}</span>
                </p>
                <a href="${work.link}" target="_blank" rel="noopener noreferrer" class="card-link btn-${work.type}">${work.btnText}</a>
            </div>
        </div>
        `;
    });

    // 出来上がったHTMLを、空の箱（grid）に流し込む
    grid.innerHTML = htmlString;
}

// =========================================
// 画面が読み込まれた瞬間に生成を実行する
// =========================================
window.addEventListener('DOMContentLoaded', () => {
    renderWorks();
});

