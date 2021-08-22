const form = document.getElementById('form_user');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    var stringDaData = document.getElementById('txtData');
    var strData = document.getElementById('txtData').value;
    var date = new Date(strData.split('/').reverse().join('/'));
    let mensagem = "A data do ocorrido não pode ser maior que a data atual.";

    if(date > new Date()){
        // alert(mensagem);
        setErrorFor(stringDaData, mensagem)
    }else{
        setSucessFor(stringDaData);
    }
}

function setErrorFor(input, mensagem){
    const formControl = input.parentElement; //div inputs
    const small = document.querySelector('small');
    
    //add mensagem dentro do small
    small.innerText = mensagem;
    formControl.className = 'inputs error';
}

function setSucessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'inputs success';

}