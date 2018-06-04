 // 面向对象:
// 需要一个对象
// 调用了对象的某些方法之后,就实现的我的需求
//1. 监听浏览器滚动条的方法
// 2 .点击让滚动条慢慢回到顶部的方法
function ToTop(showPos){
  this.showPos = showPos;
}
//这个方法监听浏览器的滚动条
ToTop.prototype.start = function(){
  //获取a标签元素
  var link = document.getElementById('totop');
  //监听浏览器滚动条的滚动事件
  window.onscroll = function(){
    //判断是否到达指定位置
    if(document.documentElement.scrollTop >= this.showPos){
      //到达则展示
      link.style.display = 'block';
      
    }else{
      //否则就消失
      link.style.display = 'none';
    }
    
  }.bind(this); //这个function里面默认this指向 window
}

//点击a标签的时候,要执行的代码
ToTop.prototype.backTop = function(){
  
  //因为要慢慢滚动回去,所以要设置一个定时器
  this.timeid = setInterval(function(){
    //先获取到当前位置
    var current = document.documentElement.scrollTop;
    //判断是否已经回到顶部
    if(current <= 0){
      //如果已经回到顶部就清除定时器,手动赋值为0 ,然后return
      document.documentElement.scrollTop = 0;
      clearInterval(this.timeid);
      return;
    }
    
    //如果没有回到顶部,就慢慢往上走
    document.documentElement.scrollTop -= 20;
    
  }.bind(this) ,20); //因为定时器的函数中,this-->window.
  // 我们要使用实例的timeid属性,所以需要改变this的指向
  
}