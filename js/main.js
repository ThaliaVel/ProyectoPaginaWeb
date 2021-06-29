$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){ //Si existe un html que se llame index que haga... lógica dentro de función
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    
        //Posts
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el día ' + moment().format("dddd")+ ' ' +  moment().date() +' de ' +moment().format("MMMM") + ' de ' + moment().format("YYYY") ,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sagittis lorem, malesuada euismod sapien. Suspendisse ac imperdiet tortor. Pellentesque consequat felis massa, vel convallis sapien egestas at. Suspendisse auctor turpis a nunc sagittis, faucibus facilisis dolor venenatis. Suspendisse at eros ac magna interdum interdum vitae vel nibh. Vestibulum et mi eu lacus rhoncus tempus. Donec at bibendum lectus, ac convallis tortor. Aenean quis posuere dolor. Morbi gravida erat vel tortor placerat volutpat. Donec nibh ligula, tincidunt nec est quis, bibendum lobortis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed neque sapien, maximus a tellus in, lacinia feugiat purus."
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el día ' + moment().format("dddd")+ ' ' +  moment().date() +' de ' +moment().format("MMMM") + ' de ' + moment().format("YYYY") ,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sagittis lorem, malesuada euismod sapien. Suspendisse ac imperdiet tortor. Pellentesque consequat felis massa, vel convallis sapien egestas at. Suspendisse auctor turpis a nunc sagittis, faucibus facilisis dolor venenatis. Suspendisse at eros ac magna interdum interdum vitae vel nibh. Vestibulum et mi eu lacus rhoncus tempus. Donec at bibendum lectus, ac convallis tortor. Aenean quis posuere dolor. Morbi gravida erat vel tortor placerat volutpat. Donec nibh ligula, tincidunt nec est quis, bibendum lobortis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed neque sapien, maximus a tellus in, lacinia feugiat purus."
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día ' + moment().format("dddd")+ ' ' +  moment().date() +' de ' +moment().format("MMMM") + ' de ' + moment().format("YYYY") ,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sagittis lorem, malesuada euismod sapien. Suspendisse ac imperdiet tortor. Pellentesque consequat felis massa, vel convallis sapien egestas at. Suspendisse auctor turpis a nunc sagittis, faucibus facilisis dolor venenatis. Suspendisse at eros ac magna interdum interdum vitae vel nibh. Vestibulum et mi eu lacus rhoncus tempus. Donec at bibendum lectus, ac convallis tortor. Aenean quis posuere dolor. Morbi gravida erat vel tortor placerat volutpat. Donec nibh ligula, tincidunt nec est quis, bibendum lobortis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed neque sapien, maximus a tellus in, lacinia feugiat purus."
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el día ' + moment().format("dddd")+ ' ' +  moment().date() +' de ' +moment().format("MMMM") + ' de ' + moment().format("YYYY") ,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sagittis lorem, malesuada euismod sapien. Suspendisse ac imperdiet tortor. Pellentesque consequat felis massa, vel convallis sapien egestas at. Suspendisse auctor turpis a nunc sagittis, faucibus facilisis dolor venenatis. Suspendisse at eros ac magna interdum interdum vitae vel nibh. Vestibulum et mi eu lacus rhoncus tempus. Donec at bibendum lectus, ac convallis tortor. Aenean quis posuere dolor. Morbi gravida erat vel tortor placerat volutpat. Donec nibh ligula, tincidunt nec est quis, bibendum lobortis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed neque sapien, maximus a tellus in, lacinia feugiat purus."
            }
        ];



        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span id="date">${item.date}</span>
                    <p>
                    ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;

            $("#posts").append(post);
        });
    }

    //Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    //Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault(); //Para que el boton no haga su funcion principal que es mandar a otro sitio
        
        $('html, body').animate({
            scrollTop: 0
        },500);
        
        return false;
    });

    //Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("#form_name", form_name);
    });

    var form_name = localStorage.getItem("#form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br>Bienvenido, <strong>" + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //ABOUT
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        },10);
    }

    //Validation form plugin
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang : 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});