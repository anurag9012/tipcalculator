function tipfn(){
    let billamt =document.getElementById('billamt').value;
    //let experience= document.getElementById('exp').index;
    var experience=document.getElementById("exp");
    var tipamount=document.getElementById("tip");
    
    var experienceindex=experience.selectedIndex;
    var experiencestatus=experience.options[experienceindex].value;
    var nop=document.getElementById("nop").value;
    

    let tip=0;
    if(experiencestatus=="poor"){
        tip=0;
    }
   else if(experiencestatus=="good"){
        tip=billamt/10;
    }
else if(experiencestatus=="better"){
tip=(billamt/10)*2;
}
else{
   tip=(billamt/10)*3;
}    
  tipamount.textContent=tip; 
  var tipeach=tip/nop;
  alert(tipeach);
    
}

