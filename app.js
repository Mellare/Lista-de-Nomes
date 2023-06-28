var listaNomes = [];

function btnCadastrar()
{
    var firstName = $('#firstname').val();
    var lastName = $('#lastname').val();


    var validacao = validarFormulario(firstName,lastName);
    if(!validacao){
        alert("Informe os dados!");
        return;
    }
    
    let pessoaObj = {firstName, lastName};
    listaNomes.push(pessoaObj)
    AddNomesElementoHtml(pessoaObj);
}

function AddNomesElementoHtml(pessoaObj){
    /*Ex 1 pegando elementos html
    var elementoHtml = document.getElementById("lista-nomes");
    var novaDiv = document.createElement("div"); //cria um elemento html
    novaDiv.innerHTML = `${pessoaObj.firstName} ${pessoaObj.lastName}`;
    
    elementoHtml.appendChild(novaDiv);*/

    //ex 2
    var elementoHtml = document.getElementById("lista-nomes");

    var novoCodigoHtml = ` <li class="mt-3 list-group-item">
    <button class="btn btn-danger" onclick="excluirElemento(this)">
    <i class="fa fa-times" aria-hidden="true"></i>
    </button>
    ${pessoaObj.firstName} ${pessoaObj.lastName}
    </li>`;

    elementoHtml.insertAdjacentHTML("beforeend",novoCodigoHtml);
}

function excluirElemento(elemnt){
    elemnt.parentNode.remove();
}

function eventEscrever(event){
    //console.log(event.key);
}

function carregarPagina(){
    console.log("A página foi carregada");
}

function validarFormulario(firstName,lastName){
    if(!firstName || !lastName){
        return false;
    } else {
        return true;
    }
}