eventListeners();

function eventListeners() {
  //Cuando se envia el formulario
  document.getElementById("formlogin").addEventListener("submit", formlogin);
  //contenido cargado
  document.addEventListener("DOMContentLoaded", localStoragelisto);
}

function formlogin(e) {
  //Prevenimos el envio del formulario
  e.preventDefault();

  const user = document.getElementById("user");
  const password = document.getElementById("password");

  
  
  //agregarEmailLocalStorage(email.value);
  //localStoragelisto()
}

