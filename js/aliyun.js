// //获取元素
// // 左边栏
// // var leftul = document.getElementById('left-tab');
// var leftLists = document.getElementsByClassName('contant-b-b-left-list')
// // 右边栏
// // var uls = document.getElementById('right-tab');
// var rightLists =  document.getElementsByClassName('contant-right-list');
//
// for(var i = 0 ; i< leftLists.length;i++){
//   // var list = leftLists[i];
//   // list.index = i;
//   leftLists[i].onmouseover = leftover;
//   leftLists[i].setAttribute('index',i);
// }
//
// function leftover() {
//
//   // for(var i = 0; i<leftLists.length; i++){
//   //   // leftLists[i].style.display = 'none';
//   //   // rightLists[i].style.display = 'none';
//   // }
//
//   for(var j = 0;j < rightLists.length; j++){
//
//     rightLists[j].className = '';
//   }
//
//   var index = this.getAttribute('index');
//
//   rightLists[index].className = "contant-right-list";
//
// }


// 头部轮播图
$(function () {
  $('.btn-block').click(function () {
  $(this).parent().siblings('.img-one').fadeIn(0).siblings('.img-two').hide();
  })
  $('.btn-none').click(function () {
    $(this).parent().siblings('.img-two').fadeIn(0).siblings('.img-one').hide();
  })
})



// ET大脑tab切换
$(function () {
  
  $('.contant-b-b-left li').mouseenter(function () {
    $(this).addClass('must').siblings().removeClass('must')
    var  index=$(this).index();
    $('.contant-b-right-list .contant-right-list').eq(index).addClass('active').siblings().removeClass('active')
  });
  
  $('.contant-b-b').mouseleave(function () {
    $('.contant-b-right-list li').eq(0).addClass('active').siblings().removeClass('active')
    $('.contant-b-b-left li').eq(0).addClass('must').siblings().removeClass('must')
   
  })
})

// 客户案例切换
$(function () {
  $('.client-banner-float li').click(function () {
    
    $(this).children('p').addClass('client-write').parent().siblings().children('p').removeClass('client-write');
    var index=$(this).index();
    
    $('.client-banner-text .client-banner-block').eq(index).addClass('reveal').siblings().removeClass('reveal')
  })
})
// 后面轮播

$(function () {
  var num = 0;
  
  $('.poster-prev-btn').click(function () {
    num++;
  
    if(num>$('.contant-body-banner li').length-1){
      num=0;
    }
    
    $('.contant-body-banner li').eq(num).fadeIn(1200).siblings().fadeOut();
  })

 
  $('.poster-next-btn').click(function () {
    num--;
    if(num<0){
      num = $('.contant-body-banner li').length-1;
    }
    $('.contant-body-banner li').eq(num).fadeIn(1200).siblings().fadeOut();
  })
})
// 二维码手风琴
$(function () {
  $('.er-title').mouseenter(function () {
    $(this).next('.er-img').show().parent('dd').siblings('dd').children('.er-img').hide()
  })
})
