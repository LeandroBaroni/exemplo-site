var strData = getElementById("#dataComparacao");
var partesData = strData.split("/");
var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
console.log(data);
if(data > new Date())
   alert("A data do ocorrido não pode ser maior que a data atual");
   return "A data do ocorrido não pode ser maior que a data atual";