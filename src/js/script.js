$(function() {
  $(document).on('click','.navbar-collapse.in',function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });
  $("#more_testimonials").on("shown.bs.collapse", function () {
    $('#more_testimonials_btn').text('Show less testimonials').blur();
    $('html, body').animate({
        scrollTop: $(this).offset().top - 70
    }, 400);
  });
  $("#more_testimonials").on("hidden.bs.collapse", function () {
    $('#more_testimonials_btn').text('Show more testimonials').blur();
  });
});
