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
        titleJa: "ネオンオーバードライブ",        // タイトル（日本語）
        titleEn: "Neon Over Drive",      // タイトル（英語）
        authorJa: "VR制作班",             // 作者（日本語）
        category: "GAME",             // タグの文字
        thumbText: "Game Screen",     // サムネイルの仮文字
        imagePath: "neon.png",        // サムネイル画像
        link: "https://unityroom.com/games/neon-overdrive",  // リンク先のURL
        btnText: "Play"               // ボタンの文字
    },
    {
        type: "game",
        titleJa: "パズルゲーム",
        titleEn: "パズルゲーム",
        authorJa: "ぜっつー",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "puzzle.png",
        link: "https://unityroom.com/games/puzzlegame183457",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "Vilgam",
        titleEn: "Vilgam",
        authorJa: "I love 弾幕",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "vilgam.png",
        link: "https://unityroom.com/games/vilgam_kakkou",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "エトリアルシーカー",
        titleEn: "etlialseker",
        authorJa: "紅茶",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "airlitle.png",
        link: "https://unityroom.com/games/etlialseker",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "Sky Shooting",
        titleEn: "Sky Shooting",
        authorJa: "coumarou",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "shoot.png",
        link: "https://unityroom.com/games/famas1219",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "謎解き脱出ゲーム",
        titleEn: "謎解き脱出ゲーム",
        authorJa: "脱出ゲーム班",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "escape.png",
        link: "https://unityroom.com/games/dassyutu_nazotoki",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "シューティング！",
        titleEn: "シューティング！",
        authorJa: "ハシグチ組",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "shooting.png",
        link: "https://unityroom.com/games/3dshooting-game",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "単位が足りない！",
        titleEn: "単位が足りない！",
        authorJa: "ちょむすけ親衛隊",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "tanni.png",
        link: "https://unityroom.com/games/tani-ga-tarinai",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "SHOOTING STORM",
        titleEn: "SHOOTING STORM",
        authorJa: "SKYFISH",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "shot.png",
        link: "https://unityroom.com/games/hamada-the-shooting-game",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "SPACE BULLET",
        titleEn: "SPACE BULLET",
        authorJa: "弾幕ゲーム制作",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "boss.png",
        link: "https://unityroom.com/games/spacebullet",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "黒騎士くんの大冒険",
        titleEn: "黒騎士くんの大冒険",
        authorJa: "konpemario",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "blackmere.png",
        link: "https://unityroom.com/games/konpe-mario-1427",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "避けろ！迫りくるボールから",
        titleEn: "避けろ！迫りくるボールから",
        authorJa: "ball",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "ballyoke.png",
        link: "https://unityroom.com/games/avoidballkuro13",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "直下掘りには夢がある！",
        titleEn: "直下掘りには夢がある！",
        authorJa: "CK",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "click.png",
        link: "https://unityroom.com/games/tyokka-yume",
        btnText: "Play"
    },
    {
        type: "game",
        titleJa: "丘の下株式会社",
        titleEn: "丘の下株式会社",
        authorJa: "幽霊部員",
        category: "GAME",
        thumbText: "Game Screen",
        imagePath: "web.png",
        link: "https://ngo855.github.io/arg-game",
        btnText: "Play"
    },

    {
        type: "web",                  // さっきCSSで作った「web」を指定
        titleJa: "サークル公式Web",
        titleEn: "Official Website",
        authorJa: "Web制作班",
        authorEn: "Web Team",
        category: "WEB",
        thumbText: "Browser Screen",
        imagePath: "homepage.png",
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

    worksData.forEach(work => {
        // ★ 画像のパスがあれば<img>タグを、なければ文字（thumbText）をセットする
        const thumbContent = work.imagePath
            ? `<img src="${work.imagePath}" alt="${work.titleJa}" class="thumb-img">`
            : work.thumbText;

        htmlString += `
        <div class="card ${work.type}">
            <div class="thumb">${thumbContent}</div>
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

    grid.innerHTML = htmlString;
}

// =========================================
// 画面が読み込まれた瞬間に生成を実行する
// =========================================
window.addEventListener('DOMContentLoaded', () => {
    renderWorks();
});

