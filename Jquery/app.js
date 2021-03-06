/*Variable que contiene expresiones regulares para validar el campo email*/
const regular = /^[A-Za-z._0-9]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

/*Variables globales que contine los valores del select option*/
var $producto_value = "";
var $precio_value = "";
var $producto_stock_value = "";
var $unidades_stock_value = "";

/*Variable de tipo objeto y una variable de tipo array para el formulario login*/
var login = {
    email: null,
    password: null
};
var login_array = [];
var cnt = -1;

/*Variable de tipo objeto y una variable de tipo array para el formulario entrega*/
var entrega = {
    telefono: null,
    fecha_inicio: null,
    fecha_final: null
};
var entrega_array = [];
var cnt2 = -1;

/**
 * @author javi98
 * @version 1.0
 * @name menu_login
 * @description Función para mostrar el contenido del menu login y ocultar el resto de contendio de otros menus.
 * @param 
 */
function menu_login() {
    $("#menu-entrega").removeAttr("style").hide();
    $("#menu-compra").removeAttr("style").hide();
    $("#menu-stock").removeAttr("style").hide();
    $("#menu-login").show();
}

/**
 * @author javi98
 * @version 1.0
 * @name menu_compra
 * @description Función para mostrar el contenido del menu productos y ocultar el resto de contendio de otros menus.
 * @param 
 */
function menu_compra() {
    $("#menu-login").removeAttr("style").hide();
    $("#menu-entrega").removeAttr("style").hide();
    $("#menu-stock").removeAttr("style").hide();
    $("#menu-compra").show();
}

/**
 * @author javi98
 * @version 1.0
 * @name menu_entrega
 * @description Función para mostrar el contenido del menu entrega y ocultar el resto de contendio de otros menus.
 * @param 
 */
function menu_entrega() {
    $("#menu-login").removeAttr("style").hide();
    $("#menu-compra").removeAttr("style").hide();
    $("#menu-stock").removeAttr("style").hide();
    $("#menu-entrega").show();
}

/**
 * @author javi98
 * @version 1.0
 * @name menu_stock
 * @description Función para mostrar el contenido del menu stock y ocultar el resto de contendio de otros menus.
 * @param 
 */
function menu_stock() {
    $("#menu-login").removeAttr("style").hide();
    $("#menu-entrega").removeAttr("style").hide();
    $("#menu-compra").removeAttr("style").hide();
    $("#menu-stock").show();
}

/**
 * @author javi98
 * @version 1.0
 * @name validar_login
 * @description Función para validar los campos del menu login.
 * @param 
 */
function validar_login() {

    /*Variables que contiene los valores de los campos del menu login.*/
    var $email = $('.login-email').val();
    var $password = $('.login-password').val();
    var $string_password = $password.length;

    /*Condición de que si el campo email no esta vacio entra en esta condición para enviar al usuario que el
    valor del campo email que ha introducido el usuario es correcto o no.*/
    if ($email != "") {

        if (regular.test($email)) {
            $('.login-email').removeClass("border-danger");
        } else {
            $('.login-email').addClass("border-danger");
            $(".submit-login").attr("disabled", true);
            $(".boton-iniciar-aplicacion").attr("disabled", true);
        } //Final if regular.test($email)

    } //Final if $email != ""

    /*Condición de que si el campo password no esta vacio entra en esta condición para enviar al usuario que el
    valor del campo password que ha introducido el usuario es correcto o no.*/
    if ($string_password != 0) {

        if ($string_password >= 6) {
            $('.login-password').removeClass("border-danger");
        } else {
            $('.login-password').addClass("border-danger");
            $(".submit-login").attr("disabled", true);
            $(".boton-iniciar-aplicacion").attr("disabled", true);
        } //Final if $string_password >= 6

    } //Final if $string_password != 0

    /*Condición de que si el valor que ha introducido el usuario en el campo email y en el campo password es 
    correcto el botón submit se podra utilizar.*/
    if (regular.test($email) && $string_password >= 6) {
        $(".submit-login").removeAttr('disabled');
        $(".boton-iniciar-aplicacion").removeAttr('disabled');
    } //Final if regular.test($email) && $string_password >= 6

} //Final función validar_login()

/**
 * @author javi98
 * @version 1.0
 * @name submit_login
 * @description Función para mostrar los valores de los campos del menu login en console.log.
 * @param 
 */
function submit_login() {

    /*Variables que contiene los valores de los campos del menu login.*/
    var $email = $('.login-email').val();
    var $password = $('.login-password').val();

    /*Mostrar los valores de los campos del menu en un console.log*/
    console.clear();
    console.log("Login");
    console.log("--------------------");
    console.log("Email: " + $email);
    console.log("Password: " + $password);

    /*Guardar el objeto que ha insertado el usuario en el formulario login*/
    login = {
        email: $email,
        password: $password
    };

    /*Subir el objeto a variable de tipo array*/
    login_array.push(login);

    cnt++;

    /*Variables para duplicar el div duplicar-login.*/
    var duplicar = document.getElementById('duplicar-login').cloneNode(true);
    var array_duplicar = duplicar.childNodes;

    /*Cada div que se vaya duplicando contendra con un id diferente al resto de div.
    Por ejemplo: En este caso lo que haria es duplicar-login0, duplicar-login1, duplicar-login2 y etc.*/
    duplicar.id = 'duplicar-login' + cnt;

    /*Para mostrar el contenido del div que tenga seleccionada en la variable duplicar en este caso
    la variable duplicar contiene el div duplicar-datos0.*/
    duplicar.style.display = 'block';

    /*Bucle for para recorrer el div duplicar-login para guardarlo en una array que esa array sera
    guardado en la variable clonar.*/
    for (var i = 0; i < duplicar.length; i++) {
        var clonar = array_duplicar[i].name
        if (clonar)
            array_duplicar[i].name = clonar + cnt;
    } //Final bucle for i

    /*Variable insertar que sirve para insertar el div duplicar-login al div mostrar-datos.*/
    var insertar = document.getElementById('mostrar-datos');
    insertar.parentNode.insertBefore(duplicar, insertar);

    /*Para crear que cada clase de los input del formulario contenga una clase diferente y que contenga
    el valor que haya insertado el usuario.*/
    $('#duplicar-login' + cnt + ' .mostrar-email-0').val(login_array[cnt].email);
    $('#duplicar-login' + cnt + ' .mostrar-password-0').val(login_array[cnt].password);
    $('#duplicar-login' + cnt + ' .boton-modificar-login').val(cnt);
    parseInt($('#duplicar-login' + cnt + ' .boton-guardar-login').val(cnt));
    parseInt($('#duplicar-login' + cnt + ' .boton-eliminar-login').val(cnt));

    $('#duplicar-login' + cnt).addClass("content_1");

    /*Reiniciar los valores de los campos del menu login.*/
    $('.login-email').val("");
    $('.login-password').val("");
    $(".submit-login").attr("disabled", true);

    /*Llamar a la funcion insertar_login() para guardarlo en la base de datos*/
    insertar_login(cnt, $email, $password)

} //Final función submit_login()

/**
 * @author javi98
 * @version 1.0
 * @name submit_login_bd
 * @description Función para mostrar los valores de los campos del menu login de la base de datos.
 * @param $cnt_bd valor del id del menu login
 * @param $email_bd valor del email del menu login
 * @param $password_bd valor de la contrasenya del menu login
 */
function submit_login_bd($cnt_bd, $email_bd, $password_bd) {

    cnt = $cnt_bd

    /*Guardar el objeto que ha insertado el usuario en el formulario login*/
    login = {
        email: $email_bd,
        password: $password_bd
    };

    /*Subir el objeto a variable de tipo array*/
    login_array.push(login);

    /*Variables para duplicar el div duplicar-login.*/
    var duplicar = document.getElementById('duplicar-login').cloneNode(true);
    var array_duplicar = duplicar.childNodes;

    /*Cada div que se vaya duplicando contendra con un id diferente al resto de div.
    Por ejemplo: En este caso lo que haria es duplicar-login0, duplicar-login1, duplicar-login2 y etc.*/
    duplicar.id = 'duplicar-login' + cnt;

    /*Para mostrar el contenido del div que tenga seleccionada en la variable duplicar en este caso
    la variable duplicar contiene el div duplicar-datos0.*/
    duplicar.style.display = 'block';

    /*Bucle for para recorrer el div duplicar-login para guardarlo en una array que esa array sera
    guardado en la variable clonar.*/
    for (var i = 0; i < duplicar.length; i++) {
        var clonar = array_duplicar[i].name
        if (clonar)
            array_duplicar[i].name = clonar + cnt;
    } //Final bucle for i

    /*Variable insertar que sirve para insertar el div duplicar-login al div mostrar-datos.*/
    var insertar = document.getElementById('mostrar-datos');
    insertar.parentNode.insertBefore(duplicar, insertar);

    /*Para crear que cada clase de los input del formulario contenga una clase diferente y que contenga
    el valor que haya insertado el usuario.*/
    $('#duplicar-login' + cnt + ' .mostrar-email-0').val($email_bd);
    $('#duplicar-login' + cnt + ' .mostrar-password-0').val($password_bd);
    $('#duplicar-login' + cnt + ' .boton-modificar-login').val(cnt);
    parseInt($('#duplicar-login' + cnt + ' .boton-guardar-login').val(cnt));
    parseInt($('#duplicar-login' + cnt + ' .boton-eliminar-login').val(cnt));

    $('#duplicar-login' + cnt).addClass("content_1");

    /*Reiniciar los valores de los campos del menu login.*/
    $('.login-email').val("");
    $('.login-password').val("");
    $(".submit-login").attr("disabled", true);

} //Final función submit_login_bd($cnt_bd, $email_bd, $password_bd)

/**
 * @author javi98
 * @version 1.0
 * @name modificar_login
 * @description Función para modificar los valores del formulario seleccionado del menu login.
 * @param value variable para saber que formulario hay que modificar.
 */
function modificar_login(value) {

    /*Variable que guarda el parametro de entrada de la función*/
    var $modificar_login = value;

    /*Para que se pueda editar los campos del menu login*/
    $('#duplicar-login' + $modificar_login + ' .mostrar-email-0').prop('disabled', false);
    $('#duplicar-login' + $modificar_login + ' .mostrar-password-0').prop('disabled', false);

    /*Para desactivar el boton modificar y eliminar*/
    $('#duplicar-login' + $modificar_login + ' .boton-modificar-login').prop('disabled', true);
    $('#duplicar-login' + $modificar_login + ' .boton-eliminar-login').prop('disabled', true);

    /*Para mostrar el boton guardar cambios*/
    $('#duplicar-login' + $modificar_login + ' .boton-guardar-login').show();

} //Final función modificar_login(value)

/**
 * @author javi98
 * @version 1.0
 * @name guardar_cambios_login
 * @description Función para guardar los cambios valores del formulario seleccionado del menu login.
 * @param value variable para saber que formulario hay que guardar los cambios.
 */
function guardar_cambios_login(value) {

    /*Variable que guarda el parametro de entrada de la función*/
    var $guardar_login = value;
    var $email = $('#duplicar-login' + $guardar_login + ' .mostrar-email-0').val();
    var $password = $('#duplicar-login' + $guardar_login + ' .mostrar-password-0').val();

    /*Para activar el boton modificar y eliminar*/
    $('#duplicar-login' + $guardar_login + ' .boton-modificar-login').prop('disabled', false);
    $('#duplicar-login' + $guardar_login + ' .boton-eliminar-login').prop('disabled', false);

    /*Para ocultar el boton guardar cambios*/
    $('#duplicar-login' + $guardar_login + ' .boton-guardar-login').removeAttr("style").hide();

    /*Para que se pueda editar los campos del menu login*/
    $('#duplicar-login' + $guardar_login + ' .mostrar-email-0').prop('disabled', true);
    $('#duplicar-login' + $guardar_login + ' .mostrar-password-0').prop('disabled', true);

    /*Llamar a la funcion modificar_login_bd() para guardar los cambios en la base de datos.*/
    modificar_login_bd($guardar_login, $email, $password)

} //Final función guardar_cambios_login(value)

/**
 * @author javi98
 * @version 1.0
 * @name eliminar_login
 * @description Función para eliminar los valores del formulario seleccionado del menu login.
 * @param value variable para saber que formulario hay que guardar los cambios.
 */
function eliminar_login(value) {

    /*Variable que guarda el parametro de entrada de la función*/
    var $eliminar_login = value;

    /*Para eliminar los valores del formulario seleccionado del menu login*/
    $('#duplicar-login' + $eliminar_login).remove();

    /*Llamar a la funcion eliminar_login_bd() para guardar los cambios en la base de datos.*/
    eliminar_login_bd($eliminar_login)

} //Final función eliminar_login(value)

/**
 * @author javi98
 * @version 1.0
 * @name select_compra
 * @description Función para validar el campo select del menu productos.
 * @param 
 */
function select_compra() {

    /*Variable para guardar el valor de select del menu productos*/
    var $producto = $('#select-producto').val();

    /*Para mostrar el valor que contiene el select option del menu productos*/
    $('.compra-precio').val($producto);

    /*Condición de que si el usuario ha escojido cualquiera opcion del select producto se podra utilizar el
    botón submit.*/
    if ($producto != "") {
        $(".submit-compra").removeAttr('disabled');
        $(".boton-modificar-productos").removeAttr('disabled');
        $(".boton-eliminar-productos").removeAttr('disabled');
    } //Final if $producto != ""

} //Final función select_compra()

/**
 * @author javi98
 * @version 1.0
 * @name submit_compra
 * @description Función para mostrar los valores de los campos del menu productos en console.log.
 * @param 
 */
function submit_compra() {

    /*Variables que contiene los valores de los campos del menu login.*/
    var $precio = $('.compra-precio').val();
    var $producto = $("#select-producto option:selected").text();

    /*Mostrar los valores de los campos del menu productos en un console.log*/
    console.clear();
    console.log("Productos");
    console.log("--------------------");
    console.log("Producto: " + $producto);
    console.log("Precio final: " + $precio);

} //Final función submit_compra()

/**
 * @author javi98
 * @version 1.0
 * @name crear_productos
 * @description Función para crear valores para el select option del formulario productos.
 * @param 
 */
function crear_productos() {

    /*Valores que introduce el usuario para el select option del formulario productos mediante un alert*/
    $producto = prompt("Introduzca un nuevo producto:");
    $precio = prompt("Introduzca su precio final (Solo numeros!):");

    if ($producto != "" && $producto != null && $precio != "" && $precio != null) {
        $("#select-producto").append(new Option($producto, $precio));
    } else {
        alert("El formato que has introducido es incorrecto");
    }

    $('.compra-precio').val("");

    /*Para desactivar el boton de modificar, eliminar y submit*/
    $(".boton-modificar-productos").prop('disabled', true);
    $(".boton-eliminar-productos").prop('disabled', true);
    $(".submit-compra").prop('disabled', true);

    /*Llamar a la funcion listar_productos() para mostrar los productos automaticamente*/
    listar_productos()

    /*Llamar a la funcion insertar_producto() para guardarlo en la base de datos*/
    insertar_producto($producto, $precio)

} //Final función crear_productos()

/**
 * @author javi98
 * @version 1.0
 * @name modificar_productos
 * @description Función para modificar los campos del formulario productos.
 * @param 
 */
function modificar_productos() {

    /*Para desactivar los botones de submit, modificar, crear y eliminar*/
    $(".submit-compra").prop('disabled', true);
    $(".boton-modificar-productos").prop('disabled', true);
    $(".compra-producto").prop('disabled', true);
    $(".boton-eliminar-productos").prop('disabled', true);
    $(".boton-crear-productos").prop('disabled', true);

    /*Para que se pueda editar el input precio final*/
    $(".compra-precio").prop('disabled', false);

    /*Para mostrar el boton guardar cambios*/
    $(".boton-guardar-productos").show();

} //Final función modificar_productos()

/**
 * @author javi98
 * @version 1.0
 * @name guardar_cambios_productos
 * @description Función para guardar los cambios de los campos del formulario productos.
 * @param 
 */
function guardar_cambios_productos() {

    /*Para desactivar el boton de crear*/
    $(".boton-crear-productos").prop('disabled', false);
    $(".compra-producto").prop('disabled', false);

    /*Para que no se pueda editar el input precio final*/
    $(".compra-precio").prop('disabled', true);

    /*Para ocultar el boton guardar cambios*/
    $(".boton-guardar-productos").removeAttr("style").hide();

    /*Variable para guardar el valor de select del menu productos*/
    var $producto = $('.compra-producto').val();

    /*Para modificar los valores del select que haya seleccionado el usuario*/
    $precio_value = $('.compra-precio').val();
    $producto_value = $("#select-producto option:selected").text();

    /*Condición de que si el campo del precio del menu productos esta vacio no deje crear un nuevo producto*/
    if ($precio_value != "") {
        $("#select-producto option[value=" + $producto + "]").remove();
        $("#select-producto").append(new Option($producto_value, $precio_value));

        /*Para reiniciar el select*/
        $('#select-producto').prop('selectedIndex', 0);

        /*Para eliminar el valor que contiene el input compra-precio del formulario productos.*/
        $('.compra-precio').val("");

        /*Llamar a la funcion listar_productos() para mostrar los productos automaticamente*/
        listar_productos()

        /*Llamar a la funcion modificar_producto_bd() para guardar los cambios en la base de datos.*/
        modificar_producto_bd($producto_value, $precio_value)
    } else {
        alert("No se puede dejar el campo vacio");

        /*Para reiniciar el select*/
        $('#select-producto').prop('selectedIndex', 0);

        /*Para eliminar el valor que contiene el input compra-precio del formulario productos.*/
        $('.compra-precio').val("");
    } // if $precio_value != ""

} //Final función guardar_cambios_productos()

/**
 * @author javi98
 * @version 1.0
 * @name eliminar_productos
 * @description Función para eliminar el campo seleccionado del formulario productos.
 * @param 
 */
function eliminar_productos() {

    $producto = $("#select-producto option:selected").text();

    /*Para eliminar el valor que contiene el input compra-precio del formulario productos.*/
    $('.compra-precio').val("");

    /*Para eliminar los datos del select que haya escogido el usuario*/
    $("#select-producto option:selected").remove();

    /*Para reiniciar el select*/
    $('#select-producto').prop('selectedIndex', 0);

    /*Para desactivar los botones de submit, modificar y eliminar*/
    $(".submit-compra").prop('disabled', true);
    $(".boton-modificar-productos").prop('disabled', true);
    $(".boton-eliminar-productos").prop('disabled', true);

    /*Llamar a la funcion listar_productos() para mostrar los productos automaticamente*/
    listar_productos()

    /*Llamar a la funcion eliminar_producto_bd() para guardar los cambios en la base de datos.*/
    eliminar_producto_bd($producto)

} //Final función eliminar_productos()

/**
 * @author javi98
 * @version 1.0
 * @name listar_productos
 * @description Función para mostrar los valores del formulario productos.
 * @param 
 */
function listar_productos() {

    /*Variable para indicar la longitud del select del menu productos*/
    var length_productos = $('#select-producto').children('option').length;

    var cnt3 = 0;

    /*Bucle for para  no mostrar valores repetidos del select option del menu productos*/
    for (x = 0; x <= length_productos; x++) {
        $('#duplicar-productos' + x).remove();
    }

    /*Bucle for para imprimir los valores que contiene el select del menu productos*/
    for (x = 0; x < length_productos; x++) {

        if (x != 0) {
            cnt3++;

            /*Variables para duplicar el div duplicar-productos.*/
            var duplicar = document.getElementById('duplicar-productos').cloneNode(true);
            var array_duplicar = duplicar.childNodes;

            /*Cada div que se vaya duplicando contendra con un id diferente al resto de div.
            Por ejemplo: En este caso lo que haria es duplicar-productos0, duplicar-productos1, duplicar-productos2 y etc.*/
            duplicar.id = 'duplicar-productos' + cnt3;

            /*Para mostrar el contenido del div que tenga seleccionada en la variable duplicar en este caso
            la variable duplicar contiene el div duplicar-datos-productos0.*/
            duplicar.style.display = 'block';

            /*Bucle for para recorrer el div duplicar-login para guardarlo en una array que esa array sera
            guardado en la variable clonar.*/
            for (var i = 0; i < duplicar.length; i++) {
                var clonar = array_duplicar[i].name
                if (clonar)
                    array_duplicar[i].name = clonar + cnt3;
            } //Final bucle for i

            /*Variable insertar que sirve para insertar el div duplicar-login al div mostrar-datos-productos.*/
            var insertar = document.getElementById('mostrar-datos-productos');
            insertar.parentNode.insertBefore(duplicar, insertar);

            /*Para crear que cada clase de los input del formulario contenga una clase diferente y que contenga
            el valor que haya insertado el usuario.*/
            var optionvalue = $("select#select-producto").prop('selectedIndex', x).val();

            $('#duplicar-productos' + cnt3 + ' .mostrar-producto-0').val($('#select-producto option[value="' + optionvalue + '"]').text());
            $('#duplicar-productos' + cnt3 + ' .mostrar-precio-0').val($("select#select-producto").prop('selectedIndex', x).val())
            $('#duplicar-productos' + cnt3).addClass("content_3");

        } //Final if x == 0 

    } //Final bucle for

    /*Para desactivar el botón listar productos*/
    $(".boton-listar-productos").attr('disabled', true);
    $(".boton-crear-productos").attr('disabled', false);

    /*Para reiniciar el select*/
    $('#select-producto').prop('selectedIndex', 0);

} //Función listar_productos()

/**
 * @author javi98
 * @version 1.0
 * @name validar_entrega
 * @description Función para validar los campos del menu entrega.
 * @param 
 */
function validar_entrega() {

    /*Variables que contiene los valores de los campos del menu entrega.*/
    var $telefono = $('.entrega-telefono').val();
    var $string_telefono = $telefono.length;
    var $date1 = $('.entrega-fecha1').val();
    var $date2 = $('.entrega-fecha2').val();

    /*Condición de que si el campo telefono no esta vacio entra en esta condición para enviar al usuario que el
    valor del campo telefono que ha introducido el usuario es correcto o no.*/
    if ($telefono != "") {

        if ($string_telefono == 9) {
            $('.entrega-telefono').removeClass("border-danger");
        } else {
            $('.entrega-telefono').addClass("border-danger");
            $(".submit-entrega").attr('disabled', true);
        } //Final if $string_telefono == 9

    } //Final if $telefono != ""

    /*Condición de que si el campo fecha inicio no esta vacio entra en esta condición para enviar al usuario que el
    valor del campo fecha inicio que ha introducido el usuario es correcto o no.*/
    if ($date1 != "") {
        $('.entrega-fecha1').removeClass("border-danger");
        if ($date1 != "") {} else {
            $('.entrega-fecha1').addClass("border-danger");
            $(".submit-entrega").attr('disabled', true);
        }
    }

    /*Condición de que si el campo fecha final no esta vacio entra en esta condición para enviar al usuario que el
    valor del campo fecha final que ha introducido el usuario es correcto o no.*/
    if ($date2 != "") {
        if ($date2 != "") {
            $('.entrega-fecha2').removeClass("border-danger");
        } else {
            $('.entrega-fecha2').addClass("border-danger");
            $(".submit-entrega").attr('disabled', true);
        }
    }

    /*Condición de que si el campo fecha inicio y la fecha final no esta vacio entra en esta condición para enviar al usuario que el
    valor del campo fecha inicio y la fecha final que ha introducido el usuario es correcto o no.*/
    if ($date1 != "" && $date2 != "") {

        /*Condición de que si el valor del campo fecha inicio es menor que el valor del campo fecha final se podra
        utilizar el boton submit siempre y cuando el valor del campo telefono sea correcto.*/
        if ($date1 < $date2) {
            $('.entrega-fecha2').removeClass("border-danger");
            $(".submit-entrega").removeAttr('disabled');
        } else {
            $('.entrega-fecha2').addClass("border-danger");
            $(".submit-entrega").attr('disabled', true);

        } //Final if $date1 < $date2

        /*Condición de que si el numero de telofono si no tiene 9 numeros le enviara al usuario que valor del 
        campo telefono no es correcto.*/
        if ($string_telefono != 9) {
            $(".submit-entrega").attr('disabled', true);
        } //Final if $string_telefono != 9

    } //Final if $date1 != "" && $date2 != ""

} //Final función validar_entrega()

/**
 * @author javi98
 * @version 1.0
 * @name submit_entrega
 * @description Función para mostrar los valores de los campos del menu entrega en console.log.
 * @param 
 */
function submit_entrega() {

    /*Variables que contiene los valores de los campos del menu entrega.*/
    var $telefono = $('.entrega-telefono').val();
    var $date1 = $('.entrega-fecha1').val();
    var $date2 = $('.entrega-fecha2').val();

    /*Mostrar los valores de los campos del menu entrega en un console.log*/
    console.clear();
    console.log("Entrega");
    console.log("--------------------");
    console.log("Telefono: " + $telefono);
    console.log("Fecha inicio: " + $date1);
    console.log("Fecha final: " + $date2);

    /*Guardar el objeto que ha insertado el usuario en el formulario entrega*/
    entrega = {
        telefono: $telefono,
        fecha_inicio: $date1,
        fecha_final: $date2
    };

    /*Subir el objeto a variable de tipo array*/
    entrega_array.push(entrega);

    cnt2++;

    /*Variables para duplicar el div duplicar-entrega.*/
    var duplicar = document.getElementById('duplicar-entrega').cloneNode(true);
    var array_duplicar = duplicar.childNodes;

    /*Cada div que se vaya duplicando contendra con un id diferente al resto de div.
    Por ejemplo: En este caso lo que haria es duplicar-entrega0, duplicar-entrega1, duplicar-entrega2 y etc.*/
    duplicar.id = 'duplicar-entrega' + cnt2;

    /*Para mostrar el contenido del div que tenga seleccionada en la variable duplicar en este caso
    la variable duplicar contiene el div duplicar-entrega.*/
    duplicar.style.display = 'block';

    /*Bucle for para recorrer el div duplicar-entrega para guardarlo en una array que esa array sera
    guardado en la variable clonar.*/
    for (var i = 0; i < duplicar.length; i++) {
        var clonar = array_duplicar[i].name
        if (clonar)
            array_duplicar[i].name = clonar + cnt2;
    } //Final bucle for i

    /*Variable insertar que sirve para insertar el div duplicar-entrega al div mostrar-datos-entrega.*/
    var insertar = document.getElementById('mostrar-datos-entrega');
    insertar.parentNode.insertBefore(duplicar, insertar);

    /*Para crear que cada clase de los input del formulario contenga una clase diferente y que contenga
    el valor que haya insertado el usuario.*/
    $('#duplicar-entrega' + cnt2 + ' .mostrar-telefono-0').val(entrega_array[cnt2].telefono);
    $('#duplicar-entrega' + cnt2 + ' .mostrar-fecha-inicio-0').val(entrega_array[cnt2].fecha_inicio);
    $('#duplicar-entrega' + cnt2 + ' .mostrar-fecha-final-0').val(entrega_array[cnt2].fecha_final);
    $('#duplicar-entrega' + cnt2 + ' .boton-modificar-entrega').val(cnt2);
    parseInt($('#duplicar-entrega' + cnt2 + ' .boton-guardar-entrega').val(cnt2));
    parseInt($('#duplicar-entrega' + cnt2 + ' .boton-eliminar-entrega').val(cnt2));

    $('#duplicar-entrega' + cnt2).addClass("content_2");

    /*Reiniciar los valores de los campos del menu login.*/
    $('.entrega-telefono').val("");
    $('.entrega-fecha1').val("");
    $('.entrega-fecha2').val("");
    $(".submit-entrega").attr("disabled", true);

    /*Llamar a la funcion insertar_entrega() para guardarlo en la base de datos*/
    insertar_entrega(cnt2, $telefono, $date1, $date2)

} //Final función submit_entrega()

/**
 * @author javi98
 * @version 1.0
 * @name submit_entrega_bd
 * @description Función para mostrar los valores de los campos del menu entrega de la base de datos.
 * @param $cnt2_bd valor del id del menu entrega
 * @param $telefono_bd valor del telefono del menu entrega
 * @param $fecha_inicio_bd valor de la fecha_inicio del menu entrega
 * @param $fecha_final_bd valor de la fecha_final del menu entrega
 */
function submit_entrega_bd($cnt2_bd, $telefono_bd, $fecha_inicio_bd, $fecha_final_bd) {

    cnt2 = $cnt2_bd

    /*Guardar el objeto que ha insertado el usuario en el formulario entrega*/
    entrega = {
        telefono: $telefono_bd,
        fecha_inicio: $fecha_inicio_bd,
        fecha_final: $fecha_final_bd
    };

    /*Subir el objeto a variable de tipo array*/
    entrega_array.push(entrega);

    /*Variables para duplicar el div duplicar-entrega.*/
    var duplicar = document.getElementById('duplicar-entrega').cloneNode(true);
    var array_duplicar = duplicar.childNodes;

    /*Cada div que se vaya duplicando contendra con un id diferente al resto de div.
    Por ejemplo: En este caso lo que haria es duplicar-entrega0, duplicar-entrega1, duplicar-entrega2 y etc.*/
    duplicar.id = 'duplicar-entrega' + cnt2;

    /*Para mostrar el contenido del div que tenga seleccionada en la variable duplicar en este caso
    la variable duplicar contiene el div duplicar-entrega.*/
    duplicar.style.display = 'block';

    /*Bucle for para recorrer el div duplicar-entrega para guardarlo en una array que esa array sera
    guardado en la variable clonar.*/
    for (var i = 0; i < duplicar.length; i++) {
        var clonar = array_duplicar[i].name
        if (clonar)
            array_duplicar[i].name = clonar + cnt2;
    } //Final bucle for i

    /*Variable insertar que sirve para insertar el div duplicar-entrega al div mostrar-datos-entrega.*/
    var insertar = document.getElementById('mostrar-datos-entrega');
    insertar.parentNode.insertBefore(duplicar, insertar);

    /*Para crear que cada clase de los input del formulario contenga una clase diferente y que contenga
    el valor que haya insertado el usuario.*/
    $('#duplicar-entrega' + cnt2 + ' .mostrar-telefono-0').val($telefono_bd);
    $('#duplicar-entrega' + cnt2 + ' .mostrar-fecha-inicio-0').val($fecha_inicio_bd);
    $('#duplicar-entrega' + cnt2 + ' .mostrar-fecha-final-0').val($fecha_final_bd);
    $('#duplicar-entrega' + cnt2 + ' .boton-modificar-entrega').val(cnt2);
    parseInt($('#duplicar-entrega' + cnt2 + ' .boton-guardar-entrega').val(cnt2));
    parseInt($('#duplicar-entrega' + cnt2 + ' .boton-eliminar-entrega').val(cnt2));

    $('#duplicar-entrega' + cnt2).addClass("content_2");

    /*Reiniciar los valores de los campos del menu login.*/
    $('.entrega-telefono').val("");
    $('.entrega-fecha1').val("");
    $('.entrega-fecha2').val("");
    $(".submit-entrega").attr("disabled", true);

} //Final función submit_entrega_bd($cnt2_bd, $telefono_bd, $fecha_inicio_bd, $fecha_final_bd)

/**
 * @author javi98
 * @version 1.0
 * @name modificar_entrega
 * @description Función para modificar los valores del formulario seleccionado del menu entrega.
 * @param value variable para saber que formulario hay que modificar.
 */
function modificar_entrega(value) {

    /*Variable que guarda el parametro de entrada de la función*/
    var $modificar_entrega = value;

    /*Para que se pueda editar los campos del menu entrega*/
    $('#duplicar-entrega' + $modificar_entrega + ' .mostrar-telefono-0').prop('disabled', false);
    $('#duplicar-entrega' + $modificar_entrega + ' .mostrar-fecha-inicio-0').prop('disabled', false);
    $('#duplicar-entrega' + $modificar_entrega + ' .mostrar-fecha-final-0').prop('disabled', false);

    /*Para desactivar el boton modificar y eliminar*/
    $('#duplicar-entrega' + $modificar_entrega + ' .boton-modificar-entrega').prop('disabled', true);
    $('#duplicar-entrega' + $modificar_entrega + ' .boton-eliminar-entrega').prop('disabled', true);

    /*Para mostrar el boton guardar cambios*/
    $('#duplicar-entrega' + $modificar_entrega + ' .boton-guardar-entrega').show();

} //Final función modificar_entrega(value)

/**
 * @author javi98
 * @version 1.0
 * @name guardar_cambios_entrega
 * @description Función para guardar los cambios valores del formulario seleccionado del menu entrega.
 * @param value variable para saber que formulario hay que guardar los cambios.
 */
function guardar_cambios_entrega(value) {
    /*Variable que guarda el parametro de entrada de la función*/
    var $guardar_entrega = value;
    var $telefono = $('#duplicar-entrega' + $guardar_entrega + ' .mostrar-telefono-0').val();
    var $date1 = $('#duplicar-entrega' + $guardar_entrega + ' .mostrar-fecha-inicio-0').val();
    var $date2 = $('#duplicar-entrega' + $guardar_entrega + ' .mostrar-fecha-final-0').val();

    /*Para activar el boton modificar y eliminar*/
    $('#duplicar-entrega' + $guardar_entrega + ' .boton-modificar-entrega').prop('disabled', false);
    $('#duplicar-entrega' + $guardar_entrega + ' .boton-eliminar-entrega').prop('disabled', false);

    /*Para ocultar el boton guardar cambios*/
    $('#duplicar-entrega' + $guardar_entrega + ' .boton-guardar-entrega').removeAttr("style").hide();

    /*Para que se pueda editar los campos del menu entrega*/
    $('#duplicar-entrega' + $guardar_entrega + ' .mostrar-telefono-0').prop('disabled', true);
    $('#duplicar-entrega' + $guardar_entrega + ' .mostrar-fecha-inicio-0').prop('disabled', true);
    $('#duplicar-entrega' + $guardar_entrega + ' .mostrar-fecha-final-0').prop('disabled', true);

    /*Llamar a la funcion modificar_entrega_bd() para guardar los cambios en la base de datos.*/
    modificar_entrega_bd($guardar_entrega, $telefono, $date1, $date2)

} //Final función guardar_cambios_entrega(value)

/**
 * @author javi98
 * @version 1.0
 * @name eliminar_entrega
 * @description Función para eliminar los valores del formulario seleccionado del menu entrega.
 * @param value variable para saber que formulario hay que guardar los cambios.
 */
function eliminar_entrega(value) {

    /*Variable que guarda el parametro de entrada de la función*/
    var $eliminar_entrega = value;

    /*Para eliminar los valores del formulario seleccionado del menu entrega*/
    $('#duplicar-entrega' + $eliminar_entrega).remove();

    /*Llamar a la funcion eliminar_entrega_bd() para guardar los cambios en la base de datos.*/
    eliminar_entrega_bd($eliminar_entrega)

} //Final función eliminar_login(value)

/**
 * @author javi98
 * @version 1.0
 * @name select_stock
 * @description Función para validar el campo select del menu stock.
 * @param 
 */
function select_stock() {

    /*Variable para guardar el valor de select del menu stock*/
    var $unidades = $('#select-stock-producto').val();

    /*Para mostrar el valor del select option que haya seleccionado el usuario*/
    $('.stock-unidades').val($unidades);

    /*Condición de que si el usuario ha escojido cualquiera opcion del select producto se podra utilizar el
    botón submit.*/
    if ($unidades != "") {
        $(".submit-stock").removeAttr('disabled');
        $(".boton-modificar-stock").removeAttr('disabled');
        $(".boton-eliminar-stock").removeAttr('disabled');
    } //Final $unidades != ""

} //Final función select_stock()

/**
 * @author javi98
 * @version 1.0
 * @name submit_stock
 * @description Función para mostrar los valores de los campos del menu stock en console.log.
 * @param 
 */
function submit_stock() {

    /*Variables que contiene los valores de los campos del menu stock.*/
    var $producto = $("#select-stock-producto option:selected").text();
    var $unidades = $('.stock-unidades').val();

    /*Mostrar los valores de los campos del menu stock en un console.log*/
    console.clear();
    console.log("Stock");
    console.log("--------------------");
    console.log("Producto: " + $producto);
    console.log("Unidades disponibles: " + $unidades);

} //Final función submit_stock()

/**
 * @author javi98
 * @version 1.0
 * @name crear_stock
 * @description Función para crear valores para el select option del formulario stock.
 * @param 
 */
function crear_stock() {

    /*Valores que introduce el usuario para el select option del formulario stock mediante un alert*/
    $producto = prompt("Introduzca un nuevo producto:");
    $unidades = prompt("Introduzca las unidades disponibles (Solo numeros!):");

    if ($producto != "" && $producto != null && $unidades != "" && $unidades != null) {
        $("#select-stock-producto").append(new Option($producto, $unidades));
    } else {
        alert("El formato que has introducido es incorrecto");
    }

    $('.stock-unidades').val("");

    /*Para desactivar el boton de modifcar, eliminar y submit*/
    $(".boton-modificar-stock").prop('disabled', true);
    $(".boton-eliminar-stock").prop('disabled', true);
    $(".submit-stock").prop('disabled', true);

    /*Llamar a la funcion listar_stock() para mostrar los productos automaticamente*/
    listar_stock()

    /*Llamar a la funcion insertar_stock() para guardarlo en la base de datos*/
    insertar_stock($producto, $unidades)


} //Final función crear_productos()

/**
 * @author javi98
 * @version 1.0
 * @name modificar_stock
 * @description Función para modificar los campos del formulario stock.
 * @param 
 */
function modificar_stock() {

    /*Para desactivar los botones de submit, modificar, crear y eliminar*/
    $(".submit-stock").prop('disabled', true);
    $(".boton-modificar-stock").prop('disabled', true);
    $(".stock-producto").prop('disabled', true);
    $(".boton-eliminar-stock").prop('disabled', true);
    $(".boton-crear-stock").prop('disabled', true);

    /*Para que se pueda editar el input precio final*/
    $(".stock-unidades").prop('disabled', false);

    /*Para mostrar el boton guardar cambios*/
    $(".boton-guardar-stock").show();

} //Final función modificar_stock()

/**
 * @author javi98
 * @version 1.0
 * @name guardar_cambios_stock
 * @description Función para guardar los cambios de los campos del formulario stock.
 * @param 
 */
function guardar_cambios_stock() {

    /*Para desactivar el boton de crear*/
    $(".boton-crear-stock").prop('disabled', false);
    $(".stock-producto").prop('disabled', false);

    /*Para que no se pueda editar el input precio final*/
    $(".stock-unidades").prop('disabled', true);

    /*Para ocultar el boton guardar cambios*/
    $(".boton-guardar-stock").removeAttr("style").hide();

    /*Variable para guardar el valor de select del menu stock*/
    var $producto = $('.stock-producto').val();

    /*Para modificar los valores del select que haya seleccionado el usuario*/
    $unidades_stock_value = $('.stock-unidades').val();
    $producto_stock_value = $("#select-stock-producto option:selected").text();

    /*Condición de que si el campo del precio del menu productos esta vacio no deje crear un nuevo producto*/
    if ($unidades_stock_value != "") {
        $("#select-stock-producto option[value=" + $producto + "]").remove();
        $("#select-stock-producto").append(new Option($producto_stock_value, $unidades_stock_value));

        /*Para reiniciar el select*/
        $('#select-stock-producto').prop('selectedIndex', 0);

        /*Para eliminar el valor que contiene el input compra-precio del formulario stock.*/
        $('.stock-unidades').val("");

        /*Llamar a la funcion listar_stock() para mostrar los productos automaticamente*/
        listar_stock()

        /*Llamar a la funcion modificar_stock_bd() para guardar los cambios en la base de datos.*/
        modificar_stock_bd($producto_stock_value, $unidades_stock_value)
    } else {
        alert("No se puede dejar el campo vacio");

        /*Para reiniciar el select*/
        $('#select-stock-producto').prop('selectedIndex', 0);

        /*Para eliminar el valor que contiene el input compra-precio del formulario stock.*/
        $('.stock-unidades').val("");

    } // if $unidades_stock_value != ""

} //Final función guardar_cambios_stock()

/**
 * @author javi98
 * @version 1.0
 * @name eliminar_stock
 * @description Función para eliminar el campo seleccionado del formulario stock.
 * @param 
 */
function eliminar_stock() {

    /*Para eliminar el valor que contiene el input compra-precio del formulario stock.*/
    $('.stock-unidades').val("");
    $producto_stock_value = $("#select-stock-producto option:selected").text();

    /*Para eliminar los datos del select que haya escogido el usuario*/
    $("#select-stock-producto option:selected").remove();

    /*Para reiniciar el select*/
    $('#select-stock-producto').prop('selectedIndex', 0);

    /*Para desactivar los botones de submit, modificar y eliminar*/
    $(".submit-stock").prop('disabled', true);
    $(".boton-modificar-stock").prop('disabled', true);
    $(".boton-eliminar-stock").prop('disabled', true);

    /*Llamar a la funcion listar_stock() para mostrar los productos automaticamente*/
    listar_stock()

    /*Llamar a la funcion eliminar_stock_bd() para guardar los cambios en la base de datos.*/
    eliminar_stock_bd($producto_stock_value)

} //Final función eliminar_stock()

/**
 * @author javi98
 * @version 1.0
 * @name listar_stock
 * @description Función para mostrar los valores del formulario stock.
 * @param 
 */
function listar_stock() {

    /*Variable para indicar la longitud del select del menu stock*/
    var length_stock = $('#select-stock-producto').children('option').length;

    var cnt4 = 0;

    /*Bucle for para  no mostrar valores repetidos del select option del menu stock*/
    for (x = 0; x <= length_stock; x++) {
        $('#duplicar-stock' + x).remove();
    }

    /*Bucle for para imprimir los valores que contiene el select del menu stock*/
    for (x = 0; x < length_stock; x++) {

        if (x != 0) {
            cnt4++;

            /*Variables para duplicar el div duplicar-stock.*/
            var duplicar = document.getElementById('duplicar-stock').cloneNode(true);
            var array_duplicar = duplicar.childNodes;

            /*Cada div que se vaya duplicando contendra con un id diferente al resto de div.
            Por ejemplo: En este caso lo que haria es duplicar-stock0, duplicar-stock1, duplicar-stock2 y etc.*/
            duplicar.id = 'duplicar-stock' + cnt4;

            /*Para mostrar el contenido del div que tenga seleccionada en la variable duplicar en este caso
            la variable duplicar contiene el div duplicar-datos0.*/
            duplicar.style.display = 'block';

            /*Bucle for para recorrer el div duplicar-login para guardarlo en una array que esa array sera
            guardado en la variable clonar.*/
            for (var i = 0; i < duplicar.length; i++) {
                var clonar = array_duplicar[i].name
                if (clonar)
                    array_duplicar[i].name = clonar + cnt4;
            } //Final bucle for i

            /*Variable insertar que sirve para insertar el div duplicar-stock al div mostrar-datos.*/
            var insertar = document.getElementById('mostrar-datos-stock');
            insertar.parentNode.insertBefore(duplicar, insertar);

            /*Para crear que cada clase de los input del formulario contenga una clase diferente y que contenga
            el valor que haya insertado el usuario.*/
            var optionvalue = $("select#select-stock-producto").prop('selectedIndex', x).val();
            $('#duplicar-stock' + cnt4 + ' .mostrar-producto-stock-0').val($('#select-stock-producto option[value="' + optionvalue + '"]').text());
            $('#duplicar-stock' + cnt4 + ' .mostrar-unidades-0').val($("select#select-stock-producto").prop('selectedIndex', x).val())
            $('#duplicar-stock' + cnt4).addClass("content_4");

        } //Final if x == 0 

    } //Final bucle for

    /*Para desactivar el botón listar stock*/
    $(".boton-listar-stock").attr('disabled', true);
    $(".boton-crear-stock").attr('disabled', false);

    /*Para reiniciar el select*/
    $('#select-stock-producto').prop('selectedIndex', 0);

} //Función listar_productos()

/*---------- Llamadas de los botones del menu ----------*/

/*Llamada a la función iniciar_aplicacion de tipo click*/
$(".boton-iniciar-aplicacion").click(function () {
    /*Variables que contiene los valores de los campos del menu login.*/
    var $email = $('.login-email').val();
    var $password = $('.login-password').val();

    iniciar_aplicacion($email, $password);
})

/*Llamada a la función menu_login de tipo click*/
$(".boton-login").click(function () {
    menu_login();
})

/*Llamada a la función menu_compra de tipo click*/
$(".boton-compra").click(function () {
    menu_compra();
})

/*Llamada a la función menu_entrega de tipo click*/
$(".boton-entrega").click(function () {
    menu_entrega();
})

/*Llamada a la función menu_stock de tipo click*/
$(".boton-stock").click(function () {
    menu_stock();
})

/*---------- Llamadas del formulario login ----------*/

/*Llamada a la función validar_login de tipo keyup*/
$(".login-email").keyup(function () {
    validar_login();
})

/*Llamada a la función validar_login de tipo keyup*/
$(".login-password").keyup(function () {
    validar_login();
})

/*Llamada a la función submit_login de tipo click*/
$(".submit-login").click(function () {
    submit_login();
})

/*---------- Llamadas del formulario productos ----------*/

/*Llamada a la función select_stock_producto de tipo change*/
$("#select-producto").change(function () {
    select_compra();
})

/*Llamada a la función submit_compra de tipo click*/
$(".submit-compra").click(function () {
    submit_compra();
})

/*Llamada a la función modificar_productos de tipo click*/
$(".boton-modificar-productos").click(function () {
    modificar_productos();
})

/*Llamada a la función guardar_cambios_productos de tipo click*/
$(".boton-guardar-productos").click(function () {
    guardar_cambios_productos();
})

/*Llamada a la función crear_productos de tipo click*/
$(".boton-crear-productos").click(function () {
    crear_productos();
})

/*Llamada a la función eliminar_productos de tipo click*/
$(".boton-eliminar-productos").click(function () {
    eliminar_productos();
})

/*Llamada a la función listar_productos_bd de tipo click*/
$(".boton-listar-productos").click(function () {
    listar_productos_bd();
})

/*---------- Llamadas del formulario entrega ----------*/

/*Llamada a la función validar_entrega de tipo keyup*/
$(".entrega-telefono").keyup(function () {
    validar_entrega();
})

/*Llamada a la función validar_entrega de tipo change*/
$(".entrega-fecha1").change(function () {
    validar_entrega();
})

/*Llamada a la función validar_entrega de tipo change*/
$(".entrega-fecha2").change(function () {
    validar_entrega();
})

/*Llamada a la función submit_entrega de tipo click*/
$(".submit-entrega").click(function () {
    submit_entrega();
})

/*---------- Llamadas del formulario stock ----------*/

/*Llamada a la función select_stock de tipo change*/
$("#select-stock-producto").change(function () {
    select_stock();
})

/*Llamada a la función submit_stock de tipo click*/
$(".submit-stock").click(function () {
    submit_stock();
})

/*Llamada a la función modificar_stock de tipo click*/
$(".boton-modificar-stock").click(function () {
    modificar_stock();
})

/*Llamada a la función guardar_cambios_stock de tipo click*/
$(".boton-guardar-stock").click(function () {
    guardar_cambios_stock();
})

/*Llamada a la función crear_stock de tipo click*/
$(".boton-crear-stock").click(function () {
    crear_stock();
})

/*Llamada a la función eliminar_stock de tipo click*/
$(".boton-eliminar-stock").click(function () {
    eliminar_stock();
})

/*Llamada a la función listar_stock_bd de tipo click*/
$(".boton-listar-stock").click(function () {
    listar_stock_bd();
})