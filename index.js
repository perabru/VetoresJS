
 //variavel global
 
 var nomes = [];

 var contador = 0;


 
function vetor(){
   

//Push - serve para adicionar no vetor (última posição)
//Pop - Serve para remover do vetor (remover a ultima posicao)

    for(contador = 0; contador < nomes.length; contador++ ){

    console.log(nomes[contador]);
    
    }
}

function adicionar(){
    var addNome = document.getElementById("txtNome").value;
   nomes.push(addNome);

   alert("Adicionado com Sucesso")
}


function remover(){
  
   nomes.pop();

   alert("Removido com sucesso")
}

