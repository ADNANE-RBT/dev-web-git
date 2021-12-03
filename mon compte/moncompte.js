function reservation_page(){
    var input = document.getElementById('username')
    var div = document.getElementById('reservations')
    var user=input.value;
    var h1=document.createElement('h1')
    var selectto=document.createElement('select')
    var selectfrom=document.createElement('select')
    var Null=document.createElement('option')
    var OM=document.createElement('option')
    var RM=document.createElement('option')
    var CM=document.createElement('option')
    var TM=document.createElement('option')
    var MS=document.createElement('option')
    var RS=document.createElement('option')
    var NI=document.createElement('option')
    var RI=document.createElement('option')
    var BE=document.createElement('option')
    var ME=document.createElement('option')
    var PF=document.createElement('option')
    var MF=document.createElement('option')
    var Null_=document.createElement('option')
    var OM_=document.createElement('option')
    var RM_=document.createElement('option')
    var CM_=document.createElement('option')
    var TM_=document.createElement('option')
    var MS_=document.createElement('option')
    var RS_=document.createElement('option')
    var NI_=document.createElement('option')
    var RI_=document.createElement('option')
    var BE_=document.createElement('option')
    var ME_=document.createElement('option')
    var PF_=document.createElement('option')
    var MF_=document.createElement('option')
    var btn=document.createElement('button')
    var h3=document.createElement('h3')
    if(user.trim()==""){return alert('Svp saisie quelque chose')}
  
    div.innerHTML=""
  
    h1.textContent='Bienvenue '+user
    h3.textContent='Veuillez préparer votre voyage '
    h3.style="color:orange; text-aligne:center;"
  
    selectto.id="destination"
    selectto.name="destination"
    
    selectfrom.id="local"
    selectfrom.name="local"
    
    btn.setAttribute('onclick','disponible()')
    btn.id='rechercher'
    btn.textContent='Rechercher'
  
  
  Null.value="0"
  OM.value="OUJDA (Maroc)"
  RM.value="RABAT (Maroc)"
  CM.value="CASABLANCA (Maroc)"
  TM.value="TANGER (Maroc)"
  NI.value="NAPLES (Italy)"
  RI.value="ROME (Italy)"
  MS.value="MEKKA (Saudi Arabya)"
  RS.value="RIYADE (Saudi Arabya)"
  BE.value="BARCELONE (Espagne)"
  ME.value="MADRID (Espagne)"
  PF.value="PARIS (France)"
  MF.value="MARSEILLE (France)"
  
  Null.textContent="Vers"
  OM.textContent="OUJDA (Maroc)"
  RM.textContent="RABAT (Maroc)"
  CM.textContent="CASABLANCA (Maroc)"
  TM.textContent="TANGER (Maroc)"
  NI.textContent="NAPLES (Italy)"
  RI.textContent="ROME (Italy)"
  MS.textContent="MEKKA (Saudi Arabya)"
  RS.textContent="RIYADE (Saudi Arabya)"
  BE.textContent="BARCELONE (Espagne)"
  ME.textContent="MADRID (Espagne)"
  PF.textContent="PARIS (France)"
  MF.textContent="MARSEILLE (France)"
  
  Null_.value="0"
  OM_.value="OUJDA( Maroc)"
  RM_.value="RABAT (Maroc)"
  CM_.value="CASABLANCA (Maroc)"
  TM_.value="TANGER (Maroc)"
  NI_.value="NAPLES (Italy)"
  RI_.value="ROME (Italy)"
  MS_.value="MEKKA (Saudi Arabya)"
  RS_.value="RIYADE (Saudi Arabya)"
  BE_.value="BARCELONE (Espagne)"
  ME_.value="MADRID (Espagne)"
  PF_.value="PARIS (France)"
  MF_.value="MARSEILLE (France)"
  
  Null_.textContent="De"
  OM_.textContent="OUJDA (Maroc)"
  RM_.textContent="RABAT (Maroc)"
  CM_.textContent="CASABLANCA (Maroc)"
  TM_.textContent="TANGER (Maroc)"
  NI_.textContent="NAPLES (Italy)"
  RI_.textContent="ROME (Italy)"
  MS_.textContent="MEKKA (Saudi Arabya)"
  RS_.textContent="RIYADE (Saudi Arabya)"
  BE_.textContent="BARCELONE (Espagne)"
  ME_.textContent="MADRID (Espagne)"
  PF_.textContent="PARIS (France)"
  MF_.textContent="MARSEILLE (France)"
  
  // add options to select
  
  selectto.appendChild(Null_)
  selectto.appendChild(OM_)
  selectto.appendChild(RM_)
  selectto.appendChild(CM_)
  selectto.appendChild(TM_)
  selectto.appendChild(NI_)
  selectto.appendChild(RI_)
  selectto.appendChild(MS_)
  selectto.appendChild(RS_)
  selectto.appendChild(BE_)
  selectto.appendChild(ME_)
  selectto.appendChild(PF_)
  selectto.appendChild(MF_)
  
  
  
  
  selectfrom.appendChild(Null)
  selectfrom.appendChild(OM)
  selectfrom.appendChild(RM)
  selectfrom.appendChild(CM)
  selectfrom.appendChild(TM)
  selectfrom.appendChild(NI)
  selectfrom.appendChild(RI)
  selectfrom.appendChild(MS)
  selectfrom.appendChild(RS)
  selectfrom.appendChild(BE)
  selectfrom.appendChild(ME)
  selectfrom.appendChild(PF)
  selectfrom.appendChild(MF)
  
  //append childs 
  div.appendChild(h1)
  div.appendChild(h3)
  div.appendChild(selectto)
  div.appendChild(selectfrom)
  div.appendChild(btn)
  
  }
  

  function disponible(){
 
    var selectfrom=document.getElementById('local')
    var from=selectfrom.value
    var selectto=document.getElementById('destination')
    var to=selectto.value
    var div=document.getElementById('reservations')
    var divall=document.createElement('div')
    var div1=document.createElement('div')
    var div2=document.createElement('div')
    var div3=document.createElement('div')
    var img1=document.createElement('img')
    var h311=document.createElement('h3')
    var h312=document.createElement('h3')
    var h41=document.createElement('h4')
    var img2=document.createElement('img')
    var h321=document.createElement('h3')
    var h322=document.createElement('h3')
    var h42=document.createElement('h4')
    var img3=document.createElement('img')
    var h331=document.createElement('h3')
    var h332=document.createElement('h3')
    var h43=document.createElement('h4')
    var divallexs=document.getElementById('disponibilitie')
    var divreservations=document.getElementById('account')
    var newdivreservations=document.createElement('div')
    var h1=document.createElement('h1')




    if(from=='0' || to=='0'){return alert('svp choisi la destination/local')}
    if(from==to){return alert('svp choisi quelque chose logique')}
 
    

    // ADD ATTRIBUTES 

    divall.className='disponibilitie'   
    divall.id='disponibilitie'
    div1.setAttribute('onclick','reservations(1)')
    div1.id='disp1'
    div1.className='disponible'
    div1.style="background-color:coral;"
    div2.setAttribute('onclick','reservations(2)')
    div2.id='disp2'
    div2.className='disponible'
    div2.style="background-color:lightgreen;"
    div3.setAttribute('onclick','reservations(3)')
    div3.id='disp2'
    div3.className='disponible'
    div3.style="background-color:lightblue;"
    h311.id='from1'
    h312.id='to1'
    h41.id="date1"
    img1.src="/Black & White Holiday Travel Explore Logo.png"
    h321.id='from2'
    h322.id='to2'
    h42.id="date2"
    img2.src="/Black & White Holiday Travel Explore Logo.png"
    h331.id='from3'
    h332.id='to3'
    h43.id="date3"
    img3.src="/Black & White Holiday Travel Explore Logo.png"



    //ADD TEXTE

    h311.textContent='De : '+from
    h312.textContent='Vers : '+to
    h41.textContent='12 Dec 2021 / 21h00'

    h321.textContent='De : '+from
    h322.textContent='Vers : '+to
    h42.textContent='16 Dec 2021 / 12h00'

    h331.textContent='De : '+from
    h332.textContent='Vers : '+to
    h43.textContent='29 Dec 2021 / 08h00'

    h1.textContent='Votre reservations'

    


  //APPEND CHILDS
  if(divallexs){divallexs.parentElement.removeChild(divallexs)}  
  if(!divreservations){newdivreservations.id='account' ; newdivreservations.className='account'; newdivreservations.appendChild(h1);div.appendChild(newdivreservations)}



  div.appendChild(divall)

  div1.appendChild(img1)
  div1.appendChild(h311)
  div1.appendChild(h312)
  div1.appendChild(h41)

  div2.appendChild(img2)
  div2.appendChild(h321)
  div2.appendChild(h322)
  div2.appendChild(h42)
  
  div3.appendChild(img3)
  div3.appendChild(h331)
  div3.appendChild(h332)
  div3.appendChild(h43)
  


  divall.appendChild(div1)
  divall.appendChild(div2)
  divall.appendChild(div3)


  }

var NTicket=10000;
var i=1;

  function reservations(j){


    var divaccount=document.getElementById('account')
    var div1 = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p')
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btn3 = document.createElement('button');

var div=document.createElement('div')
var divheader=document.createElement('div')
var divaside=document.createElement('div')
var divfooter=document.createElement('div')
var h2h=document.createElement('h2')
var h3h=document.createElement('h3')
var ph=document.createElement('p')
var imgh=document.createElement('img')
var h3name=document.createElement('h3')
var h3local=document.createElement('h3')
var h3destination=document.createElement('h3')
var h3date1=document.createElement('h3')
var h3date2=document.createElement('h3')
var pfooter=document.createElement('p')

var destination=document.getElementById('destination')
var from = destination.value
var local=document.getElementById('local')
var to = local.value





// add element classes and attributes


div1.className="vol"
div1.id=i
btn1.setAttribute('onclick','supp('+i+')')
btn2.setAttribute('onclick','mod('+i+')')
btn3.setAttribute('onclick','show_ticket('+i+')')
btn3.id='hideorshow'+i;

div.className='ticket'
div.id='ticket'+i
div.style="display:block;"
divheader.className='header_ticket'
divaside.className='aside_ticket'
divfooter.className='footer_ticket'
imgh.src='/Black & White Holiday Travel Explore Logo.png'
imgh.alt='logo'


       
   





// add text and values


h5.textContent="To : "
p.textContent=to
btn1.textContent="delete"
btn2.textContent="modifier"
btn3.textContent="Hide ticket"



 //header

 h2h.textContent='NORTH TRAVEL AGENCY'

 NTicket++
 h3h.textContent='N° Ticket : '
 ph.textContent=NTicket

   //aside

 h3local.textContent='De : '+ from

 h3destination.textContent='Vers : '+to


 switch(j){
  case 1 : { h3date1.textContent='Date de départ : 12 Dec 2021 / 21h00';break}
  case 2 : {h3date1.textContent='Date de départ :16 Dec 2021 / 12h00' ;break}
  case 3 : {h3date1.textContent='Date de départ :29 Dec 2021 / 08h00' ;break;}
}

 
  //footer

 pfooter.textContent="Thank you for travling with us"



// append childs

divaccount.appendChild(div1)
divaccount.appendChild(div)
div1.appendChild(h5)
div1.appendChild(p)
div1.appendChild(btn1)
div1.appendChild(btn2)
div1.appendChild(btn3)
divheader.appendChild(imgh)  
divheader.appendChild(h2h)
divheader.appendChild(h3h)
divheader.appendChild(ph)
div.appendChild(divheader)
divaside.appendChild(h3name)
divaside.appendChild(h3local)
divaside.appendChild(h3destination)
divaside.appendChild(h3date1)
divaside.appendChild(h3date2)
div.appendChild(divaside) 
divfooter.appendChild(pfooter)
div.appendChild(divfooter)




// incrimente i

i++
  }

  

  function supp(j){
  
    var reservation = document.getElementById(j)
    var ticket=document.getElementById('ticket'+j)
    reservation.parentNode.removeChild(reservation);
    ticket.parentNode.removeChild(ticket)

 }

 function show_ticket(elementid){
  var targetElement;
  targetElement = document.getElementById('ticket'+elementid) ;
  var btn=document.getElementById('hideorshow'+elementid)
  if (targetElement.style.display == "none"){
      targetElement.style.display = "" ; 
      btn.textContent="Hide ticket"
   } 
   else {
    targetElement.style.display = "none" ;
    btn.textContent="Show ticket"
 }
  }