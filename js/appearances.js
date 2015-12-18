initFuncs["appearances"] = function() {
  var now = moment();
  var year = now.year();
  //出演情報を取得＆並べ買うぇ＆表示
  appearancesGetInfo(year, function(data) {
    if(data != ""){
      $("#appearances-coming").text("");
    }
    $(data).find("div.stage").each(function() {
      var date = $(this).data("date");
      if(now.isBefore(date)){
        $("#appearances-coming").prepend(this);
      }else{
        $("#appearances-past").append(this);        
      }
    });
  });

  //さらに過去
  var pastYear = 2014;
  for(var i=year-1; i>=pastYear; i--){
    $("#appearances-morePast")
        .append("<div class='pointer' align='center' data-year='"+i+"' id='appearances-"+i+"'><h2>"
                +i+"年"
                +"</h2></div>");
    $("#appearances-"+i).on("click", function() {
      var label = $(this);
      label.off();
      appearancesGetInfo($(this).data("year"), function(data) {
        label.after(data);
      });
    });
  }
};

function appearancesGetInfo(year, callback) {
  var url = "./appearances/"+year+".html";
  $.get(url, null, function(data) {
    callback(data);
  })
  .fail(function() {
    callback("");
  });
}
