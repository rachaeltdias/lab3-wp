$(document).ready(function(){
	 $("p").click(function(){
  		$(this).toggle();
     })
    
    $("body").append('<div class="added">Welcome to my lab! </div>');
    $("body").append('<div class="divvy">This is an added div </div>');
    $("body").append('<div class="divvy">This is another added div </div>');
    $(".divvy").css("background-color","yellow");
    $("button#secret").click(function(){
  		$("p.message").toggle();
		$("button#name").click(function(){
  		$("body").append('<div class="n">Rachael</div>');
       });
})
})
