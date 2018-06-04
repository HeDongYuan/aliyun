$(function () {
  $(window).load(function () {
    $('#featured').orbit();
  });
  
  /*中国站效果*/
  $('.china-up,.site-switch-ul').hide();
  $('.site-switch').toggle(
    function () {
      $(this).css('background-color', '#272b2f');
      $(".site-switch-ul").slideDown();
      $('.china-down').hide();
      $('.china-up').show();
    },
    function () {
      $(this).css('background-color', '#373d41');
      $(".site-switch-ul").slideUp();
      $('.china-down').show();
      $('.china-up').hide();
    }
  );
  /*发布定制需求*/
  $('.icon-jiantou,.witkey-pop').hide();
  $('.release').hover(
    function () {
      $(".witkey-pop").stop().slideToggle();
      $('.fb-up').toggle();
      $('.fb-down').toggle();
    }/*,
     function () {
     $(".witkey-pop").slideUp();
     $('.fb-up').hide();
     $('.fb-down').show();
     }*/
  );
  
  /*banner 下右侧 新闻播放按钮*/
  $('.actives').hide();
  $('.video-img').hover(function () {
    $(".video-imgs").hide();
    $('.actives').show();
  }, function () {
    $(".video-imgs").show();
    $('.actives').hide();
  });
  
  /*视频播放*/
  $('.video-box').hide();
  $('.video-img').click(function () {
    $('.video-box').show();
    var video = $('video.embed-responsive-item');
    video[0].play(); // play() 和 pause() 是HTML5中video自带的API函数
  })
  $('.video-x').click(function () {
    $('.video-box').hide();
    var video = $('video.embed-responsive-item');
    video[0].pause();
  });
  
  /*点击回到顶部*/
  $('.scoll-top').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $('.scoll-top').show();
    } else {
      $('.scoll-top').hide();
    }
  });
  //2-点击小火贱 ，让页面滚动到顶部
  $('.scoll-top').click(function () {
    //注意点：动画绑定给html和body
    $('html,body').animate({'scrollTop': 0}, 500)
  });
  
  /*需求类型下拉列表*/
  $('.nbc-cont-ul,.nbc-tit-clicks').hide();
  $('.nbc-cont-tit').toggle(
    function () {
      $(".nbc-cont-ul").slideDown();
      $('.nbc-tit-click').hide();
      $('.nbc-tit-clicks').show();
    },
    function () {
      $(".nbc-cont-ul").slideUp();
      $('.nbc-tit-click').show();
      $('.nbc-tit-clicks').hide();
    }
  );
  
})