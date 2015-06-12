<?php
$link = mysql_connect('localhost', 'commojun', 'junpooooow');
if(!$link){
    die('Error in connecting'.mysql_error());
}

$db_selected = mysql_select_db('commojun', $link);
if(!$db_selected){
    die('Error in select db'.mysql_error());
}
//mysql_set_charset('utf8');
mysql_query('SET NAMES utf8');

//パラメータ取得
$mode = "get";
if(isset($_GET['mode'])){
    $mode = $_GET['mode'];
}
if($mode=="new"){
    newEntry();
}else{
    getInfo();
}

//新着情報の表示
function getInfo(){
    //クエリー
    $sql = "SELECT `registerdate`, `deadline`, `info` FROM `newinfo` WHERE `deadline` > CURRENT_DATE();";
    $result = mysql_query($sql);
    if (!$result) {
        die('Error in query'.mysql_error());
    }

    $res = "";
    while($row=mysql_fetch_assoc($result)){
        $res[] = $row;
    }
    //jsonとして出力
    header('Content-type: application/json');
    //header('Content-type: text/plain; charset=UTF-8'); 
    echo json_encode($res);
}

//新情報の登録
function newEntry(){
    echo "new";
}

?>