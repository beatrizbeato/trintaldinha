// ---
$( document ).ready(function() {

  $( ".js-start-button").click(function() {
      $(".o-start").addClass('u-hidden');
      $(".landing-body").removeClass('u-no-scroll');
  });

  $("#hero-audio")[0].load();
  $("#dresscode-audio")[0].load();
  $("#map-audio")[0].load();
  $("#dormidas-audio")[0].load();


  function playAudio(element) {
    element.play();
    element.animate({volume: 1}, 1000);
  }

  function pauseAudio(element) {
    element.animate({volume: 0}, 1000);
    element.pause();
  }

  // play

  $( ".js-play-hero-audio").mouseenter(function() {
      var selectedAudio = $("#hero-audio")[0]
      playAudio(selectedAudio)
  });

   $( ".js-play-rsvp-audio").mouseenter(function() {
      var selectedAudio = $("#rsvp-audio")[0]
      playAudio(selectedAudio)
  });

  $( ".js-play-dresscode-audio").mouseenter(function() {
      var selectedAudio = $("#dresscode-audio")[0]
      playAudio(selectedAudio)
  });

  $( ".js-play-map-audio" ).mouseenter(function() {
      var selectedAudio = $("#map-audio")[0]
      playAudio(selectedAudio)
  });

  $( ".js-play-map-btn-audio" ).mouseenter(function() {
      var selectedAudio = $("#map-audio")[0]
      playAudio(selectedAudio)
  });


  $( ".js-play-dormidas-audio" ).mouseenter(function() {
      var selectedAudio = $("#dormidas-audio")[0]
      playAudio(selectedAudio)
  });

  // pause


  $( ".js-play-hero-audio").mouseleave(function() {
      var selectedAudio = $("#hero-audio")[0]
      pauseAudio(selectedAudio)
  });

   $( ".js-play-rsvp-audio").mouseleave(function() {
      var selectedAudio = $("#rsvp-audio")[0]
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

  $( ".js-play-map-btn-audio" ).mouseleave(function() {
      var selectedAudio = $("#map-audio")[0]
      pauseAudio(selectedAudio)
  });

  $( ".js-play-dormidas-audio" ).mouseleave(function() {
      var selectedAudio = $("#dormidas-audio")[0]
      pauseAudio(selectedAudio)
  });

  //mobile
     document.getElementsByClassName('js-play-hero-audio')[0].addEventListener('touchstart', function(e){
      var selectedAudio = $("#hero-audio")[0]
      playAudio(selectedAudio)
    }, false)
 
    document.getElementsByClassName('js-play-hero-audio')[0].addEventListener('touchend', function(e){
      var selectedAudio = $("#hero-audio")[0]
      pauseAudio(selectedAudio)
    }, false)


     document.getElementsByClassName('js-play-map-audio')[0].addEventListener('touchstart', function(e){
      var selectedAudio = $("#map-audio")[0]
      playAudio(selectedAudio)
    }, false)
 
    document.getElementsByClassName('js-play-map-audio')[0].addEventListener('touchend', function(e){
      var selectedAudio = $("#map-audio")[0]
      pauseAudio(selectedAudio)
    }, false)

    document.getElementsByClassName('js-play-dormidas-audio')[0].addEventListener('touchstart', function(e){
      var selectedAudio = $("#dormidas-audio")[0]
      playAudio(selectedAudio)
    }, false)
 
    document.getElementsByClassName('js-play-dormidas-audio')[0].addEventListener('touchend', function(e){
      var selectedAudio = $("#dormidas-audio")[0]
      pauseAudio(selectedAudio)
    }, false)


});
// ---


