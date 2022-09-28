$(document).ready(function() {
  $('.mobile-nav').on('click', function(){
    $('.navigation').toggleClass('show');
    $('.mobile-nav').html(function(i, label){
      return label === 'Navigate to...' ? '&times; Close Menu' : 'Navigate to...'
    });
    $("body").toggleClass("prevent-scroll-mobile");
    $("header.main-header").toggleClass("header-prevent-hide");
  });
});
