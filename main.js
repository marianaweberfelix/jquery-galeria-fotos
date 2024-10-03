$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown(); /*scroll formulario pra baixo*/
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); /*scroll pra cima quando clicado no cancelar*/
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); /*insere novo item dentro do li*/
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val('');
    })
})