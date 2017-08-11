var mates = {
  'Mike Ropenis': {
      gender: 'male',
      quote: 'Turns out size matters... That\'s what she said.',
  },
  'Phil o\'Sophical': {
      gender: 'male',
      quote: 'We are what we think.',
  },
  'Dick Insider': {
      gender: 'male',
      quote: 'It was the best of times. It was the worse of times.',
  },
  'Jason Object ': {
      gender: 'male',
      quote: 'Error: invalid JSON;',
  },
  'Eileen Dover': {
      gender: 'female',
      quote: 'I didn\'t find prison that bad.',
  },
  'Hugo First': {
      gender: 'male',
      quote: 'I was never good at track.',
  },
  'Mark Down': {
      gender: 'male',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  'Tom Morrow': {
      gender: 'male',
      quote: 'I have a bright future ahead of me.',
  },
  'Max Width': {
      gender: 'male',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  'Rick Shaw': {
      gender: 'male',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  'Will Power': {
      gender: 'male',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
}

// document.getElementById('name').innerHTML = names[Math.floor(Math.random() * names.length)]
var getRandomMate = function (mates) {
  keys = [];
  for(key in mates) {
    if(mates.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var mate = mates[randomKey];
  mate.name = randomKey;

  return mate;
}

var mate = getRandomMate(mates);

$.ajax({
  url: 'https://randomuser.me/api/?gender=' + mate.gender,
  dataType: 'json',
  success: function(data) {
    var randomUser = data.results[0];
    $('#name').text(mate.name);
    $('#photo').css('background-image', 'url(' + randomUser.picture.large + ')');

    if (mate.quote) {
      $('#quote').text(mate.quote);
    }

    $('#mate').fadeIn();
  }
});