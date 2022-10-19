function mostrarOption(){
            
    var getSelectValue = document.getElementById("myselect_contact").value;
    var getIdTelephone = document.getElementById("id_telefono");
    var getIdEmail = document.getElementById("id_email");
    if(getSelectValue=="telefono") {
        getIdTelephone.style.display = "block";
        getIdEmail.style.display = "none";
    
    }else if(getSelectValue=="email"){
        getIdEmail.style.display = "block";
        getIdTelephone.style.display = "none";

    }else{
        getIdEmail.style.display = "none";
        getIdTelephone.style.display = "none";
    }    
}
function MostrarTerminos(){
    var getTerminos = document.getElementById("terminos");
    getTerminos.style.display = "block";
}