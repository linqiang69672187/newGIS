function REGMsg(msg, dispName)
          { //author: meizz 
              console.info(msg+'|'+dispName);
              window.vue_notice.regmsg(false,msg,dispName);
          }
           
function CallMsg(issi,eventtype,msg,gssi,hookmethodsel){
    window.vue_dialplate.CallMsg(issi,eventtype,msg,gssi,hookmethodsel);
}

function openwindows(windowstr){
    alert(windowstr);
    console.info(windowstr);
}