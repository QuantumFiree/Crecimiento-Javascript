const response = fetch('https://arcane-cliffs-06690.herokuapp.com/login/usuario', {
    method: "GET",
    body: {
        "correo": "felipe.arteaga@gmail.com"
    },
    headers: { "Content-type": "application/json;charset=UTF-8" }
});

console.log('respuesta: ', response)