// ---
$( document ).ready(function() {

  // init graphs and charts
  if ($('#magazine').length ) {
    var flipbookEL = document.getElementById('magazine');
    window.addEventListener('resize', function (e) {
      flipbookEL.style.width = '';
      flipbookEL.style.height = '';
      $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
    });
    $(flipbookEL).turn();
  }

  $( ".js-start-button").click(function() {
      $(".o-start").addClass('u-hidden');
      $("body").removeClass('u-no-scroll');
  });

  if ($('#hero-audio').length ) {
    $("#hero-audio")[0].load();
    $("#dresscode-audio")[0].load();
    $("#map-audio")[0].load();
    $("#dormidas-audio")[0].load();
  }

  function playAudio(element) {
    element.play();
    element.animate({volume: 1}, 1000);
  }

  function pauseAudio(element) {
    element.animate({volume: 0}, 1000);
    element.pause();
  }

  $( ".js-play-hero-audio").mouseenter(function() {
      var selectedAudio = $("#hero-audio")[0]
      playAudio(selectedAudio)
  });

  $( ".js-play-dresscode-audio" ).mouseenter(function() {
      var selectedAudio = $("#dresscode-audio")[0]
      playAudio(selectedAudio)
  });

  $( ".js-play-map-audio" ).mouseenter(function() {
      var selectedAudio = $("#map-audio")[0]
      playAudio(selectedAudio)
  });

  $( ".js-play-dormidas-audio" ).mouseenter(function() {
      var selectedAudio = $("#dormidas-audio")[0]
      playAudio(selectedAudio)
  });

  $( ".js-play-hero-audio").mouseleave(function() {
      var selectedAudio = $("#hero-audio")[0]
      pauseAudio(selectedAudio)
  });

  $( ".js-play-dresscode-audio" ).mouseleave(function() {
      var selectedAudio = $("#dresscode-audio")[0]
      pauseAudio(selectedAudio)
  });

  $( ".js-play-map-audio" ).mouseleave(function() {
      var selectedAudio = $("#map-audio")[0]
      pauseAudio(selectedAudio)
  });

  $( ".js-play-dormidas-audio" ).mouseleave(function() {
      var selectedAudio = $("#dormidas-audio")[0]
      pauseAudio(selectedAudio)
  });


});
// ---


