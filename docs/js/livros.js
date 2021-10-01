//lista de livros totais do site
var listaLivros = [
    Coraline = {
        img: "img/Coraline.jpg",
        paginas: 224
    },
    Redes ={
        img: "img/redes-de-computadores.jpg",
        paginas: 600,
    },
    RainhaVermelha = {
        img: "img/A-rainha-vermelha.jpg",
        paginas: 424,
    }, 
    assassinsCreed = {
      img:"img/81qFdOvnxaL.jpg",
      paginas: 336,
    },
    umaBreve = {
       img: "img/uma-breve.jpg",
       paginas: 256,
    },  
    GuerraCivil = {
        img: "img/guerra-civil.jpg",
        paginas: 398,
    }, 
    MitologiaNordica = {
        img: "img/mitologia-nordica.jpg",
        paginas: 288,
    }, 
    Deadpool = {
        img: "img/deadpool.jpg",
        paginas: 176,
    }, 
    Batman = {
        img: "img/piada-mortal.jpg",
        paginas: 82,
    }, 
    AtaqueDosTitas = {
        img: "img/shingeki.jpg",
        paginas: 192,
    }, 
    TheWalkingDead = {
        img: "img/TWD.jpg",
        paginas: 266,
    }
];

//array para guardar os livros que estão na lista do usuario    
var LivrosEscolhidos = [];

//loop para aplicar a função click em todos os sinais de adição
for(var i = 0; i < listaLivros.length; i++){
    const plus = document.querySelectorAll(".fa-plus")[i];
    plus.addEventListener("click", function(){
       
        //removendo a mensagem inicial da lista do usuário
        let removerMensagem = document.getElementById("mensagem-inicial");
        removerMensagem.style.display = "none";
        
        //segundo loop para salvar os livros adicionados no array LivrosEscolhidos 
        for(var index = 0; index < listaLivros.length; index++){
             
            if(plus == document.querySelectorAll(".fa-plus")[index]){
                 LivrosEscolhidos.push(listaLivros[index]);
                 
                 let divMinhaLista = document.createElement("div");
                //  divMinhaLista.classList.add("livros-minhaLista");
                 //criando um elemento img para a lista do usuário
                 let conteudoMinhaLista = document.createElement("img");
                 
                 //trocando as imagens de acordo com o livro adicionado pelo usuario
                 conteudoMinhaLista.src = listaLivros[index].img;
                 conteudoMinhaLista.classList.add("img-minhaLista");

                   
                 let paginasLidas = document.querySelector(".paginas-lidas");
                 
                 //variavel para calcular o numero total de paginas, somando todos os objetos da variavel LivrosEscolhidos
                 let total = LivrosEscolhidos.reduce((total, valor) => total + valor.paginas, 0);
                 
                 paginasLidas.innerHTML = total + " Páginas Lidas"

                 let quantidadeLivros = document.querySelector(".quantidade-livros");

                 quantidadeLivros.innerHTML = "Nº Livros: " + LivrosEscolhidos.length;
                 
               
                 //adicionando o conteudo dentro do conteudoprincipal
                 let conteudoprincipal = document.querySelector(".conteudo-principal2");
                 conteudoprincipal.appendChild(divMinhaLista);

                 let bolinhas = document.createElement("div");
                 bolinhas.classList.add("bolinha-verde-lista");

                 divMinhaLista.appendChild(bolinhas); 
                 divMinhaLista.appendChild(conteudoMinhaLista);
                 console.log(conteudoprincipal)
                 
            }
        }
    })
}