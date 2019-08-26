$(".txtb").on("keyup" , function(e){
//     13 means enter botton
    if(e.keyCode == 13 && $(".txtb").val() !=  "")
      {
       var task = $("<div class='task'></div>").text($(".txtb").val());
       var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            task.hide();
          
        });
          var check = $("<i class='fas fa-check'></i>").click(function(){
            $(".comp").append(task);
          });
       var edit =  $("<i class='fa fa-edit'></i>").click(function(){
        
        $(".txtb").val(task.text());
         task.hide();
    });
        
        
          
        task.append(del,check,edit);
        
        $(".notcomp").append(task);
}
});