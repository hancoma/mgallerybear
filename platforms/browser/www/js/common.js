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
    '확인'                  // buttonName
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
 $.post("http://gallerybear.com/talent_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
   });

}

function freeboard_show(cat) {
  var cat=cat;
 $.post("http://gallerybear.com/freeboard_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
   });

}

function parade_show(cat) {
  var cat=cat;
 $.post("http://gallerybear.com/parade_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
   });

}

function chat_job_show(cat) {
  var cat=cat;
 $.post("http://gallerybear.com/chat_job_app.php",
   {
    sub_code:cat
    
       },
   function(data){

$("#company_list").html(data);
   });

}

function chat_show() {
   $.post("http://gallerybear.com/chat_app.php",
   {
    
    
       },
   function(data){

$("#company_list").html(data);
   });

}
function friend_show() {
   $.post("http://gallerybear.com/around_list_app.php",
   {
    
    
       },
   function(data){

$("#company_list").html(data);
   });

}

function global_show(sub_code) {
  var sub_code=sub_code;
   $.post("http://gallerybear.com/global_list_app.php",
   {
    sub_code:sub_code
    
       },
   function(data){

$("#company_list").html(data);
   });

}

function premium_show(sub_code) {
  var sub_code=sub_code;
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
  $("#parade_menu").click(
    function () {
      $("#parade_sub_menu").toggle(500);
      // body...
    })
  $("#sns_menu").click(
    function () {
      $("#sns_sub_menu").toggle(500);
      // body...
    })
  $("#global_menu").click(
    function() {
      $("#global_sub_menu").toggle(500);
    })
  $("#premium_menu").click(
    function() {
      $("#premium_sub_menu").toggle(500);
    })
  // 메뉴 클릭
