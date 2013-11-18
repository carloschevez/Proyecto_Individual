var mascotas = new Array();
var mascota = new Object();
  mascota.nombre = null;
  mascota.edad = null;
  mascota.especie = null;
  mascota.sexo = null;
  mascota.foto = null;

function crear_objeto(nombre, edad, especie, sexo, foto){
  mascotas.push({"nombre": nombre, "edad": edad, "especie": especie, "sexo": sexo, "foto": foto});
}

function llenar_array(){
  crear_objeto("Ruffo", "1 año", "perro", "Macho", "imagenes/adopta/p1.jpg");
  crear_objeto("Nico", "3 meses", "perro", "Macho", "imagenes/adopta/p2.jpg");
  crear_objeto("Molly", "9 meses", "perro", "Hembra", "imagenes/adopta/p3.jpg");
  crear_objeto("Paris", "2 años", "perro", "Hembra", "imagenes/adopta/p4.jpg");
  crear_objeto("Taca", "3 años", "perro", "Macho", "imagenes/adopta/p5.jpg");
  crear_objeto("Sasha", "1 año", "perro", "Hembra", "imagenes/adopta/p6.jpg");
  crear_objeto("Rocky", "10 meses", "perro", "Macho", "imagenes/adopta/p7.jpg");
  crear_objeto("Princesa", "3 meses", "perro", "Hembra", "imagenes/adopta/p8.jpg");

  crear_objeto("Blacky", "1 año", "gato", "Macho", "imagenes/adopta/g1.jpg");
  crear_objeto("Lucky", "11 meses", "gato", "Macho", "imagenes/adopta/g2.jpg");
  crear_objeto("Mich", "2 meses", "gato", "Hembra", "imagenes/adopta/g3.jpg");
  crear_objeto("Garfield", "2 años", "gato", "Macho", "imagenes/adopta/g4.jpg");
  crear_objeto("Nyan", "1 año", "gato", "Macho", "imagenes/adopta/g5.jpg");
  crear_objeto("Niebla", "1 año", "gato", "Hembra", "imagenes/adopta/g6.jpg");
  crear_objeto("Skitty", "2 años", "gato", "Hembra", "imagenes/adopta/g7.jpg");
  crear_objeto("Chuck", "3 años", "gato", "Macho", "imagenes/adopta/g8.jpg");
}

function adopta(nombre){
  var info = document.getElementById('info');
  document.getElementById('info').innerHTML  = "";

  if(nombre == 1){
    $('#info').css('width', 500+ "px");

    for(var i = 0; i < mascotas.length; i++)
    {
      if (mascotas[i]["especie"] == "perro")
      {
        var div1 = document.createElement('div');
        div1.setAttribute("class", "info_perro");
        div1.setAttribute("onclick", "formu_adopcion();");
        var img = document.createElement('img');
        var url = mascotas[i]["foto"].toString();
        img.setAttribute("src", url);

        var nombre = document.createTextNode(mascotas[i]["nombre"].toString());

        var edad = document.createTextNode(mascotas[i]["edad"].toString());

        var sexo = document.createTextNode(mascotas[i]["sexo"].toString());


        div1.appendChild(nombre);
        b = document.createElement('br');
        div1.appendChild(b);
        div1.appendChild(img);
        b = document.createElement('br');
        div1.appendChild(b);
        div1.appendChild(edad);
        b = document.createElement('br');
        div1.appendChild(b);
        div1.appendChild(sexo);
        b = document.createElement('br');
        div1.appendChild(b);
        info.appendChild(div1);
      }
    }
  }
  else
  {
    $('#info').css('width', 500+ "px");

    for(var i = 0; i < mascotas.length; i++)
    {
      if (mascotas[i]["especie"] == "gato")
      {
        var div1 = document.createElement('div');
        div1.setAttribute("class", "info_gato");
        div1.setAttribute("onclick", "formu_adopcion();");
        
        var img = document.createElement('img');
        var url = mascotas[i]["foto"].toString();
        img.setAttribute("src", url);

        var nombre = document.createTextNode(mascotas[i]["nombre"].toString());

        var edad = document.createTextNode(mascotas[i]["edad"].toString());

        var sexo = document.createTextNode(mascotas[i]["sexo"].toString());


        div1.appendChild(nombre);
        b = document.createElement('br');
        div1.appendChild(b);
        div1.appendChild(img);
        b = document.createElement('br');
        div1.appendChild(b);
        div1.appendChild(edad);
        b = document.createElement('br');
        div1.appendChild(b);
        div1.appendChild(sexo);
        b = document.createElement('br');
        div1.appendChild(b);
        info.appendChild(div1);
      }
    }
  }
}

window.onload = function(){   
  llenar_array();
}

function formu_adopcion() {
  var inf = document.getElementById("info");
  info.innerHTML = 'Rellene el siguiente formulario, por favor: <br><br><table align="center"> <form name="formulario" id="adopcion"> <tr> <td> <label>Nombre Completo: </label> </td> <td> <input name="txtNombre" id="txtNombre" type="text"> </td> </tr> <tr> <td> <label>Edad: </label> </td> <td> <input  name="txtEdad" id="txtEdad" type="text"> </td> </tr> <tr> <td> <label>E-mail: </label> </td> <td> <input  name="txtEmail" id="txtEmail" type="text"> </td> </tr> <tr> <td> <label>Direccion: </label> </td> <td> <input  name="txtDireccion" id="txtDireccion" type="text"> </td> </tr> <tr> <td> <label>Teléfono: </label> </td> <td> <input  name="txtTelefono" id="txtTelefono" type="text"> </td> </tr> <tr> <td> </td> <td> <input id="btnaceptar"  type="button" value="Aceptar" onclick="validar()" /> </td> </tr> </form> </table>';
    
    var btnaceptar = document.getElementById("btnaceptar");
    btnaceptar.onclick = function(){
     var formulario = document.getElementById("adopcion");
  evaluar(formulario);
  }
  

  $('#info').css('width', 400+ "px");
}

function evaluar(form){
  var nombre = /^[a-z A-ZñÑ]*$/;
  var edad = /^([0-9]+\s*)+$/;
  var correo = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  var direccion = /^[A-Z0-9 a-z]*$/;
  var telefono = /^\d{4}[-]\d{4}$/;

  if(!nombre.test(form.txtNombre.value)){
    alert("El nombre solo puede contener letras y espacios.");   
  } else if(!edad.test(form.txtEdad.value)){
    alert("La edad solo puede contener números");
  } else if(!telefono.test(form.txtTelefono.value)){
    alert("El formato del teléfono es: ####-####.");
  } else if(!correo.test(form.txtEmail.value)){
    alert("Correo electrónico inválido");
  } else if(!direccion.test(form.txtDireccion.value)){
    alert("La dirección puede contener solo letras, espacios y números.");
  }
  else{
    var r =confirm("¿Aceptas las responsabilidades que trae consigo el cuidar a una mascota?");
    if(r==true){
      do{ var captcha = prompt("Prueba de CAPTCHA: ¿Cuánto es 2+2?");
      if(captcha == "4"){
        alert("¡Gracias! En breve nos pondremos en contacto contigo.");
      }
      else{
        alert("ERROR: CAPTCHA INCORRECTO");
      }
      }while(captcha != "4")

    }
    else{
      alert("¡Gracias por tu interés!")
    }
  }
}