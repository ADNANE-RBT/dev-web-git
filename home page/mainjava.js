i = 0; 

document.getElementById("home").addEventListener("click", function(e){
    const a= document.getElementById("iframedyalna");
    a.src = "/pageacceuil/homepage.html";

    const rmv= document.getElementsByClassName("nav-link active");
    rmv.className = "nav-link";

    const bav =  document.getElementById("home");
    bav.className = "nav-link active";
   
  });
document.getElementById("hotels").addEventListener("click", function(e){
    const a= document.getElementById("iframedyalna");
    a.src = "/hotels/hotels.html";

    const rmv= document.getElementsByClassName("nav-link active");
    rmv.className = "nav-link";

    const bav =  document.getElementById("hotels");
    bav.className = "nav-link active";
  });
  document.getElementById("voyage").addEventListener("click", function(e){
    const a= document.getElementById("iframedyalna");
    a.src = "/voyage organise/voyage.html";
    
    const rmv= document.getElementsByClassName("nav-link active");
    rmv.className = "nav-link";

    const bav =  document.getElementById("voyage");
    bav.className = "nav-link active";
  });
  document.getElementById("hajj").addEventListener("click", function(e){
    const a= document.getElementById("iframedyalna");
    a.src = "/hajj&omra/hajj.html";

    const rmv= document.getElementsByClassName("nav-link active");
    rmv.className = "nav-link";

    const bav =  document.getElementById("hajj");
    bav.className = "nav-link active";

    
  });
document.getElementById("myacc").addEventListener("click", function(e){
    const a= document.getElementById("iframedyalna");
    a.src = "/mon compte/myacc.html";

    const rmv= document.getElementsByClassName("nav-link active");
    rmv.className = "nav-link";

    const bav = document.getElementById("myacc");
    bav.className = "nav-link active";
  });
  document.getElementById("vols").addEventListener("click", function(e){
    const a= document.getElementById("iframedyalna");
    a.src = "/vols/vols.html";

    const rmv= document.getElementsByClassName("nav-link active");
    rmv.className = "nav-link";

    const bav =  document.getElementById("vols");
    bav.className = "nav-link active";
  });
  

  function showit(i){
    const a = document.getElementById("iframedyalna");
    if (i == 1){
      a.src = "/cards/1stcard.html";
    }
    else if ( i == 2){
      a.src = "/cards/2ndcard.html";
    }
    else if ( i == 3){
      a.src = "/cards/3rdcard.html";
    }
    else if ( i == 4){
      a.src = "/cards/4thcard.html";
    }
  
  }
