var add_category;
var add_mode;
var add_contents;
var add_room_no;

//  메시지 이미지 업로드
function getImage_msg() {
     var from_uid=$("#from_uid").val();
  var to_uid=$("#to_uid").val();
  var msg_room_no=$("#msg_room_no").val();


       
        navigator.camera.getPicture(uploadPhoto_chat, function(message) {
alert('get picture failed');
},{
quality: 2,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});}


function uploadPhoto_chat(imageURI) {
       var from_uid=$("#from_uid").val();
  var to_uid=$("#to_uid").val();
  var msg_room_no=$("#msg_room_no").val();
         navigator.notification.activityStart("PHOTO UPLOAD", "uploading photo");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
       
        params.file_memberuid=from_uid;
        params.to_uid=to_uid;
        
        params.file_room_no=msg_room_no;
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://m.gallerybear.com/save_msg_app.php", win_msg, fail_msg, options);
    }


function win_msg(r) {
        var from_uid=$("#from_uid").val();
  var to_uid=$("#to_uid").val();
  var msg_room_no=$("#msg_room_no").val();
navigator.notification.activityStop();
 msg_room(msg_room_no,from_uid,to_uid);
}


function fail_msg(error) {
        navigator.notification.activityStop();
        var error=error;
        alert_msg("notice","upload error");

    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}


function getImage(cat,mode) {
    add_category=cat;
    add_mode=mode;
    if (add_mode=="freeboard") {
    add_contents=$("#freeboard_contents").val();
    } else if (add_mode=="parade")
    {
         add_contents=$("#parade_contents").val();
    } else if (add_mode=="chat"){
        add_room_no=$("#room_no").val();
    }


        console.log("camera"+cat + "mode "+add_mode+ " contents "+ add_contents);
        // Retrieve image file location from specified source
        navigator.camera.getPicture(uploadPhoto, function(message) {
alert('get picture failed');
},{
quality: 2,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});}
    function uploadPhoto(imageURI) {
        console.log("category = "+add_category);
         navigator.notification.activityStart("PHOTO UPLOAD", "uploading photo");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        params.category=add_category;
        params.mode=add_mode;
        params.memberuid=memberuid;
        params.contents=add_contents;
        params.room_no=add_room_no;
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://m.gallerybear.com/upload_app.php", win, fail, options);
    }

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
navigator.notification.activityStop();
if (add_mode=="talent") {
      talent_show(add_category);
  } else if (add_mode=="freeboard") {

     freeboard_show(add_category);
  } else if (add_mode=="parade") {
    parade_show(add_category); 
  } else if (add_mode=="profile") {
    view_photo_upload();
  }

 var modal = UIkit.modal("#add_contents_uk_modal");
    modal.hide();       
        

    }

    function fail(error) {
        navigator.notification.activityStop();

    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
