function REGMsg(msg, dispName){ 
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
var useprameters={};
useprameters.Emapurl="http://10.8.59.251:8081/";
useprameters.maptype ="png";
useprameters.maxLevel=16;
useprameters.minLevel=7;
useprameters.PGIS_Center_lo="120.1727667529";
useprameters.PGIS_Center_la="30.2286735631";
useprameters.GISTYPE="tianditu";
useprameters.name = "zhej";
useprameters.lockids=[
   // {issi:'24001',lon:'120.1727667529',lat:'30.2186735631',name:'张警官',userid:'1'},
   // {issi:'24002',lon:'120.1525667529',lat:'30.2186735631',name:'林警官',userid:'3'},
   // {issi:'24003',lon:'120.1725667529',lat:'30.2266735631',name:'朱警官',userid:'2'},
]
useprameters.lockid='2'
function projectScreen(id,lon,lat){
console.info(id);

}
//useprameters.lockids.splice(0, 1, {issi:'24001',lon:'120.1727667529',lat:'30.2166735631',name:'张1警官',userid:'1'});