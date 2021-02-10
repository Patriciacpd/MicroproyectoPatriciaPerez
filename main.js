var datos_skill = [
    { 
        "nombre":"Javascript",
    "habilidad": "70"
    },
    {
    "nombre":"CSS",
    "habilidad": "75"
    },
    {
    "nombre":"HTML",
    "habilidad": "80"
    }
    ,
    ,{
    "nombre":"Python",
    "habilidad": "85"
    }
    ];
function iniciar(){
	cargar();
	carrusel();
} 

    function cargar(){
    var div = document.getElementById("skills");
    datos_skill.forEach((e)=>{
    var htmlInner =  '<div class="ski"> <strong class="barra" style="width:'+e["habilidad"]+'%;">'+ e["nombre"]+" "+e["habilidad"]+'%</strong></div>';
    div.innerHTML = div.innerHTML+htmlInner;
    })
    }
    
   function carrusel() {
  
    imagenes= ["img/imagen1.jpg","img/imagen2.jpg","img/imagen3.jpg"];
    i=0;
    window.setInterval(function(){
        document.getElementById("showcase").style.backgroundImage="url('"+imagenes[i]+"')";
        i++;
        if(i>2) i=0;
    },8000);
}