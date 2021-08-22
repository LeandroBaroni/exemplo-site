// const init = function(){
//     document.getElementById('button_send').addEventListener('click', send);
// }

// const send = function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     let fails = validate(); 

//     if(fails.lenght === 0){
//         console.log(68);
//         document.getElementById('form_user').submit()
//     }else{
//         console.log(69);
//         fails.forEach(function(obj){
//             let field = document.getElementById(obj.input);
//             field.parentElement.classList.add('error');
//             field.parentElement.setAttribute('data-errormsg', obj.msg);
//             console.log(obj.msg);
//             console.log(70);
//         })
//     }
// }

// const validate = function(e){
//     let failures = [];
//     var strData = document.getElementById('txtData').value;
//     var date = new Date(strData.split('/').reverse().join('/'));
//     var mensagem = "A data do ocorrido não pode ser maior que a data atual.";
//     if(date > new Date()){
//         alert(mensagem);
//         failures.push({input:'txtData', msg:'A data do ocorrido não pode ser maior que a data atual.'});
//     }
//     return failures;
// }

// document.addEventListener('DOMContentLoaded', init);



// function getValueData(){
//     // console.log(document.getElementById('txtData').value);
//     var strData = document.getElementById('txtData').value;
//     // var partesData = strData.split("/");
//     var date = new Date(strData.split('/').reverse().join('/'));
//     // console.log(3);
//     // console.log(date)
//     // console.log(new Date());
//     // var data = new Date(date[2], date[1] - 1, date[0]);
//     // console.log(data);
//     var mensagem = "A data do ocorrido não pode ser maior que a data atual.";
//     if(date > new Date()){
//         // console.log(date);
//         // console.log(new Date());
//         // console.log(4);
//         alert(mensagem);
        
//         // console.log(5);
//         // date.setCustomValidity("I expect an e-mail, darling!");
//     }
// }



const form = document.getElementById('form_user');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    var stringDaData = document.getElementById('txtData');
    var strData = document.getElementById('txtData').value;
    var date = new Date(strData.split('/').reverse().join('/'));
    // console.log(0);
    // console.log(date);
    let mensagem = "A data do ocorrido não pode ser maior que a data atual.";
    // console.log(1);
    // console.log(mensagem)
    if(date > new Date()){
        // console.log(2);
        alert(mensagem);
        // console.log(3);
        setErrorFor(stringDaData, mensagem)
        // failures.push({input:'txtData', msg:'A data do ocorrido não pode ser maior que a data atual.'});
    }else{
        console.log(6);
        setSucessFor(stringDaData);
    }
}

function setErrorFor(input, mensagem){
    // console.log(input);
    // console.log(input.parentElement.className);
    console.log(7);
    const formControl = input.parentElement; //div inputs
    // console.log(input.parentElement);
    console.log(8);
    // console.log(formControl.querySelector('small'));

    // const small = formControl.querySelector('small').className;
    const small = document.querySelector('small');
    
    console.log(mensagem);
    //add mensagem dentro do small
    console.log(9);
    small.innerText = mensagem;
    console.log(10);
    console.log("Texto: " + small.innerText);
    console.log(11);
    formControl.className = 'inputs error';
    // document.className = 'inputs error';
    console.log(12);
}

function setSucessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'inputs success';

}