function validar() {

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let nacimento = document.getElementById("nacimento").value;
    let curso = document.getElementById("curso").value;
    let turno = document.getElementById("nome").value;
 
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
        
    alert("Erro: Curso Vazio");
    return false;
    }

    if (turno.value == "") {
        
    alert("Erro: Turno Vazio");
    return false;
    }

    alert("Escrição Feita");

}