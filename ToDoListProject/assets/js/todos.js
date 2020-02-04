//Check off Specific Todos by clicking
//This means when an li is clicked, inside of a "ul", run this code

//The ul is there, when the page loaded, but the li may  or may not be there when the page loaded. 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed"); 	
});

//Click on X to delete Todo
$("ul").on("click", "span",function(event){
	//.parent() will trace the parent and work on it.
	$(this).parent().fadeOut(500,function(){
		//$(this) is changed to the parent()
		$(this).remove();
	})
	//event.stopPropagation() stops from events bubbling up
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		//Grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//Create a new li and add to ul
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}

});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

/*
	In most cases, click() and on('click') will both get the job done. However,
	there is one key difference:

	--> click() only adds listeners for existing elements
	--> on() will add listeners for all potential future elements

*/