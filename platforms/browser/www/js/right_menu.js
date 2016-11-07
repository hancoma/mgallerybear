// 내 정보 보기
function view_mypage() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_info_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#member_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 

$("#member_modal_contents").html(data);

   });




}

function view_msg() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_message_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("MESSAGE LIST");
$("#mypage_modal_contents").html(data);

   });

}


function view_view_list() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_view_list_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("VIEW LIST");
$("#mypage_modal_contents").html(data);

   });

}

function view_picked_member() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_pickedmember_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("PICKED MEMBER LIST");
$("#mypage_modal_contents").html(data);

   });

}


function view_picked_me() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_pickedme_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("PICKED ME");
$("#mypage_modal_contents").html(data);

   });

}


function view_photo_upload() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_photoupload_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("PHOTO UPLOAD");
$("#mypage_modal_contents").html(data);

   });

}


function view_change_password() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_changepassword_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("CHANGE PASSWORD");
$("#mypage_modal_contents").html(data);

   });

}

function view_membershipwithdrawal() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/membershipwithdrawal_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("membership with drawal");
$("#mypage_modal_contents").html(data);

   });

}

function view_setup() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/setup_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("SETUP");
$("#mypage_modal_contents").html(data);

   });

}