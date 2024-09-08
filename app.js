
function pesquisar(){
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa=document.getElementById("campo-pesquisa").value
    //console.log(campoPesquisa);
   
    // se o campo pesquisa for uma string sem nada
    if (campoPesquisa == ""){
        section.innerHTML= "<h1> Favor digitar a raça do cachorro desejado </h1>"
        return
    }
    campoPesquisa =campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let imagem="";
  
    // Itera sobre cada dado e cria o HTML correspondente
    for (let dado of dados) {
        titulo=dado.titulo.toLowerCase()
        descricao= dado.descricao.toLowerCase()
        

        if (titulo.includes (campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado"> <h2> <a href="#" target="_blank"> ${dado.titulo}</a> 
            </h2>
             <img src="${dado.imagem}"  width="200" height="200" class="imagem-centralizada"> <h2> <a href="#" target="_blank"> </a> </h2>
            <p class="descricao-meta"> ${dado.descricao} </p>
            <a href=${dado.link} target="_blank"> Mais informações</a> </div>
            `;
        }
  
    }
           
        
      
    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
  }
