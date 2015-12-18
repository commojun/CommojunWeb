//グローバルに使う変数
var gameContents = new Array("mayo1", "mayo2", "lifegame");
//ページ読み込み時
initFuncs["game"] = function() {

  var maxColumn = Math.floor($("#message").innerWidth()/10 - 2);
  if(maxColumn>50) maxColumn = 50;
  life_column = maxColumn;
  life_line = maxColumn;
  
  $("div[data-game]").hide();
  m2_init();
  life_init();

  //ゲームの表示クリックリスナー
  $("span[data-gameButton]").on("click", function() {
    $("div[data-game]").hide();
    var game = $(this).data("gamebutton");
    console.log(game);
    $("div#"+game).show();
  });
};
