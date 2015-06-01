//�s��Fline-column
var life_line = 50;	//�Z���̍s����ݒ�
var life_column = 50;	//�Z���̗񐔂�ݒ�
//��2���~2���܂ŁB
var life_int = 1;	//�X�V���x�i�~���b�j
//�C���v�b�g
var life_inp = new Array();

//�^�C�}�[
var life_timer = null;


//�ŏ��Ɏ��s
function life_init(){
	//�C���v�b�g�̏�����
	for(k=1;k<=life_line;k++){
		for(l=1;l<=life_column;l++){
			number = 100*k + l;
			life_inp[number] = 0;
		}
	}
	
	//�t�B�[���h�̕`��
	for(i=1;i<=life_line;i++){
		document.write("<tr>");
		for(j=1;j<=life_column;j++){
			number = 100*i + j;
			
			document.write("<td style='border-width:0px;padding:0px;' id=life_c_",number,"><span onmouseout=life_white(",number,") onmouseover=life_color(",number,"); style=font-size:12px;cursor:default;><span onClick=life_turn(",number,"); id=life_nu_",number," style=display:inline;color:white>��</span></span></td>");
		}
	}

}



function life_color(num){
	c_num = "life_c_"+num;
	document.getElementById(c_num).style.backgroundColor = "red";
}


function life_white(num){
	c_num = "life_c_"+num;
	document.getElementById(c_num).style.backgroundColor = "transparent";
}


//�F��ς���
function life_turn(num){
	nu_num = "life_nu_"+num;
	if(life_inp[num] == 1){
		document.getElementById(nu_num).style.color = "white";
		life_inp[num] = 0;
	}else{
		document.getElementById(nu_num).style.color = "black";
		life_inp[num] = 1;
	}
}

//���s
function life_exe(){
	score = 0;	//�����̃Z�����ω�������
	//�C���v�b�g�����ăZ����ς���
	for(i=1;i<=life_line;i++){
		i_up = i-1;
		i_under = i+1;
		if(i == 1) i_up = life_line;
		if(i == life_line) i_under = 1;
		
		for(j=1;j<=life_column;j++){
			j_left = j-1;
			j_right = j+1;
			if(j == 1) j_left = life_column;
			if(j == life_column) j_right = 1;
			counter = 0;
			if(life_inp[100*i_up+j_left] == 1) counter++;
			if(life_inp[100*i_up+j] == 1) counter++;
			if(life_inp[100*i_up+j_right] == 1) counter++;
			if(life_inp[100*i+j_left] == 1) counter++;
			if(life_inp[100*i+j_right] == 1) counter++;
			if(life_inp[100*i_under+j_left] == 1) counter++;
			if(life_inp[100*i_under+j] == 1) counter++;
			if(life_inp[100*i_under+j_right] == 1) counter++;
			
			number = 100*i+j;
			if(life_inp[number]==0){	//���Ȃ��
				if(counter == 3) {	//�J�E���^��3�̎���������B
					document.getElementById("life_nu_"+number).style.color = "black";
					score++;
				}
			}else{	//���Ȃ��
				if(counter != 3 && counter != 2){	//�J�E���^��2�ł�3�ł��Ȃ��Ƃ���������B
					document.getElementById("life_nu_"+number).style.color = "white";
					score++;
				}
			}
		}
	}
	
	//�ύX���ꂽ�Z���ɑΉ�����C���v�b�g��ύX����
	for(i=1;i<=life_line;i++){
		for(j=1;j<=life_column;j++){
			number = 100*i+j;
			if(document.getElementById("life_nu_"+number).style.color == "black"){ //�Z�������Ȃ��
				life_inp[number] = 1;	//�C���v�b�g��1�ɂ���B
			}else{	//����ȊO���Z�������Ȃ��
				life_inp[number] = 0;	//�C���v�b�g��0�ɂ���B
			}
		}
	}
	//�ύX���ꂽ�Z���̐���0��������
	if(score==0){
		life_switch();
	}else{
		document.getElementById("life_ge").value++;
	}
}

//Start Stop �X�C�b�`
function life_switch(){
	if(life_timer == null){
		life_timer=setInterval('life_exe()',life_int);
		document.getElementById("life_switcher").value = "Stop";
	}else{
		clearInterval(life_timer);
		document.getElementById("life_switcher").value = "Start";
		life_timer = null;
	}
}

//Clear �X�C�b�`
function life_clear(){
	for(k=1;k<=life_line;k++){
		for(l=1;l<=life_column;l++){
			number = 100*k + l;
			if(life_inp[number] == 1) life_turn(number);
		}
	}
}

//Random�{�^��
function life_random(){
	for(k=1;k<=life_line;k++){
		for(l=1;l<=life_column;l++){
			number = 100*k + l;
			rand = Math.floor( Math.random() * 10 );
			if(rand > 6) life_turn(number);
		}
	}
}


