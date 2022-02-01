var nome = document.getElementById('nome');
var email = document.getElementById('email');
var sexo = document.getElementById('sexo');
var ativo = document.getElementById('ativo');
var idade = document.getElementById('idade');
var carregarDados = document.getElementById('carregar-dados');


var xhr = new XMLHttpRequest()

 const dados = {}

carregarDados.addEventListener('click', function(e) {
    e.preventDefault();
    this.dados = {
        "nome": nome.value,
        "email": email.value,
        "sexo": sexo.value,
        "ativo": ativo.value,
        "idade": idade.value,
    }
    console.log(this.dados);

});

// xhr.onreadystatechange = function(){

//     if(xhr.readyState == 4){
//         console.log(objeto);
//     }
// }

// xhr.open("post", url)

// xhr.send(objeto);


 var botaoBuscar = document.getElementById('botao-endereco');

 botaoBuscar.addEventListener('click', function(e) {
    e.preventDefault();
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }
     fetch(`https://viacep.com.br/ws/01001000/json/`, options)
     .then(resposta => {
           resposta.json()
          .then(res => console.log("resposta", res))
          .catch(e => console.log("Erro!!!", e.mensage))
         });
 })
 
 var buscarText = document.getElementById('buscar-text');

 buscarText.addEventListener('click', function(e) {

    e.preventDefault();
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }
     fetch(`http://localhost:8089/teste/`, this.dados)
     .then(resposta => {
            console.log("resposta1", resposta)
         }).then(text => console.log("resposta2", text))
         .catch(e => console.log("Erro!!!", e.mensage));
 })

 const cadastrar = document.getElementById('cadastrar');

 cadastrar.addEventListener('click', function(e) {
    e.preventDefault();

        this.dados = {
            nome: nome.value,
            email: email.value,
            sexo: sexo.value,
            ativo: ativo.value,
            idade: idade.value,
    }

   const dadosEmJson =  JSON.stringify(this.dados)
   
    const options = {
        method: 'post',
        mode: 'no-cors',
        cache: 'default',
        
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Content-Length':'<calculated when request is sent>',
            'Host':'<calculated when request is sent>'
        } ,
        body: JSON.stringify(dadosEmJson)
    }
    console.log("sem o this 1 ",dadosEmJson)
     fetch(`http://localhost:8089/create`,options,
      )
     .then(resposta => {
           console.log("resposta", resposta)
         })
         .catch(e => console.log("Erro!!!", e));

    // $.ajax({
    //     type : 'POST',
    //     contentType : 'application/json',
    //     url : 'http://localhost:8089/create',
    //     dataType : "json",
    //     data : this.dados,
    //     success : 'Sucesso',
    //     error : function(jqXHR, textStatus, errorThrown) {
    //      alert('Erro criando contato: ' + jqXHR.responseText);
    //     }
    //    });

 })





