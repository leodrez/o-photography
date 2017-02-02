var showModal = function(imgSrc) {
  $('#modalImage').attr('src', imgSrc);
  $( '#myModal3' ).modal('show');
}

var hideModal = function() {
  $('#myModal3').modal('hide');
}

window.sr = ScrollReveal({ reset: true });
  sr.reveal('.row1', { duration: 2000 });
  sr.reveal('.row2', { duration: 2000 });
  sr.reveal('.row3', { duration: 2000 });
  sr.reveal('.row4', { duration: 2000 });
  sr.reveal('.row5', { duration: 2000 });
  sr.reveal('.row6', { duration: 2000 });
  sr.reveal('.row7', { duration: 2000 });
  sr.reveal('.row8', { duration: 2000 });
  sr.reveal('.foot', { duration: 2000 });
