$(document).ready(function(){
    $('#info_article_list>div').hide(); //div 모두 숨기고
    $('#info_article_list>div').slice(0,6).show(); //1번째부터 6번째 까지만 보여줌
})

function more(){
    $('#info_article_list>div').slice(6,10).fadeIn(1000);
    //more함수는 7번째부터 10번째 까지 보여줌(마지막 4개)
}