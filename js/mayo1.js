
function m1_on(imag,inpu){									//あける
	document.getElementById(imag).src = "img/m_on.jpg";
	document.getElementById(imag).title = "opened";
	document.getElementById(inpu).value = "1";
}

function m1_off(imag,inpu){								//しめる
	document.getElementById(imag).src = "img/m_off.jpg";
	document.getElementById(imag).title = "closed";
	document.getElementById(inpu).value = "0";
}

function m1_clear(){
	for(i=1;i<=5;i++){
		d_img = "m1_m" + i;
		document.getElementById(d_img).style.display = "none";
	}
	document.getElementById("m1_c_message").style.display = "inline";
	//alert("Clear!");
}

function m1_gameover(){
	for(i=1;i<=5;i++){
		d_img = "m1_m" + i;
		document.getElementById(d_img).style.display = "none";
	}
	document.getElementById("m1_o_message").style.display = "inline";
	//alert("Gameover…");
}

function m1_reset(){
	document.getElementById("m1_c_message").style.display = "none";
	document.getElementById("m1_o_message").style.display = "none";
	document.getElementById("m1_point").value = 3;
	var tmp = new Array(1, 0, 1, 0, 1);
	for(i=0; i<5; i++){
		num = i + 1;
		imag = "m1_m" + num;
		inp = "m1_i" + num;
		document.getElementById(imag).style.display = "inline";
		if(tmp[i] == 1) m1_on(imag, inp);
		else m1_off(imag, inp);
	}

}


function m1_check(){
	var ten = 0;
	for(i=1;i<=5;i++){
		inp_c = "m1_i" + i;
		if(document.getElementById(inp_c).value == 1){
			m1_gameover();
			break;
		}else{
			ten++;
			if(ten == 5){m1_clear();}
		}
	}
}

function m1_change(num){
	//左側
	if(num != 1){
		_num = num - 1;
		_inp = "m1_i" + _num;
		_m_img = "m1_m" + _num;
		if(document.getElementById(_inp).value == 0){	//閉まってたら
			m1_on(_m_img,_inp);
		}else{											//開いてたら
			m1_off(_m_img,_inp);
		}
	}else{
		_num = num + 4;
		_inp = "m1_i" + _num;
		_m_img = "m1_m" + _num;
		if(document.getElementById(_inp).value == 0){
			m1_on(_m_img,_inp);
		}else{
			m1_off(_m_img,_inp);
		}
	}
	//まんなか
	inp = "m1_i" + num;
	m_img = "m1_m" + num;
	if(document.getElementById(inp).value == 0){
		m1_on(m_img,inp);
	}else{
		m1_off(m_img,inp);
	}
	//右側
	if(num != 5){
		num_ = num + 1;
		inp_ = "m1_i" + num_;
		m_img_ = "m1_m" + num_;
		if(document.getElementById(inp_).value == 0){
			m1_on(m_img_,inp_);
		}else{
			m1_off(m_img_,inp_);
		}
	}else{
		num_ = num - 4;
		inp_ = "m1_i" + num_;
		m_img_ = "m1_m" + num_;
		if(document.getElementById(inp_).value == 0){
			m1_on(m_img_,inp_);
		}else{
			m1_off(m_img_,inp_);
		}
	}
	
	//残りポイントの計算
	document.getElementById("m1_point").value--;
	if(document.getElementById("m1_point").value == 0){
		m1_check();
		document.getElementById("m1_re").style.display = "inline";
	}
}
