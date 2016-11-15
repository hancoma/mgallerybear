function save_freeboard_comment(no) {
	var no=no;
	var freeboard_comment=$("#freeboard_comment").val();
	  $.post("http://gallerybear.com/freeboard_comment_save.php",
   {
    no:no,
    memberuid:memberuid,
    freeboard_comment:freeboard_comment
    
       },
   function(data){
          if (data=="ok") {
            alert_msg("freeboard","save_comment");
          }
   });

	
}