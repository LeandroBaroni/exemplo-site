    <main class="content">
        <div class="row">
            <span class="reclame">
                <img src="assets/img/reclame_aqui.jpg" width="300" heigth="200">
                <p class="texto">A MELHOR FORMA</p>
                <p class="texto">DE SOLUÇÂO</p>
                <p class="texto"> DE CONFLITO DOS</p>
                <p class="texto">CONSUMIDORES</p>
            </span>

            <span class="formulario">
                <div class="formulario">
                    <h4>CONTE O QUE ACONTECEU</h4>
                    <button class="whatsappArea"><img src="assets/img/whatsapp-brands.svg" width="15px"> CONVERSAR PELO WHATSAPP</button>
                    <form method="post" action="#" class="inputs">
                        <div class="inputs">
                            <input class="fm" type="text" placeholder="Nome" id="txtName" name="txtName" size="35" onclick="this.value = '' "><br>
                            <input class="fm" type="email" placeholder="E-mail"  id="txtEmail" name="txtEmail" size="35" onclick="this.value = '' "><br>
                            <input class="fm" type="text" placeholder="Telefone" id="txtFone" name="txtFone" size="35" onclick="this.value = '' "><br>
                            <input class="fm" type="text" placeholder="Nome da empresa"  id="txtCompanyName" name="txtCompanyName" size="35" onclick="this.value = ''"><br>
                            <input class="fm" type="text" placeholder="Data do ocorrido" id="txtData" name="txtData" size="35" onclick="this.value = '' "><br>
                            <input class="fm" type="text" placeholder="Explique para nós o que aconteceu" id="txtDetails" name="txtDetails" size="35" onclick="this.value = '' ">
                        </div>
                        <button class="botao" onclick="getValueData();" type="submit">ENVIAR</button>
                    </form>
                </div>
            </span>
        </div>
    </main>
    <script>
        function getValueData(){
            console.log(1);
            var strData = document.getElementById('txtData');
            var partesData = strData.split("/");
            console.log(2);
            var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
            console.log(data);
            if(data > new Date()){
                alert("A data do ocorrido não pode ser maior que a data atual");
            }
        }
    </script>
</body>
