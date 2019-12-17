'use strict';

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.contact-show-email').click(function() {
    var el = $(this);
    var btn = el.find('button');
    var mail = JSON.parse(el.find('.hidden').html());

    mail = mail.reverse().join("").replace(/\|/g, ".").replace(/!/g, "@");
    el.attr("href", "mailto:"+mail)
    btn.replaceWith(mail);
    el.unbind("click");

    return false;
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

  if ($(window).width() >= 768) {
    $(".parallax").each(function(_, el) {
      $(el).parallax("50%", 0.5);
    });
  }

  if ($('.trianglify .background').length) {
    var pattern = Trianglify({
      height: $('.trianglify').height()+250,
      width: $('.trianglify').width()+150,
      variance: 0.5,
      seed: window.location.href,
      cell_size: 60});

    $('.trianglify .background').append(pattern.canvas());
  }

  if ($('.particles .background').length) {
    $('.particles .background').attr("id", "particles-js");
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": $(window).width() / 1440 * 180,
            "density": {
              "enable": false,
              "value_area": 100
            }
          },
          "color": {
            "value": "#666666"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#666666"
            },
          },
          "opacity": {
            "value": 0.4,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#cccccc",
            "opacity": 0.35,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "push": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    );
  }
});
