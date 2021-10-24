// ---
$( document ).ready(function() {
    console.log('ready!');


    function disableScroll(){
      console.log('finalmente!')
    }

    disableScroll();


     $('.js-play-sound').hover(function(){
      console.log('fale')
        $("#nav_audio")[0].play();
        },
    function(){
        $("#nav_audio")[0].load();
    });

   


});
// ---


