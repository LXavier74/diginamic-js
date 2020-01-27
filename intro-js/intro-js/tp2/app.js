
     let y = Math.floor(Math.random() * 10 + 0); 
    let guess = 1; 
    let compteur=5; 
    let nb= document.querySelector("#nb");
    nb.textContent=compteur;
let gagne=false;
let perdu =false;

        document.getElementById("submitdevinette").onclick = function(){ 
 


   if(x == y && compteur!=0) 
   {     
       alert("Vous avez trouvé en "
               + guess + " essais ");
               gagne=true; 
               
   } 
   else if (x!=y && compteur!=0)
   { 
       guess++; 
       alert("Ce n'est pas le bon nombre, veuillez reessayer") 
       compteur--;
       if (compteur==0)
       {
        alert("NUL !") 
        perdu=true;
       }
   }
   
   if(gagne==true || perdu==true)
   {
    document.location.reload(true)
   }
   nb.textContent=compteur;

      
} 
