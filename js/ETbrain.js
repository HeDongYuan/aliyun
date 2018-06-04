//ET大脑
$(function () {
  var gototop = new ToTop(100);
  gototop.start();
  
  $('.allnav').mouseenter(function() {
    $(this).css('backgroundColor','#00c1de')
    $('.celan').stop().fadeIn(500);
  });
  $('.allnav').mouseleave(function() {
    $(this).css('backgroundColor','');
    $('.celan').stop().fadeOut();
  });
  
  $('.celan div').mouseenter(function() {
    $(this).children('.celan1').stop().fadeIn();
  });
  $('.celan div').mouseleave(function() {
    $(this).children('.celan1').stop().fadeOut();
  });
  
  $('.celan1 div').mouseenter(function() {
    $(this).children('.celan2').stop().fadeIn(500);
    $(this).children('.celan3').stop().fadeIn(500);
  });
  $('.celan1 div').mouseleave(function() {
    $(this).children('.celan2').stop().fadeOut(10);
    $(this).children('.celan3').stop().fadeOut(10);
  });
  
  $('.navbar a').mouseenter(function() {
    $(this).css('color','#00c1de');
  });
  $('.navbar a').mouseleave(function() {
    $(this).css('color','#fff')
  });
  
  
  
  
  $('.navbar a').mouseenter(function() {
    $('.xiala').css('display', 'none');
    $('.heng').stop().css('display', 'none');
    $(this).siblings('.heng').stop().show(500);
    $(this).siblings('.xiala').stop().fadeIn(500)
  });
  $('.navbar').mouseleave(function() {
    $('.xiala').css('display', 'none');
    $('.heng').css('display', 'none');
    $(this).siblings('.xiala').stop().fadeOut(500)
  });
  
  
  $('.hehe').mouseenter(function() {
    $('.hehe').css('backgroundColor', '#363c40');
  });
  $('.hehe').mouseleave(function() {
    $('.hehe').css('backgroundColor', '');
  });
  
  
  $('.dong').mouseenter(function() {
    clearInterval(this.s);
    clearInterval(this.b);
    this.b = setInterval(function() {
      var current = parseInt($(this).position().top);
      if (current <= -1300) {
        clearInterval(this.s);
        return;
      }
      current = current - 100;
      $(this).css('top', current);
    }.bind(this), 50);
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
      
      current = current + 100;
      $(this).css('top', current);
    }.bind(this), 50);
  });
  
  
  
  $(function() {
    $('.wu>img').mouseenter(function () {
      $(this).attr('src', 'images/long/aaaa.png')
    });
    $('.wu>img').mouseleave(function () {
      $(this).attr('src', 'images/long/TB1UxHFh3DD8KJjy0FdXXcjvXXa-80-92.png')
    });
    
    $('.sw').on('click', 'img', function () {
      $('.sw .box').css('display', 'none');
      $(this).parents('.sw').stop().animate({width: 1615}, 500).siblings().stop().animate({width: 95}, 500);
      $('.box-s').fadeIn(1500);
      $(this).parents().siblings('.box-s').css('display', 'none');
      $(this).parents().siblings('.box-b').fadeIn(3000);
      index = $(this).attr('index');
      $(".content > img").css('display', 'none');
      $(".content > img")[index].style.display = "block";
      console.log($(".content > img"))
      console.log($(".content > img")[index]);
    })
    
    $('.sw').on('click', '.box-s', function () {
      $(this).parents('.sw').stop().animate({width: 1615}, 500).siblings().stop().animate({width: 95}, 500);
      $('.box-s').css('display', 'block');
      $(this).css('display', 'none');
      $('.box-b').css('display', 'none');
      $(this).siblings('.box-b').css('display', 'block');
      index = $(this).attr('index');
      console.log(index);
      $(".content > img").css('display', 'none');
      $(".content > img")[index].style.display = "block";
      
    });
    
    $('.off').mouseenter(function () {
      $(this).attr('src', 'images/long/bbb.png')
    });
    $('.off').mouseleave(function () {
      $(this).attr('src', 'images/long/bb.png')
    });
    
    $('.off').click(function () {
      $('.sw').stop().animate({width: 475}, 500);
      $('.box-s').css('display', 'none');
      $('.box-b').css('display', 'none');
      $('.box').css('display', 'block');
      
      return false;
    })
    
    
  })
})

