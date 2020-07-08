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

function formlogin(e) {
  //Prevenimos el envio del formulario
  e.preventDefault()

  const user = document.getElementById('user').value
  const password = document.getElementById('password').value

  let login = false
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].user === user && usuarios[i].password === password) {
      setUserSessionStorage(usuarios[i])
      login = true
      break;
    }
  }

  if (login) {
    // location.href = '/index.html'
    location.href = '/PAGWEBCSS/index.html'
  } else {
    alert('User/password incorrect')
  }
}

function setUserSessionStorage(user) {
  sessionStorage.setItem('user', JSON.stringify(user))
}
