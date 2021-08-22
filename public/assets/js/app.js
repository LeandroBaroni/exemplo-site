const init = function(){
    document.getElementById('button_send').addEventListener('click', send);
}

const send = function(e){
    e.preventDefault();
    e.stopPropagation();
    let fails = validate();
    console.log(67);
    if(fails.lenght === 0){
        console.log(68);
        document.getElementById('form_user').submit()
    }else{
        console.log(69);
        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data_errormsg', obj.msg);
            console.log(obj.msg);
            console.log(70);
        })
    }
}

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
//     var mensagem = "A data do ocorrido não pode ser maior que a data atual";
//     if(date > new Date()){
//         // console.log(date);
//         // console.log(new Date());
//         // console.log(4);
//         alert(mensagem);
        
//         // console.log(5);
//         // date.setCustomValidity("I expect an e-mail, darling!");
//     }
// }

const validate = function(e){
    let failures = [];
    var strData = document.getElementById('txtData').value;
    var date = new Date(strData.split('/').reverse().join('/'));
    var mensagem = "A data do ocorrido não pode ser maior que a data atual";
    if(date > new Date()){
        alert(mensagem);
        failures.push({input:'txtData', msg:'A data do ocorrido não pode ser maior que a data atual'});
    }
    return failures;
}

document.addEventListener('DOMContentLoaded', init);