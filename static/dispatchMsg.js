function REGMsg(msg, dispName){ 
              console.info(msg+'|'+dispName);
              //window.vue_notice.info(title,msg);
              //window.vue_notice.error(title,msg);
              window.vue_index.regmsg(msg,dispName);
}          
function CallMsg(issi,eventtype,msg,gssi,hookmethodsel){
    window.vue_dialplate.CallMsg(issi,eventtype,msg,gssi,hookmethodsel);
}
function SMSMsg(issi,smstype,msg,id, isconsume){
    window.vue_index.$refs.banner.newsmsIn(issi,smstype,msg,id, isconsume);
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
useprameters.currentLevel=8;  //currentLevel
useprameters.PGIS_Center_lo="120.1727667529";
useprameters.PGIS_Center_la="30.2286735631";
useprameters.GISTYPE="tianditu"; //tianditu,google
useprameters.name = "zhej";
useprameters.usename = "LQ";
useprameters.servertime = "1571984937504";
useprameters.defaultLanguage="zh-CN";
useprameters.SystemType ="1";
useprameters.lockids=[
   {issi:'24001',lon:'120.1504666',lat:'30.1817166',name:'张警官',userid:'1'},
    {issi:'24002',lon:'120.1525667529',lat:'30.2186735631',name:'林警官',userid:'3'},
    {issi:'24003',lon:'120.1725667529',lat:'30.2266735631',name:'朱警官',userid:'2'}
]
useprameters.lockid='2'
function projectScreen(id,lon,lat){
console.info(id);

}
function LoadEvents(){
        function boxSelection(){
            console.info("boxSelection");
        }
        function zoomIn(){  //放大

        }
        function zoomOut(){ //缩小

        }
        return boxSelection;
}
//useprameters.lockids.splice(0, 1, {issi:'24001',lon:'120.1727667529',lat:'30.2166735631',name:'张1警官',userid:'1'});

//window.vue_index.$refs.banner.updateuseprameters();已准备好参数可以更新界面了
//window.vue_index.init();

/*
[‎2019/‎10/‎28 16:13] 张谦: 
<% 
                     if (ConfigurationManager.AppSettings["SystemType"].ToString() == "2") 
                     { 
                                 %>eTRA GIS_HELP_SEA/help.html<% 
                     } 
                     else if (ConfigurationManager.AppSettings["defaultLanguage"].ToString() == "zh-CN") 
                     { 
                                %>eTRA GIS_HELP/help.html<% 
                                
                     } 
                     else 
                     { 
                            %>eTRA GIS_HELP_En/help.html<% 
                     } 
           
                    
                    %>

*/

function onClick(e, treeId, treeNode) { 


}
function displaypolicelistsdiv(){
    console.info("displaypolicelistsdiv");
}