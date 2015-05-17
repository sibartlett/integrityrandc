$(function() {
  $(document).on('click','.navbar-collapse.in',function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });
  $("#more-testimonials").on("shown.bs.collapse", function () {
    $('#more-testimonials-btn').text('Show less testimonials').blur();
    $('html, body').animate({
        scrollTop: $(this).offset().top - 70
    }, 400);
  });
  $("#more-testimonials").on("hidden.bs.collapse", function () {
    $('#more-testimonials-btn').text('Show more testimonials').blur();
  });
});
