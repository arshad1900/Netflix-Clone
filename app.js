document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.featured-button','.featured-button-2');
  button.addEventListener('click', function() {
    window.location.href = 'movies.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const button2 = document.querySelector('.featured-button-2');
  button2.addEventListener('click', function() {
    window.location.href = 'movies.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const signin = document.querySelector('.signin');
  signin.addEventListener('click', function() {
    window.location.href = 'signin.html';
  });
});
