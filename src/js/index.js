import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';


$(document).ready(function(){
    $(".nav-item").click(function(){
        // احدف الصنف active من الزر الدي لديه الصنف nav-item 
        $(".nav-item").removeClass("active");
        // اضف الصنف active الى الزر الدي ضغط عليه 
        $(this).addClass("active");
      });

    $("a.scroll").on("click", function(event){
        var hash = this.hash;
        $("html, body").animate({scrollTop: $(hash) .offset() .top - 100}, 800, function(){});
    });


    $(function(){
        $("#commentform").validate();
    });

    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('date').innerHTML = year;

});




