jQuery( document ).ready(function($) {

    // Preloader
    $(window).on('load', function () {
        $('#preloader').fadeOut(1000); 
       });
     
    // Nice Select Plugin
//     $('select').niceSelect();

    $('a.next').text('→');
    $('a.prev').text('←');
    $('a.tutor-next-link').text('→');
    $('a.tutor-previous-link').text('←');


    $('.tutor-courses-loop-wrap .tutor-loop-course-container .tutor-single-course-author-name').find("a").contents().unwrap().wrap("<span/>");
    $('.tutor-courses-loop-wrap .tutor-loop-course-container .tutor-single-course-avatar').find("a").contents("img").unwrap().wrap("<span/>");
    $('.bdt-tutor-loop-course-container .bdt-tutor-loop-author .bdt-tutor-single-course-author-name').find("a").contents().unwrap().wrap("<span/>");
    $('.bdt-tutor-loop-course-container .bdt-tutor-loop-author .bdt-tutor-single-course-avatar').find("a").contents("img").unwrap().wrap("<span/>");
    $('.woocommerce ul.products li.product').find("a.woocommerce-LoopProduct-link.woocommerce-loop-product__link").contents("img").wrap("<div class='product-grid-img'/>");

  if (window.location.href.indexOf("home") > -1) {
      $('body').addClass('home_not_set');
    }
  $('a[target="_blank"]').removeAttr('target');
});
