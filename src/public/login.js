class Registro{
    constructor(email,senha){
      this.email = email;
      this.senha = senha;
    }
  }
  class Method_Registro{
    constructor(url){
      this.url = url;
    }
   registro(email,senha) {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(email, senha),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json());
  }
}
 document.getElementById("entrar").onclick = function(){
   console.log("chegou aqui")
    const email = document.getElementById("email").value;
    const senha =  document.getElementById("password").value;
    const elementos = new Registro(email,senha);
    const metodos = new Method_Registro("/login");
     metodos.registro(elementos).then(resultados => {
       console.log(resultados)
    if (resultados = "Pode Acessar!"){
        location.assign("media.html")
      } 
      })
    }

