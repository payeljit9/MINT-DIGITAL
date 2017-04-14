                        

/* plus */
$(document).ready(function(){
    $("#plus").click(function(){
        $("#side-one").slideToggle();
        $("#plus").hide();
        $("#minus").show();
       
    });
});

/* plus 2 */
$(document).ready(function(){
    $("#plus2").click(function(){
        $("#side-two").slideToggle();
        $("#plus2").hide();
        $("#minus2").show();
    });
});

/* plus 3 */
$(document).ready(function(){
    $("#plus3").click(function(){
        $("#side-three").slideToggle();
        $("#plus3").hide();
        $("#minus3").show();
    });
});

/* minus */
$(document).ready(function(){
    $("#minus").click(function(){
        $("#side-one").slideToggle();
        $("#plus").show();
        $("#minus").hide();
       
    });
});
/* minus 2 */
$(document).ready(function(){
    $("#minus2").click(function(){
        $("#side-two").slideToggle();
        $("#plus2").show();
        $("#minus2").hide();
       
    });
});
/* minus 3 */
$(document).ready(function(){
    $("#minus3").click(function(){
        $("#side-three").slideToggle();
        $("#plus3").show();
        $("#minus3").hide();
       
    });
});