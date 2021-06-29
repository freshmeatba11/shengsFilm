function myFunction(x) {
  x.classList.toggle("change");
}

//跳轉淡出動畫
let body = document.querySelector("body");
let links = document.querySelectorAll("a.link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    //取消事件預設動作
    e.preventDefault();
    let newLocation = links[i].href;
    //設定動畫效果
    body.style.animation = "fadeOut 1s ease-out forwards";
    //動畫結束執行跳轉
    body.addEventListener("animationend", newPage);
    //跳轉頁面
    function newPage() {
      window.location = newLocation;
    }
  });
}
