

     let y = Math.floor(Math.random() * 10 + 0); 
    let guess = 1; 
    let compteur=5; 
    let nb= document.querySelector("#nb");
    nb.textContent=compteur;
    let gagne=false;
    let perdu=false;

    function initialiser()
    {
        y = Math.floor(Math.random() * 10 + 0); 
        compteur = 5;
        guess=1;
        gagne=false;
        perdu=false;
    }

     document.getElementById("submitdevinette").onclick = function(){ 
        var x = document.getElementById("champDevinette").value; 


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
   if (perdu==true || gagne==true)
   {
   initialiser();
   }
   nb.textContent=compteur;

      
} 
