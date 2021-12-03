var Nticket=1001234

function voyage(){
    
    var asr=document.getElementById('asr').value
    var vclass=document.getElementById('vclasse').value
    var destination=document.getElementById('destination').value
    var local=document.getElementById('local').value
    var date=document.getElementById('date').value
    var adulte=document.getElementById('adulte').value
    var enfant=document.getElementById('enfant').value
    var bebe=document.getElementById('bebe').value
    var tableau=document.getElementById('table')
    var tr=document.createElement('tr')
    var td1=document.createElement('td')
    var td2=document.createElement('td')
    var td3=document.createElement('td')
    var td4=document.createElement('td')
    var td5=document.createElement('td')
    var td6=document.createElement('td')
    var th=document.createElement('th')

    if(vclass=='0'){return alert('svp il faut choisir une classe')}
    if(destination=='0' || local=='0'){return alert('svp choisi la destination/local')}
    if(destination==local){return alert('svp choisi quelque chose logique')}
    

 


    // ADD CLASSES AND ATTRIBUTES

    td1.className='col-1'
    td2.className='col-1'
    td3.className='col-1'
    td4.className='col-2'
    td5.className='col-2'
    td6.className='col-2'
    th.className='col-2'
    td2.id='asr'+Nticket
    td3.id='vclasse'+Nticket
    td4.id='destination'+Nticket
    td5.id='local'+Nticket
    td6.id='date'+Nticket
    th.id='aeb'+Nticket
    tr.id=Nticket

    // ADD CONTENT TEXTE

    td1.textContent=Nticket
    Nticket++
    td2.textContent=asr
    td3.textContent=vclass
    td4.textContent=local
    td5.textContent=destination
    td6.textContent=date
    th.textContent=adulte+' adultes , '+enfant+'  enfants  , '+bebe+' bebes '

    //APPEND CHILD

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(th)
    tableau.appendChild(tr)




}


function supprimer(){
    var ticket=document.getElementById('ticket');
    var Nticket=ticket.value
    
    var table=document.getElementById('table')
    var element=document.getElementById(Nticket)

    if (element){ element.parentElement.removeChild(element)}
    else {
        alert('Element n\'existe pas dans le tableau')
    }

}


function modifier() {
    
    var ticket=document.getElementById('ticket');
    var Nticket=ticket.value
    var modifier=document.getElementById('modifier')
    var supprimer=document.getElementById('supprimer')
    var element=document.getElementById(Nticket)
    var enregistrer=document.getElementById('ajouterbtn')
    var content=document.getElementById('modifier-content')


    

  //CHERCHER L'ELEMENT DANS LE TABLEAU

    if (!element){return alert('Element n\'existe pas dans le tableau')}

    var td1=document.getElementById('asr'+Nticket)
    var td2=document.getElementById('vclasse'+Nticket)
    var td3=document.getElementById('destination'+Nticket)
    var td4=document.getElementById('local'+Nticket)
    var td5=document.getElementById('date'+Nticket)
    var th=document.getElementById('aeb'+Nticket)
    var btn=document.getElementById('btn')
    var content=document.getElementById('modifier-content')

  // VIDER LE CONTENU

    ticket.parentElement.removeChild(ticket)
    supprimer.parentElement.removeChild(supprimer)
    modifier.parentElement.removeChild(modifier)


    td1.textContent=""
    td2.textContent=""
    td3.textContent=""
    td4.textContent=""
    td5.textContent=""
    th.textContent=""

    enregistrer.textContent="Enregistrer les modification"
    content.textContent="Modification du ticket N°"+Nticket

    btn.setAttribute('onclick','apply_modification('+Nticket+')')


}


function apply_modification(ticket){

   
   
    var td1=document.getElementById('asr'+ticket)
    var td2=document.getElementById('vclasse'+ticket)
    var td3=document.getElementById('destination'+ticket)
    var td4=document.getElementById('local'+ticket)
    var td5=document.getElementById('date'+ticket)
    var th=document.getElementById('aeb'+ticket)
    var btn=document.getElementById('btn')
    var content=document.getElementById('modifier-content')
    var asr=document.getElementById('asr').value
    var vclass=document.getElementById('vclasse').value
    var destination=document.getElementById('destination').value
    var local=document.getElementById('local').value
    var date=document.getElementById('date').value
    var adulte=document.getElementById('adulte').value
    var enfant=document.getElementById('enfant').value
    var bebe=document.getElementById('bebe').value
    
    
 

    if(vclass=='0'){return alert('svp il faut choisir une classe');}
    else if(destination=='0' || local=='0'){return alert('svp choisi la destination/local');}
    else if(destination==local){return alert('svp choisi quelque chose logique');}
    else{
    
    var div=document.createElement('div')
    var ajouterbtn=document.getElementById('ajouterbtn')
    
    ajouterbtn.parentElement.removeChild(ajouterbtn)
   
    div.className="my-3 text-center h5"
    div.id="ajouterbtn"
   
    btn.appendChild(div)
    btn.setAttribute('onclick','voyage()')
    
    
    div.textContent="Ajouter"
    content.textContent="Je Recherche Un Vol :"
    td1.textContent=asr
    td2.textContent=vclass
    td3.textContent=local
    td4.textContent=destination
    td5.textContent=date
    th.textContent=adulte+' adultes , '+enfant+'  enfants  , '+bebe+' bebes '
   
    //ADD MODIFICATION AND DELETE DIV

    var suppmod=document.getElementById('modifiersupprimer')
    var input=document.createElement('input')
    var btn1=document.createElement('button')
    var btn2=document.createElement('button')

    
    input.type="text"
    input.placeholder="N°Ticket"
    input.id='ticket'
    btn1.id="supprimer"
    btn2.id="modifier"
    btn1.textContent="supprimer"
    btn2.textContent="modifier"

   
    btn1.setAttribute('onclick','supprimer()')
    btn2.setAttribute('onclick','modifier()')

    suppmod.appendChild(input)
    suppmod.appendChild(btn1)
    suppmod.appendChild(btn2)


 }





}