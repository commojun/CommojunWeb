var m2_j = 5;

function m2_init(){
	j = m2_j;	//フィールドの大きさ指定
	for(i=0;i<(j*j);i++){
		$("#m2_game").append("<img style=cursor:pointer; onclick=m2_change("+i+",0,0); id=m2_"+i+" src=img/m_on.jpg title='opened'>");
		if((i+1)%j==0) $("#m2_game").append("<br>");
	}
	for(i=0;i<(j*j);i++){
		$("#m2_game").append("<input type=hidden value=0 id=m2_in"+i+">");
	}
	m2_reset(5);
}


function m2_reset(level){

	level = parseInt(level) //数値型になおす

	if(document.getElementById("m2_fail")){
		document.getElementById("m2_game").style.display = "block";
		document.getElementById("m2_fail").style.display = "none";
		document.getElementById("m2_clear").style.display = "none";
	}
	
	j = m2_j;
	//ぜんぶしめる
	for(i=0; i<(j*j); i++){
		m2_off(i);
	}
	for(i=0; i<level; i++){
		randnum = Math.floor( Math.random() * (j*j) );
		m2_change(randnum, 0, 1);
	}
	level += 10
	document.getElementById("m2_clicktime").value = (level);
}

function m2_off(num){
	document.getElementById("m2_"+num).src = "img/m_off.jpg";
	document.getElementById("m2_"+num).title = "closed";
	document.getElementById("m2_in"+num).value = 1;
}
function m2_on(num){
	document.getElementById("m2_"+num).src = "img/m_on.jpg";
	document.getElementById("m2_"+num).title = "opened";
	document.getElementById("m2_in"+num).value = 0;

}

function m2_change(num,brk,init){
	if(document.getElementById("m2_"+num)){
	if(document.getElementById("m2_in"+num).value==0){
		m2_off(num);
	}else{
		m2_on(num);
	}
	}
	if(brk==1) return 0;
	brk = 1;
	j = m2_j;
	if((num+1)%j != 0) m2_change(num+1,brk,0);
	if((num+j)%j != 0) m2_change(num-1,brk,0);
	m2_change(num+j,brk,0);
	m2_change(num-j,brk,0);
	if(init != 1) m2_check();
}

function m2_check(){
	document.getElementById("m2_clicktime").value--;
	left = document.getElementById("m2_clicktime").value;
	if(left == 0){
		document.getElementById("m2_game").style.display = "none";
		document.getElementById("m2_fail").style.display = "block";
		document.getElementById("m2_retry").style.display = "block";
	}
	judge = 1;
	j = m2_j;
	for(i=0;i<j*j;i++){
		judge *= document.getElementById("m2_in"+i).value;
	}
	if(judge==1){
		m2_cleartime = document.getElementById("m2_clicktime").value;
		document.getElementById("m2_game").style.display = "none";
		document.getElementById("m2_clear").style.display = "block";
		document.getElementById("m2_retry").style.display = "block";
	}
}
