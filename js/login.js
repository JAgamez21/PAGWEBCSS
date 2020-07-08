const usuarios = [
  {
    "user": "nestor",
    "password": "qwerty",
    "tipo": "admin"
  },
  {
    "user": "nestor2",
    "password": "qwerty",
    "tipo": "admin"
  },
  {
    "user": "nestor3",
    "password": "qwerty",
    "tipo": "cliente"
  },
  {
    "user": "nestor4",
    "password": "qwerty",
    "tipo": "cliente"
  }
]

eventListeners();

function eventListeners() {
  //Cuando se envia el formulario
  document.getElementById('formlogin').addEventListener('submit', formlogin);
}
