
    var numbers = document.querySelectorAll('#setting > p > [type=number]');
    for(let nb of numbers){
      nb.addEventListener('keydown',function(){ event.preventDefault() })
    }

    let targetH2 = document.querySelector('#container > h2');
    var gameTitle = 'フラッシュ暗算ゲーム！';
    var text_array = Array.from(gameTitle, function(text){
      return `\'${text}\'`;
    });
    targetH2.innerText = '';
    count = 0;
    for(let word of text_array){
      count++;
      setTimeout(function(){
        targetH2.innerText += word.replaceAll('\'','');
        console.log(word.replaceAll('\'',''));
      }, count * 150);
    }    

    function sumRandom(){
      document.getElementById('setting').style.display = 'none';
      document.getElementById('screen').style.display = 'block';
      var current = document.getElementById('current');
      var sumBox = document.getElementById('sumBox');
      var level = document.getElementById('level').value;
      var times = document.getElementById('times').value;
      var sum = 0;
      var speed;
      if(level==1){speed=15;}
      if(level==2){speed=12;}
      if(level==3){speed=10;}
      if(level==4){speed=7;}
      if(level==5){speed=5;}
      for(let i=0;i<times;i++){
        setTimeout(function(){
          var num = Math.floor(Math.random()*13)+1; // 整数1～13
          sum += num;
          current.innerText = num;
        }, i * (speed*100));
        setTimeout(function(){
          current.innerText = '';
        }, i * (speed*100) + (speed*60));
      };
        setTimeout(function(){
          sumBox.value = sum;
          current.innerText = 'さて...';
        },times*(speed*100));
        setTimeout(function(){
          current.innerText = '';
        },times*(speed*100) + (speed*80));
        setTimeout(function(){
          current.innerText = '合計はいくら？';
        },times*(speed*100)+(speed*100));
        setTimeout(function(){
          document.getElementById('answer').style.display = 'block';
          console.log(Number(sumBox.value));
        },times*(speed*100)+(speed*100)*2);
    }
    
    function judge(){
      var correctNum = Number(document.getElementById('sumBox').value);
      var ans = Number(document.getElementById('answerNum').value);
      setInterval(function(){
        if(ans==correctNum){
          document.getElementById('screen').style.display = 'none';
          document.getElementById('correct').style.display = 'block';
        }else{
          document.getElementById('screen').style.display = 'none';
          document.getElementById('invalid').style.display = 'block';
        }
      }, 1500);
      setInterval(function(){
        document.getElementById('correctNum').innerText = correctNum;
        document.getElementById('reload').style.display = 'block';
      }, 2500);
    }