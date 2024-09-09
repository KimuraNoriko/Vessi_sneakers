//PC版ナビゲーションクリック時に、ナビゲーション部分の高さをオフセットしてスクロールする

document.querySelectorAll('a.anchor-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();//アンカーリンククリック時の動作を無効化

        const target = document.querySelector(this.getAttribute('href'));//クリックされたリンク先の要素を取得
        const navbarOffset = document.querySelector('#pc_nav').offsetHeight;

        window.scrollTo({
            top: target.offsetTop - navbarOffset,
        });
    });
});


// ハンバーガーメニューをクリックするとメニューを表示する

const hamburgerBtn = document.getElementById("hamburger-btn");

hamburgerBtn.addEventListener("click", function () {
    const spNav = document.getElementById("sp_nav");
    spNav.classList.toggle("show");
    hamburgerBtn.classList.toggle("change");

});

//Vessiの特徴sectionで、サイドバーのリンクのスタイルを、右にスクロールで表示されている要素によって変える
//各特長が表示されるコンテナのクラス　.feature_container → featureContainers

document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');

    const options = {//new IntersectionObserverに設定したコールバック関数が実行されるので、その引数となるオプションを指定。
        root: document.querySelector('.features'),//監視対象の要素
        rootMargin: '0px',
        threshold: 0.5 // 交差する範囲が50%を超えたときに実行
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const featureId = entry.target.id;
            const featureLink = document.querySelector(`a[href="#${featureId}"]`);

            console.log (featureLink);

            if (entry.isIntersecting) {
                featureLink.classList.add('active');
            } else {
                featureLink.classList.remove('active');
            }
        });
    }, options);

    features.forEach(feature => {
        observer.observe(feature);
    });
});

// 製品ラインナップのラインナップを見るボタンで詳細を表示する
// クリックする要素のクラス　product-show-btn　→ productShowBtn
// クリックで表示される要素のクラス　products_container → productDetail
// クリックで変化する±のアイコンのクラス　click-icon-products → clickIconProducts
// 表示時のdisplay flex

const productShowBtn = document.querySelectorAll(".product-show-btn");

productShowBtn.forEach(psbtn => {
    psbtn.addEventListener("click", () => {
        const productDetail = psbtn.nextElementSibling;
        const currentlyActiveDetail = document.querySelector(".products_container.show");

        if (currentlyActiveDetail && currentlyActiveDetail !== productDetail) {
            currentlyActiveDetail.classList.remove("show");
            currentlyActiveDetail.style.display = "none";
        }

        if (productDetail.style.display === "flex") {
            productDetail.style.display = "none";
            productDetail.classList.remove("show");
        } else {
            productDetail.style.display = "flex";
            productDetail.classList.add("show");
        }

        const clickIconProducts = psbtn.querySelector(".click-icon-products");
        const currentlyActiveIconProducts = document.querySelector(".click-icon-products.show");
        if (currentlyActiveIconProducts && currentlyActiveIconProducts !== clickIconProducts) {
            currentlyActiveIconProducts.classList.remove("show");
        }

        clickIconProducts.classList.toggle("show");

    });
});

// FAQの質問ボタンで詳細を表示する
// クリックする要素のクラス　question-btn 　→ questionBtn
// クリックで表示される要素のクラス　answer 　→ answer
// クリックで変化する±のアイコンのクラス　click-icon-faq 　→ clickIconFaq
// 表示時のdisplay block


const questionBtn = document.querySelectorAll(".question-btn");

questionBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const currentlyActiveAnswer = document.querySelector(".answer.show");

        if (currentlyActiveAnswer && currentlyActiveAnswer !== answer) {
            currentlyActiveAnswer.classList.remove("show");
        }
        if (getComputedStyle(answer).display === "block") {
            answer.classList.remove("show");
        } else {
            answer.classList.add("show");
        }

        const clickIconFaq = btn.querySelector(".click-icon-faq");
        const currentlyActiveIconFaq = document.querySelector(".click-icon-faq.show");
        if (currentlyActiveIconFaq && currentlyActiveIconFaq !== clickIconFaq) {
            currentlyActiveIconFaq.classList.remove("show");
        }

        clickIconFaq.classList.toggle("show");

    });
});


// コピーライトの年度（currentYear)に現在の年度を表示する
document.getElementById("currentYear").textContent = new Date().getFullYear();