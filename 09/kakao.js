const $btn = document.querySelector ('#search-btn');
const $text = document.querySelector ('#search-text');
const $result = document.querySelector('#result');
const url ='https://dapi.kakao.com/v2/search/web';
const headers = {
   Authorization: 'KakaoAK f2b44f3205bdb6e7cd8b171d4b0fba12'};

function success(data){
    const {documents} = data;
    const li = documents.map((doc) => { //documents만큼 돌면서 doc가 contents
        return `<li class="list-group-item"><a href = "${doc.url}" target="_blank">${doc.contents}</a></li>`
        //url클릭하면 새 창으로 array에서 맵이란건 요소들을 다 돌며 리턴되는 배열로 만들어주는 것
    });

    $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
        '',
    )}</ul>`;
}
function error(){
    alert('데이터를 가져올 수 없습니다');
}

function search() {
    const {value} = $text;
    if(value === '') {
        alert('검색어를 입력하세요');
        return false;
    }
    fetch(`${url}?query=${value}`, {headers})
    .then((res)=>res.json())
    .then(success)
    .catch(error);

    return true;
}

$btn.addEventListener('click', search);