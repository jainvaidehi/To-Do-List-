//check off todo list by clickeing 
$("ul").on("click","li",function()
{
$(this).toggleClass("completed");
});

// click bin to delete toddo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
$(this).remove();

	});
		event.stopPropagation();
	
});
$("input[type='text']").keypress(function(event){
if(event.which === 13)
{
	var tdt=$(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+tdt+"</li>")
}
})
$(".fa-edit").click(function()
{
	$("input[type='text']").fadeToggle();
})