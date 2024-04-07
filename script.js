function adicionarPessoa(nome, idade, profissao, endereco) {
    var tabelaBody = document.querySelector("#tabelaProdutos tbody");
    var linha = document.createElement("tr");
    
    var informacao1 = document.createElement("td");
    informacao1.textContent = tabelaBody.rows.length + 1;
    var informacao2 = document.createElement("td");
    informacao2.textContent = nome;
    var informacao3 = document.createElement("td");
    informacao3.textContent = idade;
    var informacao4 = document.createElement("td");
    informacao4.textContent = profissao;
    var informacao5 = document.createElement("td");
    informacao5.textContent = endereco;
    var informacao6 = document.createElement("td");
    var removerBtn = document.createElement('button');
    removerBtn.textContent = 'Excluir';
    removerBtn.addEventListener('click', function() {
        tabelaBody.removeChild(linha);
    });
    informacao6.appendChild(removerBtn);
    
    linha.appendChild(informacao1);
    linha.appendChild(informacao2);
    linha.appendChild(informacao3);
    linha.appendChild(informacao4);
    linha.appendChild(informacao5);
    linha.appendChild(informacao6);
    tabelaBody.appendChild(linha);
    alert("Nova pessoa adicionada na tabela.")
    console.log("Nova pessoa adicionada na tabela.")
}

var form = document.getElementById('divpai');
var addPessoaBtn = document.createElement('input');
addPessoaBtn.type = 'button';
addPessoaBtn.value = 'Adicionar Pessoa';
addPessoaBtn.addEventListener('click', function() {
    var nome = document.getElementById('idNome').value;
    var idade = document.getElementById('idIdade').value;
    var profissao = document.getElementById('idProfissao').value;
    var endereco = document.getElementById('idEndereco').value;
    
    adicionarPessoa(nome, idade, profissao, endereco);
});
form.appendChild(addPessoaBtn);

// Objeto para a tabela já começar com informações dentro
var pessoasIniciais = [
    {
        nome: "Welson",
        idade: 20,
        profissao: "Estudante",
        endereco: "Currais Novos"
    }
];

var tabelaBody = document.querySelector("#tabelaProdutos tbody");

for (var i = 0; i < pessoasIniciais.length; i++) {
    var linha = document.createElement("tr");
    
    var informacao1 = document.createElement("td");
    informacao1.textContent = tabelaBody.rows.length + 1;
    var informacao2 = document.createElement("td");
    informacao2.textContent = pessoasIniciais[i].nome;
    var informacao3 = document.createElement("td");
    informacao3.textContent = pessoasIniciais[i].idade;
    var informacao4 = document.createElement("td");
    informacao4.textContent = pessoasIniciais[i].profissao;
    var informacao5 = document.createElement("td");
    informacao5.textContent = pessoasIniciais[i].endereco;
    var informacao6 = document.createElement("td");
    var removerBtn = document.createElement('button');
    removerBtn.textContent = 'Excluir';
    removerBtn.addEventListener('click', function() {
        tabelaBody.removeChild(linha);
    });
    informacao6.appendChild(removerBtn);
    
    linha.appendChild(informacao1);
    linha.appendChild(informacao2);
    linha.appendChild(informacao3);
    linha.appendChild(informacao4);
    linha.appendChild(informacao5);
    linha.appendChild(informacao6);
    tabelaBody.appendChild(linha);
}