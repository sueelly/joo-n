const searchButton = document.querySelector(".button #searchButton");

function enterSearch(e) {
console.log(e);
    if(e.keyCode == 13){
        doSearch();  // 실행할 이벤트
    }
}

function doSearch() {
  var keyword = document.getElementById("search").value;
  location.href = "http://www.google.co.kr/search?q="+keyword;
}

console.log(searchButton);

searchButton.addEventListener("click", doSearch);
