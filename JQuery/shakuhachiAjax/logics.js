function _(id){ return document.getElementById(id); }
function _cr(tag){ return document.createElement(tag); }

function hover(target,color){
  target.style.cursor = "pointer";
  target.addEventListener("mouseenter",function(){
    this.style.fontWeight = "700";
    this.style.color = color;
  });
  target.addEventListener("mouseleave",function(){
    this.style.fontWeight = "";
    this.style.color = "";
  });
}

function insertIndex(from,id){
  var ul = _cr("ul");
  var li_from = _cr("li");
  li_from.style.listStyle = "none";
  li_from.style.fontWeight = "bold";
  li_from.style.fontSize = "125%";
  li_from.setAttribute("id","from_"+id);
  li_from.setAttribute("class","li_from");
  li_from.innerText = from;
  var li_index = _cr("li");
  li_index.style.listStyle = "none";
  li_index.setAttribute("id","index_"+id);
  li_index.setAttribute("class","li_index");
  ul.appendChild(li_from);
  ul.appendChild(li_index);
  _("indexGet").appendChild(ul);
}

function setAjaxInfo(fromData,idPlus){
  insertIndex(fromData,idPlus);
  var breadOl = _cr("ol");
  breadOl.style.backgroundColor = "#bc9cff";
  breadOl.setAttribute("class","breadcrumb p-1 mr-2");
  var mapArray = getArray.map(item => item["from"]);
  var indexAmount = mapArray.length;
  for(let i=0; i<indexAmount; i++){
    if(mapArray[i]==fromData){
      var li = _cr("li");
      li.style.listStyle = "none";
      hover(li,"purple");
      li.setAttribute("class","breadcrumb-item note");
      li.dataset.from = getArray[i]["from"];
      li.dataset.title = getArray[i]["title"];
      var arrVals = Object.values(getArray[i]["title"]);
      li.innerText = arrVals.join("");
      breadOl.appendChild(li);
    }
  }
  _("index_"+idPlus).appendChild(breadOl);         
}