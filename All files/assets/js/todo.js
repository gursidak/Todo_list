// $('.trash-box').on('click' , function(){

// });


// adding strike-through effect on clicking li;

$('ul').on('click' , 'li' , function(){
	console.log('i am here');
	$(this).toggleClass('completed');

});

// removing todo function on clicking trashbox;

$('ul').on('click' , '.trash-box' , function(event){
	event.stopPropagation();
	$(this).parent().fadeOut('slow' , function(){
		$(this).remove();
	});
});


// adding new todo function

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotext = $('input').val();
		$('input').val('')
		$('ul').append("<li><span class='trash-box'><i class='fa fa-trash'></i></span> " + todotext + "</li>");		
	}
});


$('#plus').on('click' , function(){
	$("input[type='text']").slideToggle('fast');
});