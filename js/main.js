//グローバル変数
var accesses = 0;
var contents = ["welcome", "profile", "work", "publication", "appearances", "link", "game"];
var initFuncs = {};


$(document).ready(function() {

  var firstPage = "welcome";
  var url = location.href;
  var param = url.split("#")[1];
  if($.inArray(param, contents) >= 0){
    firstPage = param;
  }
  
  $("div[data-menuButton]").on("click", function() {
    getContent(this);
  });

});

//指定されたコンテンツを表示する
function getContent(button){
  $("#message").html("Loading ...");
  var content = $(button).data("id");
  location.href = "#"+content;
  $("div[data-menuButton]").css("opacity", 1);
  var copy = $(button).clone();
  $("#currentContent").html(copy);
  $(button).fadeTo("fast", 0.4);
  var url = "./"+content+".html";
  $.get(url, null, function(data) {
    $("#message").html(data);
    initFuncs[content](); //ロード完了後の処理
  });
}

function getContentByName(content) {
  getContent("#navi > div[data-id='"+content+"']");
}

////////////////////////////// welcome //////////////////////////////
initFuncs["welcome"] = function() {

};


