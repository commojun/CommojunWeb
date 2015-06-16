$(document).ready(function() {
  var now = moment();
  //登録日の初期設定
  $("#registerdate").val(now.format("YYYY-MM-DD"));
  //Deadlineの初期設定
  $("#deadline").val(now.add(1, "M").format("YYYY-MM-DD"));

  $("#submit").on("click", submitNewInfo);

  getRecentInfo();
  
});

function submitNewInfo() {
  var data = {
    "mode": "new",
    "registerdate": $("#registerdate").val(),
    "deadline": $("#deadline").val(),
    "info": $("#info").val()
  };

  if(data.info == "") return false;

  var url = "./script/newinfo.php";
  $.get(url, data, function(data) {
    if(data==true){
      location.reload();
    }else{
      alert(data);
    }
  });
  
}

function getRecentInfo() {
  var url = "./script/newinfo.php";
  $.get(url, null, function(data) {
    for(var i=0; i<data.length; i++){
      $("#recentInfo").prepend("<p><input class=delete type=button value=X id="+data[i]._id+"><b>d:"+data[i].deadline+"</b><br>"+data[i].info+"</p>");
    }
    $("input.delete").on("click", function() {
      deleteInfo($(this).attr("id"));
    });
  });
}

function deleteInfo(id) {
  var data = {
    "mode": "del",
    "_id": id
  };

  var url = "./script/newinfo.php";
  $.get(url, data, function(data) {
    if(data==true){
      location.reload();
    }else{
      alert(data);
    }
  });
}
