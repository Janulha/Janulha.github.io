function validar() {

let nome = document.getElementByID ("nome");
let sobrenome = document.getElementByID ("sobrenome");
let nacimento = document.getElementByID ("nacimento");
let curso = document.getElementByID ("curso");
let turno = document.getElementByID ("nome");
 
if (nome.value == "") {
        
    alert("Erro: Nome Vazio");
    return false;
}

if (sobrenome.value == "") {
        
    alert("Erro: Sobrenome Vazio");
    return false;
}

if (nacimento.value == "") {
        
    alert("Erro: Data De Nacimento Vazio");
    return false;
}

if (curso.value == "") {
        
    alert("Erro: Curso vazio");
    return false;
}

}