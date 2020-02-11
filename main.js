function reset() {
  $('.card').remove();
  var preNum = '';
  for (var i = 0; i < 210; i++) {
    var rand = ~~(Math.random() * 10);
	while(preNum == rand){
		rand = ~~(Math.random() * 10);
	}
	preNum = rand;
    var element = '<div class="card" style="background-color: purple;" id=itemNumber' + i + '>' + `<img class="number number${rand}">` + '</div>';

    $('#cardList').append(element);
  }
  $('.card').first().css('margin-left', -1000);
}

function openCase() {
  reset();
  var rand = random(1000, 20000);
  var childNumber = Math.floor(rand / 100) + 4;
  var timings = ["easeInOutBack", "easeOutExpo", "easeInOutBounce", "easeOutQuad", "swing", "easeOutElastic", "easeInOutElastic"];
  var timing = timings[random(0, timings.length)];

  $('.card').first().animate({
    marginLeft: -rand
  }, 10000, timing, function () {

    var src = $('#itemNumber' + childNumber + ' img').attr('class');
    $('#itemNumber' + childNumber).css({ background: "linear-gradient(#00bf09, #246b27)" });

    $('#dialog-msg').html(`<div class="card" style="background-color: purple;" id=itemNumber' + i + '>'<img class="${src}"></div>`);

    $('#dialog').dialog({
      modal: true,
      resizeable: false,
      draggable: false,
      width: 400,
    });
  });
}

function random(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}