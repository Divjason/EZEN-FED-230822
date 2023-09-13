jQuery(function($){
    $(".menu-toggle-btn").click(function(){
        $(".gnb").stop().slideToggle("fast");
    });
});