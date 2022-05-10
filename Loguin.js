console.log('Loguin')


function enviar(cpf,senha){
  
  body ={
    "cpf":cpf,
    "senha":senha
  }
  
  var url = "http://127.0.0.1:3000/loguin"
  
 var bory = JSON.stringify(body)
  
  fetch(url, {
    method:"POST", 
    body: bory,
    
  }).then(function(Response){
    
    Response.json().then(function(data){
      if(data.token){
        if(typeof(Storage)!="undefine"){
          localStorage.token=data.token
          var token = localStorage.getItem("token")
          alert("Usuario logado com sucesso !!")
          
          window.open("./Home/Home.html", "self")
     
        }
      }
      else{
        alert("Usuario ja existente!")
      }
    })
  
  })
}


function loguin() {
  var cpf = document.getElementById("cpfloguin").value;
  
  var senha =document.getElementById("senha").value;
  
  if(cpf&&senha){
   
    enviar(cpf,senha)
    
  }else{
  alert("Documento invalido!!")
  }
}

function btnloguin(){
  var botao_loguin = document.getElementById("btn")
  console.log(botao_loguin)

  botao_loguin.addEventListener("click", loguin);
}


window.addEventListener("load", btnloguin);