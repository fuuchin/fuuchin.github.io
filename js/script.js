const menu = $(".menu");
const button = $("#button");
const buttonLineTop = $(".button-line-top");
const buttonLineMedium = $(".button-line-medium");
const buttonLineBottom = $(".button-line-bottom");
const overlay = $(".overlay");

const toggleMenu = () => {
  menu.toggleClass("menu-isOpen");
  buttonLineTop.toggleClass("button-line-top-isOpen");
  buttonLineMedium.toggleClass("button-line-medium-isOpen");
  buttonLineBottom.toggleClass("button-line-bottom-isOpen");
  overlay.toggleClass("overlay-isOpen");
}

button.on("click", () => {
  toggleMenu();
})

overlay.on("click", () => {
  setTimeout(toggleMenu, 300);
})

$('#page-link a[href*="#"]').click(function () {
  //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  let elmHash = $(this).attr('href');
  console.log(elmHash);
  //idの上部の距離を取得
  let pos = $(elmHash).offset().top;
  console.log(pos);
  //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  $('body,html').animate({scrollTop: pos}, 400);
  return false;
});

const pageTop = $('#page-top');

pageTop.click(function () {
  //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  $('body,html').animate({scrollTop: 0}, 400);
  return false;
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  let scroll = $(window).scrollTop();
  if (scroll >= 200) { //上から200pxスクロールしたら
    $('#page-top').removeClass('button-off');
    $('#page-top').addClass('button-on');
    console.log(4)
  } else{
    if($('#page-top').hasClass('button-on')){
    $('#page-top').removeClass('button-on');
    $('#page-top').addClass('button-off');
    }
    
    console.log(7)
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

$('[data-toggle="tooltip"]').tooltip();