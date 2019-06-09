    var div1 = document.getElementById('question1');
    var div2 = document.getElementById('question2');
    var div3 = document.getElementById('question3');
    var div4 = document.getElementById('question4');
    var div5 = document.getElementById('question5');
    var div6 = document.getElementById('question6');
    var div7 = document.getElementById('question7');
    var div8 = document.getElementById('question8');
    var div9 = document.getElementById('question9');
    var div10 = document.getElementById('question10');
    
    div1.style.display="block";
    
    function nextgo() {
                        
        if(div9.style.display == 'block'){
            div9.style.display = 'none';
            div10.style.display = 'block';
            ///boton next desabilitado
       } 
       if(div8.style.display == 'block'){
            div8.style.display = 'none';
            div9.style.display = 'block';
       }
       if(div7.style.display == 'block'){
            div7.style.display = 'none';
            div8.style.display = 'block';
       }
       if(div6.style.display == 'block'){
            div6.style.display = 'none';
            div7.style.display = 'block';
       }
       if(div5.style.display == 'block'){
            div5.style.display = 'none';
            div6.style.display = 'block';
       }
       if(div4.style.display == 'block'){
            div4.style.display = 'none';
            div5.style.display = 'block';
       }
       if(div3.style.display == 'block'){
            div3.style.display = 'none'
            div4.style.display = 'block'   
       }
       if(div2.style.display == 'block'){
            div2.style.display = 'none'
            div3.style.display = 'block'
      }
        if(div1.style.display == 'block'){
            div1.style.display = 'none'
            div2.style.display = 'block'
        }
}

function previosgo() {
       
        if(div2.style.display == 'block'){
            div1.style.display = 'block'
            div2.style.display = 'none'
            ///boton anterior desabilitado
        } 
        if(div3.style.display == 'block'){
            div2.style.display = 'block';
            div3.style.display = 'none';
        }
         if(div4.style.display == 'block'){
            div3.style.display = 'block';
            div4.style.display = 'none';
        }
         if(div5.style.display == 'block'){
            div4.style.display = 'block';
            div5.style.display = 'none';
        }
         if(div6.style.display == 'block'){
            div5.style.display = 'block';
            div6.style.display = 'none';
        }
         if(div7.style.display == 'block'){
            div6.style.display = 'block';
            div7.style.display = 'none';
        }
        
        if(div8.style.display == 'block'){
            div7.style.display = 'block';
            div8.style.display = 'none';
        }
         if(div9.style.display == 'block'){
            div8.style.display = 'block';
            div9.style.display = 'none';
        }
         if(div10.style.display == 'block'){
            div9.style.display = 'block';
            div10.style.display = 'none';
        }
 }

document.getElementById("previos1").onclick=previosgo;

document.getElementById("next1").onclick=nextgo;

