// ---
$( document ).ready(function() {

  // init graphs and charts
  var flipbookEL = document.getElementById('magazine');
  window.addEventListener('resize', function (e) {
    flipbookEL.style.width = '';
    flipbookEL.style.height = '';
    $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
  });
  $(flipbookEL).turn();

});
// ---


