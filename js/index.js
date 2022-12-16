$(document).ready(function() {

    const usuario = $("#txtUsuario");
    const salida_Usuario = $("#salida_Usuario");

    const nombre = $("#txtNombre");
    const salida_Nombre = $("#salida_Nombre");

    const correo = $("#txtCorreo");
    const salida_Correo = $("#salida_Correo");

    const celular = $("#txtCelular");
    const salida_celular = $("#salida_Celular");

    const Contrasena = $("#txtContrasena");
    const salida_Contrasena = $("#salida_Contrasena");

    const RepContrasena = $("#txtRepContrasena");
    const salida_ReContrasena = $("#salida_ContraRep");

    const btnEnviar = $("#btnEnviar");

    btnEnviar.click(function() {
        
        let Value_Usuario = usuario.val();
        salida_Usuario.text("");
        let RegExp_Usuario = /^[A-Za-z]*[0-9]*_$/

        let Value_Nombre = nombre.val();
        salida_Nombre.text("");
        let RegExp_Nombre = /^[A-ZÑ]{1}[a-zñ]*([\s]?[A-ZÑ]{1}[a-zñ]*)*$/;

        let ValueCorreo = correo.val();
        salida_Correo.text("");
        let RegExp_Correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let ValueCelular = celular.val();
        salida_celular.text("");
        let RegExp_Celular = /^\+?[1-9]\d{1,14}$/;

        let Value_Contrasena = Contrasena.val();
        salida_Contrasena.text("");
        let RegExp_Contrasena = /\w/;

        let ValueRecontrasena = RepContrasena.val();
        salida_ReContrasena.text("");
  
        if(!RegExp_Usuario.test(Value_Usuario)){
        salida_Usuario.text(`No es válido. Ingrese un nombre de usuario + "_". Ejemplo: "Carla"`);
        return false;
        } else if (!RegExp_Nombre.test(Value_Nombre)){
            salida_Nombre.text("No es válido");
            return false;
        } else if(!RegExp_Correo.test(ValueCorreo)){
            salida_Correo.text("No es válido");
            return false;
        } else if(!RegExp_Celular.test(ValueCelular)){
            salida_celular.text("No es válido");
            return false;
        }else if(!RegExp_Contrasena.test(Value_Contrasena)){
            salida_Contrasena.text("No es válido"); 
            return false;
        }else if(ValueRecontrasena != Value_Contrasena){
            salida_ReContrasena.text("Las contraseñas no son iguales");
            return false;
        }else{
            return true;
        }
    });
});
