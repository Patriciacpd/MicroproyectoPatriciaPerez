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
    
    function cargar(){
    var div = document.getElementById("skills");
    datos_skill.forEach((e)=>{
    var htmlInner =  '<div class="ski"> <strong class="barra" style="width:'+e["habilidad"]+'%;">'+ e["nombre"]+" "+e["habilidad"]+'%</strong></div>';
    div.innerHTML = div.innerHTML+htmlInner;
    })
    }
    
   