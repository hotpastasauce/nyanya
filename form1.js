function test() {
    var alphabetique=/^[A-Za-z]+$/;
    var num = /[^0-9]/;
    //nom
    x=document.getElementById('name').value;
    if (x.length<3 || !(x.match(alphabetique))){
        alert('Entrez un nom valid.');
        return false;
    }
    //prenom
    y=document.getElementById('pnom').value;
    if (y.length<3 || !(y.match(alphabetique))){
        alert('Entrez un prenom valid.');
        return false;
    }
    //address
    z=document.getElementById('address').value.length;
    if (z<10) {
        alert('Entrez une address valid.');
        return false;
    }
    //number
    n=document.getElementById('phone').value;
    if ((n.match(num)) || (n.length!=8)|| ((n.charAt(0).toString())=="0") || ((n.charAt(0).toString())=="1")) {
        alert('Entrez un numero de tel valid.');
        return false;
    }
    //email
    m=document.getElementById('mail').value;
    if ((m.length==0) || (m.length>50) || (m.indexOf("@")>m.lastIndexOf(".")) || (m.indexOf("@")==-1)) {
        alert('Entrez un mail valid.');
        return false;
      }


    //pour verifier si l'utilisateur a repondu aux questions
    f=document.querySelectorAll(".f");
    mika=0;
    for (let u = 0; u < f.length; u++) {
        if (f[u].checked==true) {
            mika=mika+1
        }
    }
    if (mika==0) {
        alert("Veuillez repondre aux questions.");
        return false;
    }
    //calcul du score
    score=0;
    pts1=document.querySelectorAll(".p1");
    pts2=document.querySelectorAll(".p2");
    pts3=document.querySelectorAll(".p3");
    pts5=document.querySelectorAll(".p5");
    checkb=document.querySelectorAll(".ch");
    mc=0;
    for (let d = 0; d< checkb.length; d++) {
        if (checkb[d].checked==true){
         mc=mc+1;}
     }

    for (let i = 0; i< pts1.length; i++) {
       if (pts1[i].checked==true){
        score=score+1;}
    }
    
    for (let j = 0; j< pts2.length; j++) {
        if (pts2[j].checked==true){
         score=score+2;}
     }
     for (let k = 0; k< pts3.length; k++) {
        if (pts3[k].checked==true){
         score=score+3;}
     }
     for (let b = 0; b< pts5.length; b++) {
        if (pts5[b].checked==true){
         score=score+5;}
     }
     if ( (0==score) || (score>7) ) {
        alert('Vous devirez aller bien, mais faites attention à vous, et n’oubliez pas de respecter les gestes barrières.')
     }
     else  {
        alert('Vous devirez aller bien, mais faites attention à vous, et n’oubliez pas de respecter les gestes barrières.')
     }
     if ( (8==score) || (score>18) ) {
        alert('Vous avez des majeurs symptômes du COVID-19. Vous devriez vous confiner au plus vite, et faire un test de dépistage.')
     }
     if (score<18) {
        alert('Précipitez-vous au centre COVID le plus proche pour être pris en charge.')
     }
}