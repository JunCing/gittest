//var taskData = JSON.parse(localStorage.getItem('listData')) || [];

//var AddBox = document.querySelector('.addbox');
//AddBox.addEventListener('click',ADD);
//updateList(taskData);
var pen = document.querySelector('.Pen');
var toto = document.querySelector('.TOTXT');
var dd = document.querySelector('#DDD')
var sta = document.querySelector('.status')
var list = document.querySelector('.list');
//toto.style.display = 'block';
//sta.style.display ='none';
//pen.classList.add('penColor');
//dd.className ='ddd'

//pen.addEventListener('click',TODO);
var star = document.querySelector('#Star');
//star.addEventListener('click',fous);
var List = document.querySelector('.list')

var Task = document.querySelector('.addTask');
//Task.addEventListener("click",Archiving);






/*function ADD(){
    
    event.stopPropagation() ;
    var todo = {
        
    }
    taskData.push(todo);
    updateList(taskData);
 
   localStorage.setItem('listData',JSON.stringify(taskData));
   
}
var LISTBOX =document.querySelector(".listbox")
var datalen 


function updateList(taskData){
    var LISTBOX =document.querySelector(".listbox")
   var str='';
   datalen = taskData.length;

   for(var i=0;i<datalen;i++){
        str +='<ul class="list"><li class="listContent"><input class="checked" type="checkbox"><span class="listTxt">'+taskData[i]+'</span><span class="mark"><i id="Star" class="fas fa-star fontStyle  starColor"></i></i></span><span class="edit"><i class="fas fa-pencil-alt fontStyle Pen penColor" ></i></span></li><li class="status"><span class="date"><i class="far fa-calendar-alt iconfont"> 5/14</i></span><span class="addfile"><i class="far fa-file iconfont"></i></span><span class="Comment"><i class="far fa-comment-dots iconfont"></i></span></li>  </ul>      <div id="DDD" class="dddup" ><div class="TOTXT"><h3><i class="far fa-calendar-alt iconfont"></i>Deadline</h3><input class="date" type="date" id="bookdate" placeholder="2014-09-18"><input type="time" name="usr_time"><h3><i class="far fa-file iconfont"></i>File</h3><label class="labelStyle"><input class="fileStyle" type="button" style="display:block;" value="&#x2795;"><i class="fa fa-photo"></i> </label><h3><i class="far fa-comment-dots iconfont"></i>Comment</h3>  <div class="CommentStyle">Type your memo here…</div> <input class="TOTXTBtn Cancel" type="button" value="x Cancel"><input class="TOTXTBtn addTask"  type="button" value="+ Add Task"></div></div> </div>'
        
    
    }
   LISTBOX.innerHTML = str;
}*/



    pen.addEventListener('click',TODO);
    star.addEventListener('click',fous);
    Task.addEventListener("click",Archiving);







/*pen.addEventListener('click',close)*/

function TODO(){
   
   
    
        if(dd.classList.contains('ddd')){
        pen.classList.remove('penColor')
        pen.classList.add('penOut');
        dd.classList.remove('ddd');
        dd.classList.add('dddup');
        sta.style.display ='block';
        list.style.height="102px"
        //dd.className = 'dddup'
    }else{
        pen.classList.remove('penOut') 
        pen.classList.add('penColor');
        dd.classList.remove('dddup');
        dd.classList.add('ddd')
        sta.style.display ='none';
        list.style.height="70px"
        //sta.style.height="0px";
        
        //dd.className ='ddd';
    }
    

    
    
    
}


function fous(){
    
    

if(star.classList.contains('starColor')){
        star.classList.remove('starColor')
        star.classList.add('starColorClick');
        List.style.backgroundColor ="#FFF2DC"

    }else {
        star.classList.remove('starColorClick')
        star.classList.add('starColor');
        List.style.backgroundColor = "#F2F2F2";
    }

     
    
}

function Archiving(){
        pen.classList.remove('penColor')
        pen.classList.add('penOut');
        dd.classList.remove('ddd');
        dd.classList.add('dddup');
        sta.style.display ='block';
        list.style.height="102px"
}


var menubtn = document.querySelectorAll('.menu a');
var i ;
for (var i =0 ;i<menubtn.length;i++){
    
    menubtn[i].addEventListener('click',tab);
    
}
function tab(){
    
    this[i].classList.add('aClick');
   
}

