// ---
$( document ).ready(function() {
    console.log('ready!');

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

    $("#nav_audio")[0].load();

     $('.js-play-sound').hover(function(){
        $("#nav_audio")[0].play();
        },
    );

});
// ---


