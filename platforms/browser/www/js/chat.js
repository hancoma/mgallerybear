function open_chat (no) {

	var modal = UIkit.modal("#modal_chat");


    modal.show();


   var no=no;
 $.post("http://gallerybear.com/chat_list_app.php",
   {
    no:no
    
       },
   function(data){
$("#chat_body").html(data);
   });
 	$("#room_no").val(no);
}
function save_chat() {
	var room_no=$("#room_no").val();
	console.log(no);
	var chat_msg=$("#chat_msg").val();
	console.log(chat_msg);
}