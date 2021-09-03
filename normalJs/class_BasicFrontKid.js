  class BasicFrontKid {
    // *** インスタンス作成時の初期設定を行うコンストラクタ ***
    constructor(theme){
      document.title = theme;
      this.flag = 0;
    }
    // *** JavaScriptのIDによる要素指定の表記短縮 ***
    _(id){ return document.getElementById(id); }
    // *** 親要素内への要素の新設 ***
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
    // *** 要素を指定してテキストを設定（divやpでもinput[type=text]でも使える） ***
    textInjection(elm,text){
      let element = document.querySelector(elm);
      if(element.type=="text"){
        element.value = text;
        element.setAttribute("type","text");
      }else{
        element.innerText = text;
      }
    }
    // *** 要素がボタンかインプットの場合にdisabledを設定する ***
    onDisa(elm,act=null){
      let element = document.querySelector(elm);
      if(element.tagName=="BUTTON" || element.tagName=="INPUT"){
        element.disabled = true;
        if(typeof(act)=="function"){ act(); }      
      }else{
        return false;
      }
    }
    // *** 要素がボタンかインプットの場合にdisabledをはずす ***
    offDisa(elm,act=null){
      let element = document.querySelector(elm);
      if(element.tagName=="BUTTON" || element.tagName=="INPUT"){
        element.disabled = false;
        if(typeof(act)=="function"){ act(); }      
      }else{
        return false;
      }
    }
    // *** 配列内の各要素に 設定した関数の処理を適用する コールバック関数 ***
    each(array, act){
      for(let i=0; i<array.length; i++){ act(array[i]) }
    }
    // *** 配列内の各要素（内部に要素が3つずつあるもの）に 設定した関数の処理を適用する コールバック関数 ***
    tripleEach(tripleArray, act){
      for(let i=0; i<tripleArray.length; i++){ 
        act(tripleArray[i][0],tripleArray[i][1],tripleArray[i][2]);
      }
    }
    
  }
