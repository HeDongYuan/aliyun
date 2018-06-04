
//小图标转动
var num=0;
var rotateimg=document.getElementsByClassName('ali-tools-box-img')[0];
setInterval(function(){
  num++;
  rotateimg.style.backgroundPosition='0px '+num*(150)+'px';
},40)