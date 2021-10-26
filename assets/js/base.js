// ---
$( document ).ready(function() {
    console.log('ready!');

    // init graphs and charts
    if ($('#magazine').length ) {
      $('#magazine').turn({ acceleration: true});
    }

    $("#nav_audio")[0].load();

     $('.js-play-sound').hover(function(){
        $("#nav_audio")[0].play();
        },
    );

});
// ---


