const minhaLista = document.querySelector(".lista");
const textoPadrao = document.getElementById("minha-lista");

const explorar = document.querySelector(".explorar");

textoPadrao.style.display="none";
minhaLista.addEventListener("click", function(){
    
    let livros = document.getElementById("conteudo-principal");
    
    livros.style.display = "none";
    textoPadrao.style.display = "block";
    
})

explorar.addEventListener("click", function(){
    
    let livros = document.getElementById("conteudo-principal");

    livros.style.display = "grid";
    textoPadrao.style.display = "none";
})

var subLogo = document.querySelector(".sub-logo");

var typewriter = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = "";
    textoArray.forEach((escreva, i) => {
        setTimeout(function(){
              elemento.innerHTML += escreva;
        },75 * i);
    }); 
}

typewriter(subLogo);

