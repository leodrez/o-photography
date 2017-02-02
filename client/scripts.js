var showModal = function(imgSrc) {
  $('#modalImage').attr('src', imgSrc);
  $( '#myModal3' ).modal('show');
}

var hideModal = function() {
  $('#myModal3').modal('hide');
}
