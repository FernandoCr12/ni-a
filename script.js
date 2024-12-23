document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('#loginButton');
  const secretWordInput = document.querySelector('#secretWord');
  const loginContainer = document.querySelector('#loginContainer');
  const letterContainer = document.querySelector('#letterContainer');
  const optionsContainer = document.querySelector('#options');
  const correctPassword = "miamor";

  // Validar palabra secreta
  loginButton.addEventListener('click', () => {
    const enteredWord = secretWordInput.value.trim();

    if (enteredWord.toLowerCase() === correctPassword.toLowerCase()) {
      Swal.fire({
        icon: 'success',
        title: 'Datos correctos, mi amor',
        text: 'Preparando tu sorpresa...',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        loginContainer.style.display = 'none';
        letterContainer.style.display = 'block';
        optionsContainer.style.display = 'flex';
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Inténtalo una vez más, mi amor',
        text: 'Tú puedes lograrlo.',
      });
    }
  });

  // Animación de la carta
  const btnOpenElement = document.querySelector('#open');
  const btnCloseElement = document.querySelector('#close');
  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  const heartElement = document.querySelector('.heart');

  btnCloseElement.disabled = true;

  btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;

    coverElement.classList.add('open-cover');
    setTimeout(() => {
      coverElement.style.zIndex = -1;
      paperElement.classList.add('open-paper');
      heartElement.style.display = 'block';
    }, 500);
  });

  btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    paperElement.classList.remove('open-paper');
    setTimeout(() => {
      coverElement.style.zIndex = 0;
      coverElement.classList.remove('open-cover');
      heartElement.style.display = 'none';
    }, 500);
  });
});
