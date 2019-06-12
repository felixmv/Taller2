   p1 = 0
   p2 = 0
   p3 = 0
   p4 = 0
   p5 = 0
   p6 = 0
   p7 = 0
   p8 = 0
   p9 = 0
   calificacion =0
   valorp= 0.55555555
   var div0 = document.getElementById('question0')
    var div1 = document.getElementById('question1')
    var div2 = document.getElementById('question2')
    var div3 = document.getElementById('question3')
    var div4 = document.getElementById('question4')
    var div5 = document.getElementById('question5')
    var div6 = document.getElementById('question6')
    var div7 = document.getElementById('question7')
    var div8 = document.getElementById('question8')
    var div9 = document.getElementById('question9')
    var div10 = document.getElementById('question10')
    var div11 = document.getElementById('question11')
    var q1 = document.getElementsByName('q1')
    var q2 = document.getElementsByName('q2')
    var q3 = document.getElementsByName('q3')
    var q4 = document.getElementsByName('q4')
    var q5 = document.getElementsByName('q5')
    var q6 = document.getElementsByName('q6')
    var q7 = document.getElementsByName('q7')
    var q8 = document.getElementsByName('q8')
    var q9 = document.getElementsByName('q9')
    var c1 = document.getElementById('c1')
    var c2 = document.getElementById('c2')
    var c3 = document.getElementById('c3')
    var c4 = document.getElementById('c4')
    var c5 = document.getElementById('c5')
    var c6 = document.getElementById('c6')
    var c7 = document.getElementById('c7')
    var c8 = document.getElementById('c8')
    var c9 = document.getElementById('c9')
    var pb = document.getElementById("progresbar")
    var resultado9
    var resultado8
    var resultado7
    var resultado6
    var resultado5
    var resultado4
    var resultado3
    var resultado2
    var resultado1

    div0.style.display="block";
    
    function nextgo() {
                        
        if(div9.style.display == 'block'){
            div9.style.display = 'none';
            div10.style.display = 'block';
            for(var i=0;i<q9.length;i++){
            if(q9[i].checked  ){
                resultado9=q9[i].value;
                if (p9 ==0) {
                    c9.style.backgroundColor="#00796b";
                    pb.value= pb.value+11.1111111;
                    p9=1  
                }
                
             } 
        }
        document.getElementById("next1").disabled =true;
            ///boton next desabilitado
       } 
       if(div8.style.display == 'block'){
            div8.style.display = 'none';
            div9.style.display = 'block';
            for(var i=0;i<q8.length;i++){
            if(q8[i].checked ){
                resultado8=q8[i].value;
                if ( p8 ==0) {
                    c8.style.backgroundColor="#00796b";
                    pb.value= pb.value+11.1111111;
                    p8=1  
                }
               
             } 
       }
       }
       if(div7.style.display == 'block'){
            div7.style.display = 'none';
            div8.style.display = 'block';
            for(var i=0;i<q7.length;i++){
            if(q7[i].checked ){
                resultado7=q7[i].value;
                if(p7 ==0)
                {
                    c7.style.backgroundColor="#00796b";
                pb.value= pb.value+11.1111111;
                p7=1
                }
                
             } 
       }
       }
       if(div6.style.display == 'block'){
            div6.style.display = 'none';
            div7.style.display = 'block';
            for(var i=0;i<q6.length;i++){
            if(q6[i].checked  ){
                resultado6=q6[i].value;
                if(p6 ==0){
                    c6.style.backgroundColor="#00796b";
                pb.value= pb.value+11.1111111;
                p6=1
                }
                
             } 
       }
       }
       if(div5.style.display == 'block'){
            div5.style.display = 'none';
            div6.style.display = 'block';
            for(var i=0;i<q5.length;i++){
            if(q5[i].checked ){
                resultado5=q5[i].value;
                if( p5 ==0){
                c5.style.backgroundColor="#00796b";
                pb.value= pb.value+11.1111111;
                p5=1
            }
             } 
       }
       }
       if(div4.style.display == 'block'){
            div4.style.display = 'none';
            div5.style.display = 'block';
            for(var i=0;i<q4.length;i++){
            if(q4[i].checked ){
                resultado4=q4[i].value;
                if (p4 ==0) {
                    c4.style.backgroundColor="#00796b";
                    pb.value= pb.value+11.1111111;
                    p4=1   
                }
                
             } 
       }
       }
       if(div3.style.display == 'block'){
            div3.style.display = 'none'
            div4.style.display = 'block' 
            for(var i=0;i<q3.length;i++){
            if(q3[i].checked  ){
                resultado3=q3[i].value;
                if (p3 ==0) {
                    c3.style.backgroundColor="#00796b";
                    pb.value= pb.value+11.1111111;
                    p3=1  
                }
                
             }   
       }
       }
       if(div2.style.display == 'block'){
            div2.style.display = 'none'
            div3.style.display = 'block'
            for(var i=0;i<q2.length;i++){
            if(q2[i].checked  ){
                resultado2=q2[i].value;
                if (p2 ==0) {
                    c2.style.backgroundColor="#00796b";
                pb.value= pb.value+11.1111111;
                p2=1
                }
                
             } 
      }
      }
        if(div1.style.display == 'block'){
            div1.style.display = 'none'
            div2.style.display = 'block'
            for(var i=0;i<q1.length;i++){
                if(q1[i].checked  ){
                    resultado1=q1[i].value;
                    if (p1 ==0) {
                        c1.style.backgroundColor="#00796b";
                        pb.value= pb.value+11.1111111;    
                        p1=1   
                    }
                                   
                 } 
        }
        document.getElementById("previos1").disabled= false;
        }

        
}

function previosgo() {
       
        if(div2.style.display == 'block'){
            div1.style.display = 'block'
            div2.style.display = 'none'
            document.getElementById("previos1").disabled =true;
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
            document.getElementById("next1").disabled =false;
        }
 }

 function terminar(){
    div11.style.display = 'block';
    div10.style.display = 'none';
    document.getElementById("botones").style.display="none";
    document.getElementById("p1").innerHTML=resultado1
    document.getElementById("p2").innerHTML=resultado2
    document.getElementById("p3").innerHTML=resultado3
    document.getElementById("p4").innerHTML=resultado4
    document.getElementById("p5").innerHTML=resultado5
    document.getElementById("p6").innerHTML=resultado6
    document.getElementById("p7").innerHTML=resultado7
    document.getElementById("p8").innerHTML=resultado8
    document.getElementById("p9").innerHTML=resultado9

    if (resultado1 != document.getElementById("r1").innerHTML) {
        document.getElementById("p1").style.color="red"
    }else{
        document.getElementById("p1").style.color="green"
        calificacion=calificacion+valorp
    }


    if (resultado2 != document.getElementById("r2").innerHTML) {
        document.getElementById("p2").style.color="red"
    }else{
        document.getElementById("p2").style.color="green"
        calificacion=calificacion+valorp
    }


    if (resultado3 != document.getElementById("r3").innerHTML) {
        document.getElementById("p3").style.color="red"
    }else{
        document.getElementById("p3").style.color="green"
        calificacion=calificacion+valorp
    }


    if (resultado4 != document.getElementById("r4").innerHTML) {
        document.getElementById("p4").style.color="red"
    }else{
        document.getElementById("p4").style.color="green"
        calificacion=calificacion+valorp
    }


    if (resultado5 != document.getElementById("r5").innerHTML) {
        document.getElementById("p5").style.color="red"
    }else{
        document.getElementById("p5").style.color="green"
        calificacion=calificacion+valorp
    }


    if (resultado6 != document.getElementById("r6").innerHTML) {
        document.getElementById("p6").style.color="red"
    }else{
        document.getElementById("p6").style.color="green"
        calificacion=calificacion+valorp
    }


    if (resultado7 != document.getElementById("r7").innerHTML) {
        document.getElementById("p7").style.color="red"
    }else{
        document.getElementById("p7").style.color="green"
        calificacion=calificacion+valorp
    }


    if (resultado8 != document.getElementById("r8").innerHTML) {
        document.getElementById("p8").style.color="red"
    }else{
        document.getElementById("p8").style.color="green"
        calificacion=calificacion+valorp
    }


    if (resultado9 != document.getElementById("r9").innerHTML) {
        document.getElementById("p9").style.color="red"
    }else{
        document.getElementById("p9").style.color="green"
        calificacion=calificacion+valorp
    }

    document.getElementById("calificacion").innerHTML= "Su calificacion es de: "+calificacion
 }


 function login(){

    
     var nombre= document.getElementById("nombre").value
     var apellido= document.getElementById("apellido").value
     if (nombre.length == 0 ) {
        alert("Ingrese un nombre");        
        return false;
    } else if (apellido.length == 0 ) {
        alert("Ingrese un apellido");        
        return false;
    } else {
     document.getElementById("next1").style.display ="inline"
     document.getElementById("previos1").style.display ="inline"
     document.getElementById("nomape").innerHTML= nombre+" "+ apellido
     if(div0.style.display == 'block'){
        div0.style.display = 'none'
        div1.style.display = 'block'
        document.getElementById("previos1").disabled =true;
        
    }   

 }
 }

document.getElementById("previos1").onclick=previosgo;
document.getElementById("terminar").onclick=terminar;
document.getElementById("enviar").onclick=login;
document.getElementById("next1").onclick=nextgo;
