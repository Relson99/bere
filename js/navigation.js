const pages = document.querySelectorAll('.page');


function mostrarPagina(idPagina) {

    pages.forEach((page) => {

        page.classList.remove('active');

    });


    const pagina = document.getElementById(idPagina);


    if (!pagina) {
        return;
    }


    pagina.classList.add('active');

}