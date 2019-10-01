$(document).ready(function() {
    $("#room_t1").click(function(){
        $("#room_k1").fadeIn(800);
        $("#room_k1").css("display" , "list-item");
        $("#room_k2").css("display" , "none");
        $("#room_k3").css("display" , "none");
        $("#room_t1").css("background-color","#EEB4B4");
        $("#room_t2").css("background-color","white");
        $("#room_t3").css("background-color","white");
        $("#room_t1").css("color","white");
        $("#room_t2").css("color","black");
        $("#room_t3").css("color","black");
    });
});
$(document).ready(function() {
    $("#room_t2").click(function(){
        $("#room_k2").fadeIn(800);
        $("#room_k2").css("display" , "list-item");
        $("#room_k1").css("display" , "none");
        $("#room_k3").css("display" , "none");
        $("#room_t2").css("background-color","#EEB4B4");
        $("#room_t1").css("background-color","white");
        $("#room_t3").css("background-color","white");
        $("#room_t2").css("color","white");
        $("#room_t1").css("color","black");
        $("#room_t3").css("color","black");
    });
});
$(document).ready(function() {
    $("#room_t3").click(function(){
        $("#room_k3").fadeIn(800);
        $("#room_k3").css("display" , "list-item");
        $("#room_k2").css("display" , "none");
        $("#room_k1").css("display" , "none");
        $("#room_t3").css("background-color","#EEB4B4");
        $("#room_t2").css("background-color","white");
        $("#room_t1").css("background-color","white");
        $("#room_t3").css("color","white");
        $("#room_t2").css("color","black");
        $("#room_t1").css("color","black");
    });
});