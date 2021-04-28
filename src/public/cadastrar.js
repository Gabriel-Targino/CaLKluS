class Registro {
  constructor(email, nome, password) {
    this.email = email;
    this.nome = nome;
    this.password = password;
  }
}
class method_registro {
  constructor(url) {
    this.url = url;
  }
  registro(email,nome, password) {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(email, nome, password),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json());
  }
}
document.getElementById("envio").onclick = function () {
  const email = document.getElementById("email").value;
  const nome = document.getElementById("nome").value;
  const password = document.getElementById("password").value;
  const elementos = new Registro(email, nome, password);
  const metodo = new method_registro("/cadastro");
  metodo.registro(elementos).then((resultados) => {
    console.log("ok!", resultados);
    if ((resultados = "Cadastro efetuado")) {
      document.getElementById("resultadocadastro").innerText = "Cadastro Feito";
      window.location.href = "login.html";
    }
  });
};
