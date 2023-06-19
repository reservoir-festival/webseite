let menuOpend = false;

const fancyColors = [0x6556a5, 0xf69b70, 0xe83c96, 0x4cb749, 0xf36c33, 0x5db5a3, 0x597b4c, 0xcf6b39, 0xf6ef76, 0xa7d6f3, 0x73bf44, 0xdf57a0, 0xe6a323, 0xf1e911, 0xb29da2, 0x40b9ea, 0xee9936, 0xab8533, 0x288b3e, 0x243d96, 0xea8125, 0x70bf44, 0xa36dae, 0xd9e13f, 0x72471c, 0xe05962, 0xe41e25, 0x882471, 0x131111, 0x1f1b1c];

$(document).ready(function(){
  $('.english').each(function() {
    $(this).addClass('display_none');
    $(this).addClass('language_hidden');
  });
      
  $('.pop').each(function() {
    $(this).on('click', function() {
      var target = '#' + $(this).attr('tar');
      $(target).addClass('opened');
      $('.overlay').addClass('visible');
    });
  });

  $('.overlay').on('click', function() {
    $('.opened').removeClass('opened');
    $(this).removeClass('visible');
  });

  $('.ticket_popup_close').on('click', function() {
    $('.opened').removeClass('opened');
    $('.overlay').removeClass('visible');
  });

  setTimeout(function() {
      startLogoAnim();
      initToTop();
      setHeight();
      startParalaxAnim();
      startTweenMaxAnim();
      startTicketAnim();
  }, 1000);

  languageSwitch();
});


$(window).resize(function() {
  initToTop();
  setHeight();
  //startParalaxAnim();
  startTweenMaxAnim();
});

function startLogoAnim() {
  var one = $("#Stringone");
  var four = $("#Stringfour");
  var six = $("#Stringsix");
  var eight = $("#Stringeight");
  var two = $("#Stringtwo");
  var three = $("#Stringthree");
  var five = $("#Stringfive");
  var seven = $("#Stringseven");

  // TweenMax.set(one, {y:2000});
  // TweenMax.set(four, {y:2000});
  // TweenMax.set(six, {y:2000});
  // TweenMax.set(eight, {y:2000});

  // TweenMax.set(two, {y:-2000});
  // TweenMax.set(three, {y:-2000});
  // TweenMax.set(five, {y:-2000});
  // TweenMax.set(seven, {y:-2000});

  setTimeout(function() {
    TweenMax.to(one, 2 , {y:0});
    TweenMax.to(two, 2 , {y:0});
    TweenMax.to(three, 2 , {y:0});
    TweenMax.to(four, 2 , {y:0});
    TweenMax.to(five, 2 , {y:0});
    TweenMax.to(six, 2 , {y:0});
    TweenMax.to(seven, 2 , {y:0});
    TweenMax.to(eight, 2 , {y:0});
  }, 1000);
}

function languageSwitch() {
  $('.language_switch').on('click', function() {
    if($('.switch input').prop('checked') === false) {
      $('.german').each(function() {
        $(this).removeClass('display_none');
        $(this).removeClass('language_hidden');
      });
      $('.english').each(function() {
        $(this).addClass('language_hidden');
        $(this).addClass('display_none');
      });
    }else {
      $('.german').each(function() {
        $(this).addClass('language_hidden');
        $(this).addClass('display_none');
      });
      $('.english').each(function() {
        $(this).removeClass('display_none');
        $(this).removeClass('language_hidden');
      });
    }
  });

  $('.germany').on('click', function() {
    $(".switch input").prop('checked', false); 
  });
  $('.america').on('click', function() {
    $(".switch input").prop('checked', true); 
  });
}

function startTweenMaxAnim() {
  var one = $("#Stringone");
  var four = $("#Stringfour");
  var six = $("#Stringsix");
  var eight = $("#Stringeight");

  var two = $("#Stringtwo");
  var three = $("#Stringthree");
  var five = $("#Stringfive");
  var seven = $("#Stringseven");

  setInterval(function() {
    TweenMax.to(one, 0.5, {opacity:1});
    TweenMax.to(one, 0.3, {opacity:0.2});
    setTimeout(function() {
      TweenMax.to(one, 0.6, {opacity:1});
    }, 80);
    setTimeout(function() {
        TweenMax.to(five, 0.5, {opacity:1});
        TweenMax.to(five, 0.3, {opacity:0.2});
        setTimeout(function() {
          TweenMax.to(five, 0.6, {opacity:1});
        }, 80);
    }, 2000);
    setTimeout(function() {
      TweenMax.to(six, 0.5, {opacity:1});
      TweenMax.to(six, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(six, 0.6, {opacity:1});
      }, 80);
    }, 1500);
  }, 3500);

  var ImgSeven = $("#sSeven");
  var ImgFive = $("#sFive");
  var ImgEight = $("#sEight");
  var ImgOne = $("#sOneB");
  var ImgEightB = $("#sEightB");
  setInterval(function() {
    TweenMax.to(ImgSeven, 0.5, {opacity:1});
    TweenMax.to(ImgSeven, 0.3, {opacity:0.2});
    setTimeout(function() {
      TweenMax.to(ImgSeven, 0.6, {opacity:1});
    }, 80);
    setTimeout(function() {
        TweenMax.to(ImgFive, 0.5, {opacity:1});
        TweenMax.to(ImgFive, 0.3, {opacity:0.2});
        setTimeout(function() {
          TweenMax.to(ImgFive, 0.6, {opacity:1});
        }, 80);
    }, 2000);
    setTimeout(function() {
      TweenMax.to(ImgEight, 0.5, {opacity:1});
      TweenMax.to(ImgEight, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(ImgEight, 0.6, {opacity:1});
      }, 80);
    }, 1500);
    setTimeout(function() {
      TweenMax.to(ImgOne, 0.5, {opacity:1});
      TweenMax.to(ImgOne, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(ImgOne, 0.6, {opacity:1});
      }, 80);
    }, 200);
    setTimeout(function() {
      TweenMax.to(ImgEightB, 0.5, {opacity:1});
      TweenMax.to(ImgEightB, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(ImgEightB, 0.6, {opacity:1});
      }, 80);
    }, 700);
  }, 3500);
}

function setHeight() {
  $(".fade").height($(".sperre").height());
  $(".fade").width($(".sperre").width());

  setTimeout(function() {
    $('.card').height($('.card').width());
  }, 500);
}

function initToTop() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 200) {
      $('.up').fadeOut("fast");
    } else {
      $('.up').fadeIn("fast");
    }
  });
  $('.up').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    return false;
  });
}

function startParalaxAnim() {
    let request = null;
    let mouse = { x: 0, y: 0 };
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    
    document.querySelector('body').addEventListener('mousemove', function(event) {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
        cancelAnimationFrame(request);
        request = requestAnimationFrame(update);
    });
    
    function update() {
      dx = mouse.x - cx;
      dy = mouse.y - cy;
      let tiltx = (dy / cy );
      let tilty = - (dx / cx);

      // TweenMax.to(".logo", 1, {x:tilty*30, y:tiltx*30, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".Hintergrund", 1, {x:-tilty*0, y:-tiltx*20, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".back", 1, {x:-tilty*0, y:-tiltx*40, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".front", 1, {x:-tilty*0, y:-tiltx*20, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".middle", 1, {x:-tilty*0, y:-tiltx*55, rotation:0.05, ease:Power2.easeOut});
    }
    // window.addEventListener('resize', function(event){
    //     window.innerWidth / 2;
    //     window.innerHeight / 2;
    // });
}

function startTicketAnim() {
  setInterval(function() {
    const bgColor = fancyColors[Math.floor(fancyColors.length * Math.random())];
    const bgColorStr = '#' + bgColor.toString(16);
    const r = Math.floor(bgColor / 65536);
    const g = Math.floor((bgColor % 65536) / 256);
    const b = Math.floor(bgColor % 255);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
    const colorStr = (luminance >= 140) ? '#000' : '#fff';
    $('.ticket_banner').css('background-color', bgColorStr);
    $('.ticket_banner').css('color', colorStr);
  }, 1000);
}
