<?php
$link = mysql_connect('localhost', 'commojun', 'junpooooow');

if (!$link) {
	die('Error in connecting'.mysql_error());
}


//タイムスタンプを取得
$timestamp = time();

//接続
$db_selected = mysql_select_db('commojun', $link);
if (!$db_selected){
	die('Error in select db'.mysql_error());
}



//クエリー
$result = mysql_query('SELECT count as c,  UNIX_TIMESTAMP(timestamp) as timestamp, ipAddress  FROM  `counter` ORDER BY c DESC;');
if (!$result) {
	die('Error in query'.mysql_error());
}
$row = mysql_fetch_assoc($result);

// echo $timestamp, "<BR>", $row['timestamp'];
// echo "<BR>";
// echo ($timestamp - $row['timestamp']) , "<br>";

//IPを取得
$ipAddress = $_SERVER["REMOTE_ADDR"];

//現在時刻との差を計算
$diff = $timestamp - $row['timestamp'];

// echo $ipAddress . "<br>";
// echo $row['ipAddress'] . "<br>";
// if(strcmp($ipAddress, $row['ipAddress']) == 0){
// 	echo "A";
// }else{
// 	echo "B";
// }

//挿入
$sql = "INSERT INTO counter(ipAddress) VALUES('".$ipAddress."')";
if($diff > 60 || strcmp($ipAddress, $row['ipAddress']) != 0){
	$result_flag = mysql_query($sql);
	if (!$result_flag) die('Error in INSERT'.mysql_error());
}


mysql_close($link);
//許可関係で必要なヘッダー
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Prototype-Version, X-Prototype-Version, X-Requested-With");
print $row['c'];
?>