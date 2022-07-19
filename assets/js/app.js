$(function () {
    const nombres = ["rectangulo", "circulo", "triangulo"];
    const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    $("#figura").text(aleatorio);

    $("#env").click(function () {


        const figura = $('input:radio[name=captcha]:checked').val();

        if (figura == aleatorio) {
            $("#Alerta").html(`¿Está seguro que los datos capturados son los correctos? <br> Nombre:${$("#nombre").val()}, Email:${$("#email").val()}, Telefono:${$("#telefono").val()}`);
            $("#modalMensaje").modal('show');
            $("#confirmar").click(function(){
                validar();
            });
        } else {
            $("#Alerta").html(`Ups hubo un error ¿Está seguro que la imagen es correcta? <br> <b class="bg-danger text-bg-danger">${figura}</b>`);
            $("#modalMensaje").modal('show');
        }

    });
    function validar() {
        //Nombre
        var nombre = $("#nombre").val();
        var regxnombre = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
        //Email
        var email = $("#email").val();
        const regxemail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        //Telefono
        const telefono = $("#telefono").val();
        const regxtelefono = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
        //Otros Datos
        const direccion = $("#direccion").val();
        const asunto = $("#asunto").val();
        const comentario = $("#comentario").val();

        if (regxnombre.test(nombre) != "" && regxemail.test(email) != "" && regxtelefono.test(telefono) != "") {
        }else{
            $("#Alerta").html(`Ups hubo un error ¿Está seguro que los datos capturados son los correctos? <br> Nombre:${$("#nombre").val()}, Email:${$("#email").val()}, Telefono:${$("#telefono").val()}`);
            $("#modalMensaje").modal('show');

        }

    }
});