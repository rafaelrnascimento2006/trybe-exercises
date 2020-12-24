window.onload = function() {
  changeBackgroundColor();
  changeTextColor();
  changeFontSize();
  changeLineHeight();
  changeFontFamily();
};

function changeBackgroundColor () {
  const backgroundColorButtons = document.querySelectorAll('#background-color>button');
  const textContainer = document.querySelector('.text');

  for (let button of backgroundColorButtons) {
      button.addEventListener('click', function(event){
        textContainer.style.backgroundColor = event.target.innerHTML
      });
    };
};

function changeTextColor() {
  const textColorButtons = document.querySelectorAll('#text-color>button');
  const text = document.querySelectorAll('.text-paragraph');

  for (let button of textColorButtons) {
      button.addEventListener('click', function(event){
        for (let paragraph of text) {
          paragraph.style.color = event.target.innerHTML
      };
    });
  };
};

function changeFontSize() {
  const fontSizeButtons = document.querySelectorAll('#font-size>button');
  const text = document.querySelectorAll('.text-paragraph');

  for (let button of fontSizeButtons) {
      button.addEventListener('click', function(event){
        for (let paragraph of text) {
          paragraph.style.fontSize = event.target.innerHTML
      };
    });
  };
};

function changeLineHeight() {
  const lineHeightButtons = document.querySelectorAll('#line-height>button');
  const text = document.querySelectorAll('.text-paragraph');

  for (let button of lineHeightButtons) {
      button.addEventListener('click', function(event){
        for (let paragraph of text) {
          paragraph.style.lineHeight = event.target.innerHTML
      };
    });
  };
};

function changeFontFamily() {
  const fontFamilyButtons = document.querySelectorAll('#font-family>button');
  const text = document.querySelectorAll('.text-paragraph');

  for (let button of fontFamilyButtons) {
      button.addEventListener('click', function(event){
        for (let paragraph of text) {
          paragraph.style.fontFamily = event.target.innerHTML
      };
    });
  };
};
