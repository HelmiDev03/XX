var interval=500,i=0;
setInterval(function(){
  i++;
   if (i % 5 !== 0) {
     document.getElementById('I').style.visibility = 'visible';
     document.getElementById('L').style.visibility = 'hidden';
     document.getElementById('Y').style.visibility = 'visible';
     document.getElementById('six').style.visibility = 'visible';
    
      document.getElementById('83').style.visibility = 'visible';

   } else {
    document.getElementById('I').style.visibility = 'hidden';
     document.getElementById('L').style.visibility = 'visible';
     document.getElementById('Y').style.visibility = 'hidden';
     document.getElementById('six').style.visibility = 'hidden';

       document.getElementById('83').style.visibility = 'hidden';
   }
},interval);

