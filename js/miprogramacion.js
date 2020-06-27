$(document).ready(function () {
    $("a").click(function(){
        
        $("#contenido").load($(this).attr("href"));
        return false;
    })
});