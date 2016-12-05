var user_id = window.localStorage.getItem("user_id");
var memberuid = window.localStorage.getItem("memberuid");

function open_left() {
    UIkit.offcanvas.show('#offcanvas-left');
    load_left();
}

function open_right() {
    UIkit.offcanvas.show('#offcanvas-right');
    load_right();
}

// msg 
function alertDismissed() {
    // do something
}

function alert_msg(title,msg) {
    var title=title;
    var msg=msg;
   navigator.notification.alert(
    msg,  // message
    alertDismissed,         // callback
    title,            // title
    'OK'                  // buttonName
);
}
function load_left() {
    $.post("http://gallerybear.com/left_menu_app.php",
   {
    
    
       },
   function(data){
$("#left_menu").html(data);
   });
}

function load_right() {
    $.post("http://gallerybear.com/right_menu_app.php",
   {
    
    
       },
   function(data){
$("#right_menu").html(data);
   });
}

function talent_show(cat) {
  var cat=cat;
  // 지도 숨김 
  $("#map").hide();
  $("#top_banner").show();
 $.post("http://gallerybear.com/talent_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
  UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function freeboard_show(cat) {
  var cat=cat;
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/freeboard_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function parade_show(cat) {
  var cat=cat;
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/parade_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function chat_job_show(cat) {
  var cat=cat;
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/chat_job_app.php",
   {
    sub_code:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function chat_show() {
    $("#map").hide();
  $("#top_banner").show();
 
   $.post("http://gallerybear.com/chat_app.php",
   {
    
    memebruid:memberuid
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}
function friend_show() {
    $("#map").hide();
  $("#top_banner").show();
 
   $.post("http://gallerybear.com/around_list_app.php",
   {
    
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function more_friend() {
  var last_no=$("#last_no").val();
  console.log(last_no);
    $.post("http://gallerybear.com/around_list_app.php",
   {
    last_no:last_no
    
       },
   function(data){

$("#company_list").append(data);
var obj = $("#member_list").offset();
console.log("left: " + obj.left + "px, top: " + obj.top + "px");

$("#member_list").css("margin-top", obj.top);
   });

}

function global_show(sub_code) {
  var sub_code=sub_code;
   $("#map").hide();
  $("#top_banner").show();
 
   $.post("http://gallerybear.com/global_list_app.php",
   {
    sub_code:sub_code
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function more_global(sub_code) {
  var last_no=$("#last_no").val();
  var sub_code=sub_code;
  console.log(last_no);
    $.post("http://gallerybear.com/global_list_app.php",
   {
    last_no:last_no,
    sub_code:sub_code
    
       },
   function(data){

$("#company_list").append(data);
var obj = $("#member_list").offset();
console.log("left: " + obj.left + "px, top: " + obj.top + "px");

$("#member_list").css("margin-top", obj.top);
   });

}


function premium_show(sub_code) {
  var sub_code=sub_code;
   $("#map").hide();
  $("#top_banner").show();
 	console.log(sub_code);
  if (sub_code==1) {
    var url="http://gallerybear.com/premium1_app.php";
  }
  if (sub_code==2) {
    var url="http://gallerybear.com/premium2_app.php";
  }
  if (sub_code==3) {
    var url="http://gallerybear.com/premium3_app.php";
  }
  if (sub_code==4) {
    var url="http://gallerybear.com/premium4_app.php";
  }

   $.post(url,
   {
    
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function premium_search_show(sub_code,data1,data2,data3,data4) {
  var sub_code=sub_code;
	var data1=data1;
  	var data2=data2;
  	var data3=data3;
  	var data4=data4;
  console.log(data2);  
  if (sub_code==1) {
  	


  	
    var url="http://gallerybear.com/premium1_app.php";
  }
  if (sub_code==2) {
    var url="http://gallerybear.com/premium2_app.php";
  }
  if (sub_code==3) {
    var url="http://gallerybear.com/premium3_app.php";
  }
  if (sub_code==4) {
    var url="http://gallerybear.com/premium4_app.php";
  }

   $.post(url,
   {
    data1:data1,
    data2:data2,
    data3:data3,
    data4:data4    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}




    function map_menu_show() {
      $("#map_sub_menu").toggle(500);
      // body...
    }
    function freeboard_menu_show() {
 
      $("#freeboard_sub_menu").toggle(500);
      // body...
 }
 function self_camera_menu_show () {
      $("#self_camera_sub_menu").toggle(500);
      // body...
  }
  function parade_menu_show() {
      $("#parade_sub_menu").toggle(500);
      // body...
 }
 function sns_menu_show() {
      $("#sns_sub_menu").toggle(500);
     
}
function global_menu_show() {
      $("#global_sub_menu").toggle(500);
 }
 function premium_menu_show() {
      $("#premium_sub_menu").toggle(500);
  
 }
 // 메뉴 클릭
// 맵 보이기 
function map_show(kind_no) {
  var kind_no=kind_no;
  var url="http://gallerybear.com/map_kind_app.php";
  UIkit.offcanvas.hide('#offcanvas-left');
   $.post(url,
   {
    kind_no:kind_no
    
       },
   function(data){

$("#company_list").html(data);
$("#map").show();
$("#top_banner").hide();
 
   });
}
// 모달 호출 
function contents_modal_show(menu,no) {
    var menu=menu;
    var no=no;
    if (menu=="talent") {
      var url="http://gallerybear.com/talent_info_modal_app.php";
    }
    if (menu=="freeboard") {
      var url="http://gallerybear.com/freeboard_info_modal_app.php";
    }
if (menu=="parade") {
      var url="http://gallerybear.com/parade_info_modal_app.php";
    }

     $.post(url,
   {
    no:no
    
       },
   function(data){

$("#modal_contents").html(data);

   });

var modal = UIkit.modal("#contents_uk_modal");


    modal.show();

 jQuery("#modal_title").html(menu);
}

function member_info_modal_show(memberuid) {
  var memberuid=memberuid;
    $.post("http://gallerybear.com/member_info_modal_app.php",
   {
    no:memberuid
    
       },
   function(data){

$("#member_modal_contents").html(data);

   });


var modal = UIkit.modal("#member_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 

}


function open_shop(no) {
  var no=no;
    $.post("http://gallerybear.com/shop_info_modal_app.php",
   {
    no:no
    
       },
   function(data){

$("#shop_modal_contents").html(data);

   });
$("#shop_modal_title").html("SHOP INFORMATION")

var modal = UIkit.modal("#shop_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 

}

function zzim_member(uid) {
 
  var uid2=uid;
  console.log(memberuid+" "+uid2);
   $.post("http://gallerybear.com/add_zzim.php",
   {
    uid:memberuid,
    uid2:uid2
   },
   function(data){
      
     alert_msg("member","member picked member !");
    
   });
}
function msg_send(uid,msg) {
  var my_uid=memberuid;
  var by_uid=uid;
  var msg=msg;
    $.post("http://gallerybear.com/msg_save_app.php",
   {
    my_uid:my_uid,
    by_uid:by_uid,
    msg:msg
   },
   function(data){
      
     alert_msg("member","SEND MESSAGE");
    
   });
}
//  콘텐츠 등록 

function add_talent(cat) {
  var cat=cat;
  console.log("category="+cat)
    $.post("http://gallerybear.com/self_camera_app.php",
   {
    memberuid:memberuid,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("UPLOAD SELF CAEMRA")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

function add_freeboard(cat) {
  var cat=cat;
  console.log("category="+cat)
    $.post("http://gallerybear.com/freeboard_app.php",
   {
    memberuid:memberuid,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("WRITE FREEBOARD")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

function add_parade(cat) {
  var cat=cat;
  console.log("category="+cat)
    $.post("http://gallerybear.com/parade_app.php",
   {
    memberuid:memberuid,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("WRITE LET'S DRIVE")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

// 프로필 대표 사진 설정
function file_check(no) {
  var no=no;
  console.log(no);
  $.post("http://gallerybear.com/file_check_app.php",
   {
    memberuid:memberuid,
    no:no
    
       },
   function(data){

    view_photo_upload();

   });
}

// 프로필 대표 사진 설정
function file_delete(no) {
  var no=no;
  console.log(no);
  $.post("http://gallerybear.com/file_delete_app.php",
   {
    memberuid:memberuid,
    no:no
    
       },
   function(data){

    view_photo_upload();

   });
}
 