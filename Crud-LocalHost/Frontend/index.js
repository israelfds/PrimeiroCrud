function ApagaRegistro(id) {
    let _confirm = confirm("Deseja realmente excluir esse registro?")

    if (_confirm) {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].ID == id) {
                dados.splice(i, 1)
            }
        }

        PopulaTabela()
    }
}

function EditaRegistro(id) {
    $("#modalRegistro").modal("show")

    dados.forEach(function (item) {
        if (item.ID == id) {
            $("#hdID").val(item.ID)
            $("#txtNome").val(item.Nome)
            $("#txtSobrenome").val(item.Sobrenome)
            $("#txtDtNascimento").val(item.DtNascimento.substr(6, 4) + "-" + item.DtNascimento.substr(3, 2) + "-" + item.DtNascimento.substr(0, 2))
            $("#txtFormacao").val(item.Formacao)
        }
    })
}

async function PopulaTabela() {
    
    console.log("iniciando requisicao");
    let response = await fetch('http://localhost:3000/alunos');
    let jsonBody = await response.json();

    let dados = JSON.parse(jsonBody)
    
    if (Array.isArray(dados)) {

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            
            console.log("item", item);

            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Formacao}</td>
                <td><button type="Button" Class="btn btn-primary"onclick="javascript:EditaRegistro(${item.ID});"><i class="fas fa-edit"></i></button></td>
                <td><button type="Button" Class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});"><i class="fas fa-trash-alt"></i></button></td>
            </tr>`)
        })
    }
}


$(async function () {
    //EXECUTA AO CARREGAR DA TELA
    
    console.log("first");
    await PopulaTabela();

//    var mydata = JSON.parse(dataBase);

/*
    $("#btnSalvar").click(function () {
        //EVENTO CLICK DO BOTÃO SALVAR

        let _id = $("#hdID").val()
        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let DtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-Br", { timeZone: "UTC" })
        let Formacao = $("#txtFormacao").val()


        if (!_id || _id == "0") {

            let registro = {}
            registro.Nome = Nome
            registro.Sobrenome = Sobrenome
            registro.DtNascimento = DtNascimento
            registro.Formacao = Formacao

            registro.ID = dados.length + 1
            dados.push(registro)
        }
        else {
            dados.forEach(function (item) {
                if (item.ID == _id) {
                    item.Nome = Nome
                    item.Sobrenome = Sobrenome
                    item.DtNascimento = DtNascimento
                    item.Formacao = Formacao
                }
            })
        }

        alert("Registro salvo com Sucesso")
        $("#modalRegistro").modal("hide")


        //Evento para limpar dados em modal
        $("#hdID").val("0")
        $("#txtNome").val("")
        $("#txtSobrenome").val("")
        $("#txtDtNascimento").val("")
        $("#txtFormacao").val("")

        await PopulaTabela()
    })
    */

})
