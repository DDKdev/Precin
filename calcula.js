const botaoCalcula = document.querySelector('.botao__calcula');
botaoCalcula.addEventListener('click', (event) => {
    event.preventDefault();

    let custoDeProducao = document.querySelector('#custo');
    let custo = parseFloat(custoDeProducao.value);
    let margemDeLucro = document.querySelector('#lucro');
    let lucro = parseFloat(margemDeLucro.value);

    let precoVenda = custo + ((lucro/100)* custo);

    let campoVenda = document.querySelector('#venda');
    campoVenda.value = precoVenda;

})