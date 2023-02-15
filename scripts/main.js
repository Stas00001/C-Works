const mediaMobile = window.matchMedia('(max-width: 400px)');
const btnFormText = document.querySelectorAll('.form__btn');
const formFeedback = document.querySelectorAll('.form');
const formInput = document.querySelectorAll('.form__input');
windowText();
window.onresize = windowText;
function windowText() {
    btnFormText.forEach((btn, i) => {
      if (mediaMobile.matches) {
        btn.textContent = "✌️";

      }else {
        btn.textContent = "Отремонтируйте камеру ✌️";
      }
    });
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    formInput.forEach((item, i) => {
      if (item.value !== '') {
        btnFormText.forEach((btn, i) => {
          btn.classList.add('animation');
          if (mediaMobile.matches) {
            btn.style.maxWidth = '30%';
            btn.textContent = "Cпасибо!";
          } else {
            btn.textContent = "Круто, спасибо за доверие!";
          }

        });
      }
    });
  }
formFeedback.forEach((item, i) => {
  item.addEventListener('submit', handleFormSubmit);
});

const links = document.querySelectorAll('.link[data-goto]');
links.forEach((link) => {

  link.addEventListener('click', onlinkClick);
});
function onlinkClick(e) {
  const link = e.target;
  if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
    const gotoBlock = document.querySelector(link.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });
    e.preventDefault();
    }

  }
