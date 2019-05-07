// JavaScript Document

$(document).ready(function(e) {
    document. addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft", function(){
			navigator.notificacion.alert("Deslizo hacia la izquierda",function(){"Aplicacion ","Aceptar"});
		});
		
		$('#derecha').on("swiperight", function(){
			navigator.notificacion.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notificacion.beep(1);
					break;
					
					case 2:
					navigator.notificacion.vibrate(1000);
					break;
				}
			},"Aplicacion ","Beep, Vibrar, Cancelar");
			
		});
	},false);
});