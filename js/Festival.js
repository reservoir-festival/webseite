$(window).bind('setup', function() {
  loadingScreen();
});

$(document).ready(function(){

  $('.english').each(function() {
    $(this).addClass('display_none');
    $(this).addClass('language_hidden');
  });
      
  setTimeout(function() {
    $('.full_content').css('opacity', '1');
    // $('.loading').css('opacity', '0');
  }, 1000);

  // setTimeout(function() {
  //   $('.loading').css('display', 'none');
  // }, 5000);

  setTimeout(function() {
    $('.slick-slide').each(function() {
      console.log("$(this).find('.card_front').width()");
      $(this).height();
    });
  }, 500);

  $('.pop').each(function() {
    $(this).on('click', function() {
      var target = '#' + $(this).attr('tar');
      console.log('Target' + target);
      $(target).addClass('opened');
      $('.overlay').addClass('visible');
    });
  });
  $('.overlay').on('click', function() {
    $('.opened').removeClass('opened');
    $(this).removeClass('visible');
  });

  var isMobile = false;
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
  }
  setTimeout(function() {

      // loadingScreen();
      logoLoad();
      to_top();
      set_height();
      // cloudmove();
      if(isMobile == false) {
        particles();
      }
      paralax_animation_frontp();
      tweenMaxAnim();
      pdfAnim();
      sliderSetup();
  }, 1000);

  languageSwitch();

});


$( window ).resize(function() {

  var isMobile = false;
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
  }

  to_top();
  set_height();
  // cloudmove();
  if(isMobile == false) {
    particles();
  }
  paralax_animation_frontp();
  tweenMaxAnim();
  sliderSetup();

});

function loadingScreen() {
    var words = ["FESTIVAL", "MUSIC", "ARTISTS", "CREATIVE", "EXPERIMENTAL", "ART", "PROJECTION", "PEOPLE", "BLACK FOREST", "LINACH"];

  window.addEventListener("load", function() {
      var randoms = window.document.getElementsByClassName("randoms");
      for (i = 0; i < randoms.length; i++)
          changeWord(randoms[i]);
  }, false);

  function changeWord(a) {
      a.style.opacity = '0.1';
      a.innerHTML = words[getRandomInt(0, words.length - 1)];
      setTimeout(function() {
          a.style.opacity = '1';
      }, 425);
      setTimeout(function() {
          changeWord(a);
      }, getRandomInt(550, 800));
  }


  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function logoLoad() {
  var one = $("#Stringone");
  var four = $("#Stringfour");
  var six = $("#Stringsix");
  var eight = $("#Stringeight");
  TweenMax.set(one, {y:2000});
  TweenMax.set(four, {y:2000});
  TweenMax.set(six, {y:2000});
  TweenMax.set(eight, {y:2000});

  var two = $("#Stringtwo");
  var three = $("#Stringthree");
  var five = $("#Stringfive");
  var seven = $("#Stringseven");
  TweenMax.set(two, {y:-2000});
  TweenMax.set(three, {y:-2000});
  TweenMax.set(five, {y:-2000});
  TweenMax.set(seven, {y:-2000});

  setTimeout(function() {
    TweenMax.to(one, 2 , {y:0});
    TweenMax.to(two, 2 , {y:0});
    TweenMax.to(three, 2 , {y:0});
    TweenMax.to(four, 2 , {y:0});
    TweenMax.to(five, 2 , {y:0});
    TweenMax.to(six, 2 , {y:0});
    TweenMax.to(seven, 2 , {y:0});
    TweenMax.to(eight, 2 , {y:0});
  }, 3000);
}

function languageSwitch() {
  $('.language').on('click', function() {
    if($('.switch input').prop('checked') == false) {
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

function sliderSetup() {
  $('.slide_container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    waitForAnimate: false,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
          arrows: false,
          dots: true,
        }
      }
    ]
  });
  // $('.slide_container.german').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   centerMode: true,
  //   arrows: true,
  //   prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  //   nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  //   waitForAnimate: false,
  //   touchThreshold: 10,
  //   responsive: [
  //     {
  //       breakpoint: 970,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         infinite: true,
  //         arrows: false,
  //         dots: true,
  //       }
  //     }
  //   ]
  // });
}

function tweenMaxAnim() {

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
    }, 2000)
    setTimeout(function() {
      TweenMax.to(six, 0.5, {opacity:1});
      TweenMax.to(six, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(six, 0.6, {opacity:1});
      }, 80);
    }, 1500)
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
    }, 2000)
    setTimeout(function() {
      TweenMax.to(ImgEight, 0.5, {opacity:1});
      TweenMax.to(ImgEight, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(ImgEight, 0.6, {opacity:1});
      }, 80);
    }, 1500)
    setTimeout(function() {
      TweenMax.to(ImgOne, 0.5, {opacity:1});
      TweenMax.to(ImgOne, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(ImgOne, 0.6, {opacity:1});
      }, 80);
    }, 200)
    setTimeout(function() {
      TweenMax.to(ImgEightB, 0.5, {opacity:1});
      TweenMax.to(ImgEightB, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(ImgEightB, 0.6, {opacity:1});
      }, 80);
    }, 700) 
  }, 3500);
}

function set_height() {
  $(".fade").height($(".sperre").height());
  $(".fade").width($(".sperre").width());

  $("#particles-js").height($("footer").outerHeight()*1.3);
  $("#particles-js").width($("footer").outerWidth());

  setTimeout(function() {
    $('.card').height($('.card').width());
  }, 500);
}

function particles() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "random" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 4},
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3.5,
        random: true,
        speed: 40,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },

     
      line_linked: {
        enable: true,
        distance: 150,
        color: "#777",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: false
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
}

function to_top() {
  $(window).scroll(function(){
        if ($(this).scrollTop() < 200) {
            $('.up') .fadeOut("fast");
        } else {
            $('.up') .fadeIn("fast");
        }
    });
    $('.up').on('click', function(){
        $('html, body').animate({scrollTop:0}, 'fast');
        return false;
    });
}

function paralax_animation_frontp() {
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
      TweenMax.to(".Hintergrund", 1, {x:-tilty*20, y:-tiltx*20, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".back", 1, {x:-tilty*5, y:-tiltx*40, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".front", 1, {x:-tilty*-5, y:-tiltx*20, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".middle", 1, {x:-tilty*0, y:-tiltx*55, rotation:0.05, ease:Power2.easeOut});
    }
    
    window.addEventListener('resize', function(event){
        window.innerWidth / 2;
        window.innerHeight / 2;
    });
}

function cloudmove(){
  var cloudone = $("#cloudone");
  var cloudtwo = $("#cloudtwo");
  var cloudthree = $("#cloudthree");
  var clouds = $(".clouds");
  var cloudtimeline = new TimelineLite( {onComplete:function(){this.restart()}});
  var cloudtimelinetwo = new TimelineLite( {onComplete:function(){this.restart()}});
  var cloudtimelinethree = new TimelineLite( {onComplete:function(){this.restart()}});

  cloudtimeline.to(cloudone, 20, {x:0}).to(cloudone, 80, {x: 2000})
  cloudtimelinetwo.to(cloudtwo, 50, {x:0, y: -200}).to(cloudtwo, 100, {x: 2000});
  cloudtimelinethree.to(cloudthree, 110, {x: 2000});
  cloudtimeline.play();
  cloudtimelinetwo.play();
  cloudtimelinethree.play();
}

function pdfAnim() {
  setTimeout(function() {
    $('.info').css('margin-right', - ($('.german .pdf_container').outerWidth() + 10));
    setTimeout(function() {
      $('.info').css('transition', '1s ease');
    }, 100);
  }, 400);
  $('.pdf').on('click', function() {
    $(this).parent().toggleClass('moved');
  });
  const $menu = $('.info');
  $(document).mouseup(function (e) {
    if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
      $menu.removeClass('moved');
    }
  });
}