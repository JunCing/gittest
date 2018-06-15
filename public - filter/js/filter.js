var thisData;
var len;
var List = document.querySelector('.list');
var str="";
var resultsStr =0;
var tagStr="";
var TAGBOX = document.querySelector('.tagBox');
var Total = document.querySelector('.dataTotal');



var xhr = new XMLHttpRequest();

xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
xhr.send(null);
xhr.onload = function(){
    var data = JSON.parse(xhr.responseText);
    thisData = data.result.records;
    len = thisData.length;
    for(var i=0;i<len;i++){
        if(thisData[i].Zone == '三民區'){
            resultsStr ++; 
            str += '<li><a href=""><img class="listImg" src="'+thisData[i].Picture1+'" alt=""> <div class="listContent"><h2>'+thisData[i].Name+'</h2><p>'+thisData[i].Description.substr(0,65)+'...</p><span class="region">'+thisData[i].Zone+'</span><span class="free">'+thisData[i].Ticketinfo+'</span><br><span class="address"><i class="fas fa-map-marker"></i>'+thisData[i].Add+'</span><span class="phone"><i class="fas fa-mobile-alt"></i>'+thisData[i].Tel+'</span><br><span class="listContent_date"><i class="far fa-clock"></i>'+thisData[i].Opentime+'</span></div></a></li>';
            
        }
    }
    Total.textContent = resultsStr;
    List.innerHTML = str; //'<li><a href=""><img class="listImg" src="'+thisData[i].Picture1+'" alt=""> <div class="listContent"><h2>'+thisData[i].Name+'</h2><p>'+thisData[i].Description.substr(0,65)+'</p><span class="region">'+thisData[i].Zone+'</span><span class="free">'+thisData[i].Ticketinfo+'</span><br><span class="address"><i class="fas fa-map-marker"></i>'+thisData[i].Add+'</span><span class="phone"><i class="fas fa-mobile-alt"></i>'+thisData[i].Tel+'</span><br><span class="listContent_date"><i class="far fa-clock"></i>'+thisData[i].Opentime+'</span></div></a></li>';

}

var area = document.querySelector('#menu');
area.addEventListener('change',updatelist);



function updatelist(e){
    var str="";
    var resultsStr = 0;
    var tagStr="";
    var areaSelect = e.target.value;
    for(var i=0;i<len;i++){
        if(thisData[i].Zone == areaSelect){
            //str +='<li><a href=""><img class="listImg" src="'+thisData[i].Picture1+'" alt=""> <div class="listContent"><h2>'+thisData[i].Name+'</h2><p>'+thisData[i].Description+'</p><span class="region">'+thisData[i].Zone+'</span><span class="free">'+thisData[i].Ticketinfo+'</span><br><span class="address"><i class="fas fa-map-marker"></i>'+thisData[i].Add+'</span><span class="phone"><i class="fas fa-mobile-alt"></i>'+thisData[i].Tel+'</span><br><span class="listContent_date"><i class="far fa-clock"></i>'+thisData[i].Opentime+'</span></div></a></li>'
            resultsStr ++; 
            str +='<li><a href=""><img class="listImg" src="'+thisData[i].Picture1+'" alt=""> <div class="listContent"><h2>'+thisData[i].Name+'</h2><p>'+thisData[i].Description.substr(0,55)+'</p><span class="region">'+thisData[i].Zone+'</span><span class="free">'+thisData[i].Ticketinfo+'</span><br><span class="address"><i class="fas fa-map-marker"></i>'+thisData[i].Add+'</span><span class="phone"><i class="fas fa-mobile-alt"></i>'+thisData[i].Tel+'</span><br><span class="listContent_date"><i class="far fa-clock"></i>'+thisData[i].Opentime+'</span></div></a></li>'
            tagStr = '<span class="Area">'+areaSelect+'<i class="far fa-times-circle"></i></span>'
        }

    }
  Total.textContent = resultsStr;  
  TAGBOX.innerHTML = tagStr;
  List.innerHTML = str;
}



var clickDown1 =document.querySelector('.click1')
var clickDown2 =document.querySelector('.click2')
var clickDown3 =document.querySelector('.click3')
var select = document.querySelector('.selectMenu')
var dateInput = document.querySelector('.dateInput')
var categories = document.querySelector('.Categories')


clickDown1.addEventListener('click', show1);
clickDown2.addEventListener('click', show2);
clickDown3.addEventListener('click', show3);

function show1(){
    if(select.classList.contains('dd_up')){
        select.classList.remove('dd_up')
        select.style.height = "68px"
        //select.classList.add('select_down');
        
    }else {
        select.style.height="0px"
        //select.classList.remove('select_down')
        select.classList.add('dd_up');
    }
}
function show2(){
    if(dateInput.classList.contains('dd_up')){
        dateInput.classList.remove('dd_up')
        dateInput.style.height = '125px'
        
    }else  {
        dateInput.style.height = '0px'
        dateInput.classList.add('dd_up');
    }
}
function show3(){
    if(categories.classList.contains('dd_up')){
        categories.classList.remove('dd_up')
        categories.style.height = '155px'
        
    }else  {
        categories.style.height = '0px'
        categories.classList.add('dd_up');
    }
}


/*var checking = document.querySelectorAll('checked');


for(var i=0;i<checking.length;i++){
    checking[i].addEventListener('click',filter);

}

var checkvalue;
var areaSelect;
function filter(e){
    
   var checkvalue = checking[i].checked;
   var areaSelect = area.target.value
    for(var i=0;i<len;i++){
        if(thisData[i].Zone == areaSelect &&  thisData[i].Ticketinfo == checkvalue ){
                 
            resultsStr ++; 
            str +='<li><a href=""><img class="listImg" src="'+thisData[i].Picture1+'" alt=""> <div class="listContent"><h2>'+thisData[i].Name+'</h2><p>'+thisData[i].Description.substr(0,55)+'</p><span class="region">'+thisData[i].Zone+'</span><span class="free">'+thisData[i].Ticketinfo+'</span><br><span class="address"><i class="fas fa-map-marker"></i>'+thisData[i].Add+'</span><span class="phone"><i class="fas fa-mobile-alt"></i>'+thisData[i].Tel+'</span><br><span class="listContent_date"><i class="far fa-clock"></i>'+thisData[i].Opentime+'</span></div></a></li>'
            tagStr = '<span class="Area">'+areaSelect+'<i class="far fa-times-circle"></i></span><span class="Area">'+checkvalue+'<i class="far fa-times-circle"></i></span>'
        }
    }
  Total.textContent = resultsStr;  
  TAGBOX.innerHTML = tagStr;
  List.innerHTML = str;
}*/
 













//<span class="Area">Koahsiung<i class="far fa-times-circle"></i></span> <span class="Species">Entertainment<i class="far fa-times-circle"></i></span>
/*<li>
<img class="listImg" src="http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960" alt=""> 
<div class="listContent">
   <h2>ssssss</h2>
   <p>dsgdfgsgfgfgsfgdsfgfgsfgsfgsfggsfg</p>
   <span class="region">sssss</span>
   <span class="free">ssssshhhhhhhhhhhhhhhh</span><br>
   <span class="address"><i class="fas fa-map-marker"></i>sssss</span>
   <span class="phone"><i class="fas fa-mobile-alt"></i>sssss</span><br>
   
   <span class="listContent_date"><i class="far fa-clock"></i>ghgfhg</span>
</div>





</li>*/
/*<option value="">--請選擇行政區--</option>*/