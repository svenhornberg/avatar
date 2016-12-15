function update() {
  const sexVal = Cookies.get('sex');
  const sizeVal = Cookies.get('size');

  switch (sexVal) {

    case 'm':
      $('#outfitmale').removeClass('is-hidden');
      $('#outfitfemale').addClass('is-hidden');
      switch (sizeVal) {
        case 's':
          $('#mainpic').attr('src', '/img/figuren_s_m.jpg');
          break;
        case 'm':
          $('#mainpic').attr('src', '/img/figuren_m_m.jpg');
          break;
        case 'l':
          $('#mainpic').attr('src', '/img/figuren_l_m.jpg');
          break;

        default:
          $('#mainpic').attr('src', '/img/figuren_m_m.jpg');
          break;
      }
      break;

    case 'f':
      $('#outfitmale').addClass('is-hidden');
      $('#outfitfemale').removeClass('is-hidden');
      switch (sizeVal) {
        case 's':
          $('#mainpic').attr('src', '/img/figuren_s.jpg');
          break;
        case 'm':
          $('#mainpic').attr('src', '/img/figuren_m.jpg');
          break;
        case 'l':
          $('#mainpic').attr('src', '/img/figuren_l.jpg');
          break;

        default:
          $('#mainpic').attr('src', '/img/figuren_m.jpg');
          break;
      }
      break;

    default:
      $('#mainpic').attr('src', '/img/figuren_m.jpg');
      break;
  }
  Cookies.set('outfit', 'off');
}

$(document).ready(() => {
  update();
  $('#slider').slider();
  setTimeout(() => {
    $('#thankslogo').attr('src', '/img/witt_thanks.png');
  }, 1200);
  $('.drag').draggable();
  $('.drag').click(() => {
    $('.drag').css('height', '250px');
    $('.drag').css('width', '250px');
    $('.drag').find('img').css('height', '250px');
    $('.drag').find('img').css('width', '250px');
  });
});

function outfit(val) {
  $('#mainpic').attr('src', '/img/outfit' + val + '.jpg');
  Cookies.set('outfit', 'on');
}

function outfitm(val) {
  $('#mainpic').attr('src', '/img/outfit' + val + '_m.jpg');
  Cookies.set('outfit', 'on');
}

function male() {
  Cookies.set('sex', 'm');
  update();
}

function female() {
  Cookies.set('sex', 'f');
  update();
}

function size(val) {
  Cookies.set('size', val);
  console.log(val);
  update();
}
