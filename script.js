var counter = 0;

$("button").click(function() {
    counter = counter + 1;
    
    $(".cnter").text("This quiz has been taken " + counter + " times.");

    
 var friendly = parseInt($(".friendly").val());
 var athletic = $(".athletic").val();
    
 

if (friendly >= "5" && athletic === "Yes") {
    $(".message").text("You are Stu!").append("<img class=\"character\"src=https://static.wikia.nocookie.net/animalcrossing/images/f/fa/Stu_NH.png/revision/latest/scale-to-width-down/618?cb=20200702072336>");  
}
    
   else if (friendly < "5" && athletic === "Yes") {
     $(".message").text("You are Billy!").append("<img class=\"character\"src=https://static.wikia.nocookie.net/animalcrossing/images/2/26/Billy_NH.png/revision/latest?cb=20200802145715>");
   }

    else if (friendly >= "5" && athletic === "No") {
     $(".message").text("You are Cookie!").append("<img class=\"character\"src=https://static.wikia.nocookie.net/animalcrossing/images/d/d9/Cookie_NH.png/revision/latest?cb=20200802135053>");
   }
    
        else if (friendly < "5" && athletic === "No") {
     $(".message").text("You are Bob!").append("<img class=\"character\"src=https://dodo.ac/np/images/thumb/e/ea/Bob_NH.png/150px-Bob_NH.png>");
   }

});
