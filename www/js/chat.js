function open_chat (no) {




   var no=no;
 $.post("http://gallerybear.com/chat_list_app.php",
   {
    no:no
    
       },
   function(data){
$("#chat_body").html(data);
   });
 	$("#room_no").val(no);

    var modal = UIkit.modal("#modal_chat", {center: true});


    modal.show();

}
function save_chat() {
  console.log(memberuid);
	var room_no=$("#room_no").val();
	var chat_msg=$("#chat_msg").val();
	if (!chat_msg){
		alert_msg("msg","no comment !!");
		exit;
	}

		$.post("http://gallerybear.com/chat_save_app.php",
   {
   	room_no:room_no,
   	memberuid:memberuid,
   	chat_msg:chat_msg
    
       },
   function(data){
	open_chat(room_no);
	$("#chat_msg").val('');
   });
}
function gotop() {
  console.log("top");
   
}

function make_chat_open_job() {
   var modal = UIkit.modal("#make_room_job_modal", {center: true});


    modal.show();

      $.post("http://gallerybear.com/job_subject_list_app.php",
   {
    
       },
   function(data){
    var data=data;
      $("#make_room_job_modal_body").html(data);
   });

}


function make_room_job() {
    
  var subject=$("#list_subject").val();

   $.post("http://gallerybear.com/make_room.php",
   {
    uid:memberuid,
    subject:subject,
    room_kind:2
    
       },
   function(data){

    chat_job_show2();
     var modal = UIkit.modal("#make_room_job_modal", {center: true});


    modal.hide();

   });
  
    
  }

  function make_chat_open() {
   var modal = UIkit.modal("#make_room_modal", {center: true});


    modal.show();

     

}
function make_chat_close() {
   var modal = UIkit.modal("#make_room_modal", {center: true});


    modal.hide();

     

}


function make_room() {
    
  var subject=$("#chat_subject").val();
  if (!subject) {
    alert_msg("MESSAGE","NOT INPUT CHAT ROOM SUBJECT");
    exit;
  }
   $.post("http://gallerybear.com/make_room.php",
   {
    memberuid:memberuid,
    subject:subject,
    room_kind:1
    
       },
   function(data){

    $.post("http://gallerybear.com/chat_app.php",
   {
    
    memebruid:memberuid
    
       },
   function(data){

$("#company_list").html(data);
make_chat_close();

   });

   });
  
    
  }

  function delete_room(no) {
    var uid=no;
     $.post("http://gallerybear.com/delete_room_app.php",
   {
    uid:uid
    
       },
   function(data){

    chat_show2();
   
  var modal = UIkit.modal("#modal_chat", {center: true});


    modal.hide();
   });
   
  }

    function delete_room_job(no) {
    var uid=no;
     $.post("http://gallerybear.com/delete_room_app.php",
   {
    uid:uid
    
       },
   function(data){

    chat_job_show2();
   
  var modal = UIkit.modal("#modal_chat", {center: true});


    modal.hide();
   });
   
  }
