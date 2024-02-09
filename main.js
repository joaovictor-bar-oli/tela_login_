function abrirpag(){
    var nome = document.getElementById('name-input').value;
    
    // Verifique se o input está preenchido
    if(nome.trim() !== '') {
        window.location.href = "https://youtu.be/wd7JqXouRRA?si=WMBQ75ZC5Wozdr_X&t=43"
    }
    else{
        alert("Por favor preencha o campo nome")
    }

}
