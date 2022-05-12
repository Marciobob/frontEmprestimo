console.log("Cadastro")

//var tokens = localStorage.getItem("")
//alert(tokens)
function enviar(nome,fone,email,senha,cpf){
  
  body ={
    "nome":nome,
    "cpf":cpf,
    "fone":fone,
    "email":email,
    "senha":senha,
  }
  
  var url = "http://143.244.179.118:5000/cadastro"
  var bory = JSON.stringify(body)
  
  fetch(url,{
    method:"POST", 
      body: bory,
    
  }).then(function(Response){
        return Response.json()})
        .then(function(data){
        
        if(data.token){
          if(typeof(Storage)!="undefine"){
            localStorage.token=data.token
            var token = localStorage.getItem("token")

            alert(" cadastrado com sucesso !!")
            
            window.open("../Home/Home.html", "Self")
          }
        }
        else{
          alert("Usuario ja existente!")
        }
    })
}

function cadastrar(){
  
  let elementos = document.forms[0].elements

  let nome = elementos[0].value
  let cpf = elementos[1].value
  let fone = elementos[2].value
  let email = elementos[3].value
  let senha = elementos[4].value
  let confsenha = elementos[5].value
  
  if(senha === confsenha&&nome&&fone&&email&&cpf){
    
    enviar(nome,fone,email,senha,cpf)

  }else{
    alert("Confira todos os dados!!")
  }
  
}
