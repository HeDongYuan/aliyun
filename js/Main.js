$(document).ready(function(e) {
  $("#bodyPage").fullImages({
    ImgWidth: 2500,
    ImgHeight: 1200,
    autoplay :  5000,
    fadeTime :1500
  });
});

// 1. 找对象
// 2.调用对象的方法
var gototop = new ToTop(100);
gototop.start();


$(function () {
  $('.ali-product-tabs').click(function () {
    // console.log(1);
    $(this).next().show().parent().siblings().children('div').hide();
    // .parent().siblings().next().show().parent().siblings().children('div').hide();
    // 跨行怎能搞？ 链式？
  });
  
  
  $('.ali-product-tabs li').click(function () {
    var index = $(this).index();
    console.log(index);
    // 先确定所在行
    $(this).parent().next().children().eq(index).addClass('selected').siblings().removeClass('selected');
    // $('.ali-product-box').children('div').eq(index).addClass('selected').siblings().removeClass('selected');
  });
  
  
  $(".second-nav li").mouseenter(function () {
    $(this).parent().next().show();
  })
  
  $(".second-nav li").mouseleave(function () {
    $(this).parent().next().hide();
  })
  
  
  // 手动轮播
  var index=0; //图片的索引值
  $('.arrow-right').click(function(){
    index++;
    //边界检测
    if(index>$('.five-box li').length-1){
      index=0;//复位
    }
    //让和index对应的图片显示
    $('.five-box li').eq(index).fadeIn().siblings().fadeOut();
  })
  //向左按钮
  $('.arrow-left').click(function(){
    index--;
    //边界检测
    if(index<0){
      index=$('.five-box li').length-1;//复位
    }
    //让和index对应的图片显示
    $('.five-box li').eq(index).fadeIn().siblings().fadeOut();
  })
  
  
  // 图标转动
  $('.dong').mouseenter(function() {
    clearInterval(this.s);
    clearInterval(this.b);
    this.b = setInterval(function() {
      var current = parseInt($(this).position().top);
      if (current <= -4425) {
        clearInterval(this.s);
        return;
      }
      current = current - 75;
      $(this).css('top', current);
    }.bind(this), 20);
  });
  
  $('.dong').mouseleave(function() {
    clearInterval(this.s);
    clearInterval(this.b);
    this.s = setInterval(function() {
      var current = parseInt($(this).position().top);
      if (current >= 0) {
        clearInterval(this.s);
        return;
      }
      current = current + 75;
      $(this).css('top', current);
    }.bind(this), 20);
  });
})

$(function () {
  $('.er-title').mouseenter(function () {
    $(this).next('.er-img').show().parent('dd').siblings('dd').children('.er-img').hide()
  })
})

