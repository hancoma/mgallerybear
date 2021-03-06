var add_category;
var add_mode;
var add_contents;
var add_room_no;

// guest house카메라 
function getImage_guesthouse() {
        
        navigator.camera.getPicture(uploadPhoto_guesthouse, function(message) {
alert('get picture failed');
},{
quality: 2,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});}

function uploadPhoto_guesthouse(imageURI) {
       var memberuid=$("#guesthouse_memberuid").val();
  var code=$("#guesthouse_code").val();
  var cat=$("#guesthouse_cat").val();

         navigator.notification.activityStart("PHOTO UPLOAD", "uploading photo");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        params.mode="guesthouse";
        params.memberuid=memberuid;
        params.code=code;
        
        params.category=cat;
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://m.gallerybear.com/upload_app.php", win_guesthouse, fail_guesthouse, options);
    }


function win_guesthouse(r) {
      var code=$("#guesthouse_code").val();
navigator.notification.activityStop();
  reload_guesthouse_input(code);
  
}


function fail_guesthouse(error) {
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}




// 프리보드 카메라 
function getImage_freeboard() {
        
        navigator.camera.getPicture(uploadPhoto_freeboard, function(message) {
alert('get picture failed');
},{
quality: 2,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});}

function uploadPhoto_freeboard(imageURI) {
       var memberuid=$("#freeboard_memberuid").val();
  var code=$("#freeboard_code").val();
  var cat=$("#freeboard_cat").val();
         navigator.notification.activityStart("PHOTO UPLOAD", "uploading photo");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        params.mode="freeboard";
        params.memberuid=memberuid;
        params.code=code;
        
        params.category=cat;
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://m.gallerybear.com/upload_app.php", win_freeboard, fail_freeboard, options);
    }


function win_freeboard(r) {
      var code=$("#freeboard_code").val();
navigator.notification.activityStop();
  reload_freeboard_input(code);
  
}


function fail_freeboard(error) {
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}


// 셀프 카메라 
function getImage_selfcamera() {
        
        navigator.camera.getPicture(uploadPhoto_selfcamera, function(message) {
alert('get picture failed');
},{
quality: 2,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});}

function uploadPhoto_selfcamera(imageURI) {
       var memberuid=$("#selfcamera_memberuid").val();
  var code=$("#selfcamera_code").val();
  var cat=$("#selfcamera_cat").val();
         navigator.notification.activityStart("PHOTO UPLOAD", "uploading photo");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        params.mode="talent";
        params.memberuid=memberuid;
        params.code=code;
        
        params.category=cat;
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://m.gallerybear.com/upload_app.php", win_selfcamera, fail_selfcamera, options);
    }


function win_selfcamera(r) {
      var code=$("#selfcamera_code").val();
navigator.notification.activityStop();
  reload_selfcamera_input(code);
  
}


function fail_selfcamera(error) {
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}




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
