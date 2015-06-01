var initFuncs = {
  welcome : function() {
    console.log("hello");
  }
};

initFuncs["profile"] = function() {
  console.log("profile");
};

$(document).ready(function() {

  getContent("welcome");
  
  $("div[data-menuButton]").on("click", function() {
    var content = $(this).data("id");
    getContent(content);
  });

});

//指定されたコンテンツを表示する
function getContent(content){
  var url = "./"+content+".html";
  $.get(url, null, function(data) {
    $("#message").html(data);
    initFuncs[content](); //ロード完了後の処理
  });
}
