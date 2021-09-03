  
  class BasicFrontKid {
    // インスタンス作成時の初期設定を行うコンストラクタ
    constructor(theme){
      document.title = theme;
      this.flag = 0;
    }
    // JavaScriptのIDによる要素指定の表記短縮
    _(id){ return document.getElementById(id); }
    // 親要素内への要素の新設
    create(parentElm,childElm,childId){
      let child = document.createElement(childElm);
      if(child.tagName=="BUTTON"){
        child.style.cursor = "pointer";
        child.style.borderRadius = "10px";
        child.style.padding = "5px";
      }else if(child.tagName=="INPUT"){
        child.style.borderRadius = "5px";
        child.style.margin = "5px";
      };
      child.setAttribute("id",childId);
      let parent = document.querySelector(parentElm);
      parent.appendChild(child);
    }
    
    textInjection(elm,text){
      let element = document.querySelector(elm);
      (element.type=="text") ? element.value = text : element.innerText = text;
    }
    
    onDisa(elm,act=null){
      document.querySelector(elm).disabled = true;
      if(typeof(act)=="function"){ act(); }
    }
    offDisa(elm,act=null){
      document.querySelector(elm).disabled = false;
      if(typeof(act)=="function"){ act(); }
    }
    
    each(array, act){
      for(let i=0; i<array.length; i++){ act(array[i]) }
    }
    
    tripleEach(tripleArray, act){
      for(let i=0; i<tripleArray.length; i++){ 
        act(tripleArray[i][0],tripleArray[i][1],tripleArray[i][2]);
      }
    }
    
  }
