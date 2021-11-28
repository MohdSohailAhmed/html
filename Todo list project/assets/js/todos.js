$("ul").on("click","li",function () {
	$(this).toggleClass("completed");		
});
// X to delete the todo

$("ul").on("click","span",function (event) {
  $(this).parent().fadeOut(500,function(){
  $(this).remove();
  });
    event.stopPropagation();
});

// to add the input text in the new todo list

$("input[type='text'").keypress(function (event) {
 if (event.which === 13){
    var todoText= $(this).val();
    $(this).val(" ");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>")
  }
});

$(".fa-edit").click(function(){
$("input[type='text'").fadeToggle();
});