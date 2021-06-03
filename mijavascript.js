var bulbContainer;
var bulbImage;
var btnToggle;
var texto;

//Evento load implícito desde el objeto window
window.onload = ()=>{ 
    bulbContainer = document.getElementsByClassName("bulb");
    bulbImage = document.getElementById("bulb");
    btnToggle = document.getElementsByClassName("btn-danger")[0];

    if (btnToggle){
        btnToggle.addEventListener("click",lampara.toggleBulb)
    }
}

//Evento load explícito responde al onload del elemento body. 
bodyload = () => { 
    bulbContainer = document.getElementsByClassName("bulb");
    bulbImage = document.getElementById("bulb");
    btnToggle = document.getElementsByClassName("btn-danger")[0];

    if (btnToggle){
        btnToggle.addEventListener("click",lampara.toggleBulb)
    }
}

var lampara = {
    toggleBulb : () => {
    //alert("arrow function desde objeto lampara...");
    if (bulbImage.src.match("bulbon") != null) 
        {
        bulbImage.src = "img/bulbimages/bulboff.png";
        bulbContainer[0].style.backgroundImage = "url('./bulbimages/bulbbackground.png')";  
        texto = document.getElementById('text');
        alert = texto;
        texto[0].innerHTML = '<h1> hola mundo</h1>';
    } 
    else {
        

        bulbImage.src = "img/bulbimages/bulbon.png";
        bulbContainer[0].style.backgroundImage = "url('./bulbimages/bulbbackground2.png')";   
        texto = document.getElementById('text');
        texto.textContent = 'Encienda la lámpara...';
            }
                }
            }