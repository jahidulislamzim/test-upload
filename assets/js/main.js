(function($) {

/*Google Map Style*/
var CustomMapStyles  = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});

// preloader preloader preloader vpreloader
if($('#preloader').length){	
$('#status').fadeOut(); // will first fade out the loading animation 
$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
$('body').delay(350).css({'overflow':'visible'});
}


//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};


//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    // openEffect  : 'none',
    // closeEffect : 'none'
  });

}





if($('.scrollto').length){
$('.scrollto').on('click', function(e){
  e.preventDefault();
  var togo = $(this).data('to');
  goToByScroll(togo, 0);
});

function goToByScroll(id, offset){
  if(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate(
        {scrollTop: $(id).offset().top - offset},
      500);
  }
}

}





/*
-----------------------
Start input type file picker ->> 
-----------------------
*/
$('input, textarea').focus(function(){
  $(this).keyup(function(){
    var val = $(this).val();
    if( val.length > 0 ){
      $(this).attr('data-empty', 'false');
    }else{
      $(this).attr('data-empty', 'true');
    }
    //console.log(val.length);
  });
});


/**
Responsive on 767px
*/
$(window).scroll(function() {    // this will work when your window scrolled.
  var height = $(window).scrollTop();  //getting the scrolling height of window

  if(height  > 450) {
    $(".stiky-header").addClass('fixed-header');  
    // $(".balance").addClass('height70');ss
  } else{
    // $(".balance").removeClass('height70');
    $(".stiky-header").removeClass('fixed-header');
  }  

});
// if (windowWidth <= 767) 
var windowWidth = $(window).width();
if (windowWidth <= 991) {
  $('.main-nav .nav-openner .opn-innr').on('click', function(){
    $(this).toggleClass('menu-expend');
    $(this).parents('.hdr-rgt').find('.main-nav ul').slideToggle(500);
  });
  // $('#branding .opener-inner').on('click', function(){
  //   $(this).toggleClass('menu-expend');
  //   $('#branding nav.main-nav > ul').slideToggle(500);
  // });

  // $('nav.main-nav li.menu-item-has-children > a').on('click', function(e){
  //   e.preventDefault();
  //   $('.main-nav').toggleClass("color-changes-mobile");
  //   $(this).toggleClass('menu-expend-sub');
  //   $(this).parent().find('.sub-menu').slideToggle(500);
  // });
}


$('li.menu-item-has-children > a').on('click',function(){
  $(this).parent().find('ul.sub-menu').slideToggle(300);
  $(this).parent().siblings().find('ul.sub-menu').slideUp();
  $(this).parent().siblings().find('.active-class').removeClass('active-class');
  $(this).toggleClass('active-class');
})


// hllllllll


// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover
//onepagenav//
if( $('#nav').length ){

$('#nav').onePageNav();

}

if( $('#bnr-nav').length ){

$('#bnr-nav').onePageNav({
  currentClass: 'current',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',

});
}


  // var sidebar = new StickySidebar('.sidebar', {
  //   topSpacing: 20,
  //   bottomSpacing: 20,
  //   containerSelector: '.main-content',
  //   innerWrapperSelector: '.sidebar__inner'
  // });

// if( $('#main-content').length ){
  //   var sidebar = new StickySidebar('#sidebar', {
  //       containerSelector: '#main-content',
  //       innerWrapperSelector: '.sidebar__inner',
  //       topSpacing: 100,
  //       bottomSpacing: 20
  //   });
  // }
if (windowWidth > 767) {
  if( $('#main-content').length ){
     var stickySidebar = new StickySidebar('#sidebar', {
    topSpacing: 0,
    bottomSpacing: 0,
    containerSelector: false,
    innerWrapperSelector: '.sidebar__inner',
    resizeSensor: true,
    stickyClass: 'is-affixed',
    minWidth: 0
});
}
}
/**
Slick slider
*/
if( $('.bnrSlider').length ){
    $('.bnrSlider').slick({
      dots: true,
      infinite: true,
      autoplay:true,
      autoplaySpeed: 1000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      // fade: true,
        cssEase: 'linear',arrows:false,
    });
}

if( $('.latestSlider').length ){
    $('.latestSlider').slick({
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 700,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}
// $('.default_header .search').click(function(){
// $('.default_header .form_box_wraper').slideDown();  
// });

// $('.default_header .cross_on_click').click(function(){

// $('.default_header .form_box_wraper').slideUp();

// });


$('.cross-hdr .src-bx').click(function(){
$('.cross-hdr .src-bx-hvr').slideDown();  
});
$('.cross-hdr .humburgur-button-main').click(function(){
$('.cross-hdr .src-bx-hvr').slideUp();
});


$('.counter').counterUp({
    delay: 100,
    time: 9000
});


//to-scrool-top-btn//

if( $('#to-top-btn').length ){
  // $(window).scroll(function(){
  // if ($(this).scrollTop() > 100) {
  //   $("#to-top-btn").addClass('slow');
  // }else{
  //   $("#to-top-btn").removeClass('slow');
  // }
  // });
    $("#to-top-btn").click(function(){
    $('html ,body').animate({scrollTop : 0},1000);
  });
} 
// if( $('#bnr-scrool-btn').length ){
//   // $(window).scroll(function(){
//   // if ($(this).scrollTop() > 100) {
//   //   $("#to-top-btn").addClass('slow');
//   // }else{
//   //   $("#to-top-btn").removeClass('slow');
//   // }
//   // });
//     $("#bnr-scrool-btn").click(function(){
//     $('html ,body').animate({scrollTop : 0},1000);
//   });
// } 
if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        icon:'map.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}



/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

    new WOW().init();

})





(jQuery);
