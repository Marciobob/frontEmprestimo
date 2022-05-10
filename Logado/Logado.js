console.log("logado")

function logado(){
  if(typeof(Storage)!="undefine"){

    if(localStorage.token){

      window.open("https://marciobob.github.io/frontEmprestimo/Home/Home.html")
    }
  }
}

window.addEventListener("load", logado);
