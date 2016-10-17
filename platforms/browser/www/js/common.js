function open_left() {
    UIkit.offcanvas.show('#offcanvas-left');

}

function open_right() {
    UIkit.offcanvas.show('#offcanvas-right');

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