var btn1=1;
var btn2=1;


function phaseSuivant(boutonid){
    let contexte = document.getElementById("contexte");
    let choix1label = document.getElementById("choix1label");
    let choix2label = document.getElementById("choix2label");
    let chx1 = document.getElementById("chx1");
    let chx2 = document.getElementById("chx2");
    let titre = document.getElementById("titre");

    switch(boutonid){
        case "1" :
            titre.textContent = "Histoire";
            contexte.textContent = "Cela fait quelques mois que vous flirter avec un garçon / fille / non binaire, vous vous entendez très bien avec lui / elle / iel, vous l'appreciez et lui / elle aussi.";
            choix1label.textContent = "Vous êtes prêt, vous sentez que c'est la bonne personne et décidez tenter une relation avec lui";
            choix2label.textContent = "Vous decidez que vous n'êtes pas pret pour l'instant, vous preferez actuellement avoir seulement des coups d'un soir.";
            chx1.className=2;
            chx2.className=3;

        break;
        case "2" :
            contexte.textContent = "deux premiers mois sont passés, et tout c'est bien passer , vous trouver une vrai alchimie avec cette personne, vous decidez de sortir un peu,";
            choix1label.textContent = "Aller au resto";
            choix2label.textContent = "aller au cinema";
            chx1.className=4;
            chx2.className=4;
        break;

        case "3" :
            contexte.textContent="Quelque temps sont passé après cette deception amoureuse, et pour vous remonter le moral, vous décidez de sortir de chez vous, mais, où aller ?";
            choix1label.textContent="Boite de nuit";
            choix2label.textContent="Bar";
            chx1.className=5;
            chx2.className=6;
        break;
        case "4":
            contexte.textContent="cela fait maintenat quleque mois que vous etes avec vos partenaire, il vous propose de venir chez lui dormir un soir avec un netflix  and chill avec les led rouge 🍆🍑";
            choix1label.textContent="accepter, et prendre le risque de ne pas s'informer sur une potentiel maladie sexuellement transmissible de l'un de vous deux.";
            choix2label.textContent="refuser, par précaution car vous pensez qu'il faut d'abord faire des analyses de sang pour connaitre si l'un de vous deux possède une maladie ou une infection sexuellement transmissible.";
            chx1.className=7;
            chx2.className=8;
        break;
        case "5":
            contexte.textContent="Vous élancer sur la piste de dance quand vous rencontrer une personne qui est très sympathique, vous danser avec elle pendant 30 minutes , 1 heure et vous vous rendez compte qu'il y a une vrai alchimie entre vous deux. Il vous propose un rendez-vous après la boite de nuit.";
            choix1label.textContent="Refuser, par précaution car vous pensez qu'il faut d'abord faire des analyses de sang pour connaitre si l'un de vous deux possède une maladie ou une infection sexuellement transmissible.";
            choix2label.textContent="Accepter, et prendre le risque de ne pas s'informer sur une potentiel maladie sexuellement transmissible de l'un de vous deux.";
            chx1.className=12;
            chx2.className=9;
        break;
        case "6":
            contexte.textContent="Vous rencontrez une personne que vous trouvez très charmante, elle vous offre un verre et vous propose de se revoir,Vous élancer sur la piste de dance quand vous rencontrer une personne qui est très sympathique, vous danser avec elle pendant 30 minutes , 1 heure et vous vous rendez compte qu'il y a une vrai alchimie entre vous deux. Il vous propose un rendez-vous après la boite de nuit.";
            choix1label.textContent="Refuser, par précaution car vous pensez qu'il faut d'abord faire des analyses de sang pour connaitre si l'un de vous deux possède une maladie ou une infection sexuellement transmissible.";
            choix2label.textContent="Accepter, et prendre le risque de ne pas s'informer sur une potentiel maladie sexuellement transmissible de l'un de vous deux.";
            chx1.className=8;
            chx2.className=9;
        break;
        case "7":
            contexte.textContent="accepter, et prendre le risque de ne pas s'informer sur une potentiel maladie sexuellement transmissible de l'un de vous deux.";
            choix1label.textContent="utiliser un moyen de  contraception";
            choix2label.textContent="ne pas utiliser de moyen de contraception";
            chx1.className=10;
            chx2.className=11;
        break;
        case "8":
            contexte.textContent="apres avec fait des analyses de sang, et d'être biensur que personne de possède de maladie sexuellement transimisible, vous proposez à votre partenaire de netflix and chill, laid rouge 🍆🍑";
            choix1label.textcontent = "utiliser un moyen de contraception";
            choix2label.textContent ="ne pas utiliser de moyen de contraception";
            chx1.className=16;
            chx2.className=17;
        break;

        case "9":
            contexte.textContent="Accepter, et prendre le risque de ne pas s'informer sur une potentiel maladie sexuellement transmissible de l'un de vous deux. Vous rentrez chez lui";
            choix1label.textContent="utiliser un moyen de  contraception";
            choix2label.textContent="ne pas utiliser de moyen de contraception";
            chx1.className=18;
            chx2.className=19;
        break;

        case "10":
            contexte.textContent="Bravo quelque semaine plus tard, vous avez fait une analyse et  heureusement que vous  vous etes protegé, vous l'avez echapper belle voitre partenaire avait une maladir sexuellement  transmisible, quel  chance que vous avez utiliser un moyen de contraception pour vous protégez.";
            choix1label.textContent="zertzer";
            choix2label.textContent="zertzert";
            chx1.className=0;
            chx2.className=0;
        break;

        case "11" :
            contexte.textContent="aie, Malheureusement votre partenaire avais une maladie sexuellement transmisible, vous l'avez attraper dommage, il aurait fallut faire des analyses de sang, et Dommage vous êtes tomber en enceite malencontreusement, il aurait fallu se protéger";
            choix1label.textContent="zertzert";
            choix2label.textContent="zertzert";
            chx1.className=0;
            chx2.className=0;
             break;
        
        case "12":
            contexte.textContent="Bravo, vous avez pris des précotion sur votre santé et vous vous protegez vous en meme temps que les autres"
            chx1.className=0;
            chx2.className=0;
            break;

        case "16":
            contexte.textContent="BRAVO, vous avez gagné,  vous avez pris les précaution nécéssaire pour ne pas prendre de risque au niveau MST/IST et vous avez prit la bonne option, c'est à dire se protéger lors d'un rapport.";
            chx1.className=0;
            chx2.className=0;
            break;
        
        case "17":
            contexte.textContent="AIE vous avez perdu, vous n'avez pas prit les précaution nécéssaire, malheureusement  la personne que vous avez incarner est tomber seulement enceinte, il aurait fallu se protéger.";
            chx1.className=0;
            chx2.className=0;
            break;

        case "18":
            contexte.textContent="Bravo quelque semaine plus tard, vous avez fait une analyse et  heureusement que vous  vous etes protegé, vous l'avez echapper belle voitre partenaire avait une maladir sexuellement  transmisible, quel  chance que vous avez utiliser un moyen de contraception pour vous protégez.";
            chx1.className=0;
            chx2.className=0;
            break;
        
        case "19":
            contexte.textContent="Aïe, malheureusement votre partenaire avait une maladie sexuellement transmissible, vous l'avez attrapée, dommage... Il aurait fallu s'assurer que chacun d'entre vous n'était pas susceptible de transmettre d'IST à l'autre ou utiliser un moyen de contraception. Aussi, nous avons le plaisir de vous annoncer qu'une grande surprise viendra bouleverser votre quotidien dans 9 mois !!!";
            chx1.className=0;
            chx2.className=0;
        default :
        contexte.textContent="Le jeu est terminé";

    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function speech(){
let contexte = document.getElementById("contexte");
let choix1label = document.getElementById("choix1label");
let choix2label = document.getElementById("choix2label");
var msg = new SpeechSynthesisUtterance();
msg.text = contexte.textContent;
window.speechSynthesis.speak(msg);
sleep(1000);
msg.text = choix1label.textContent;
window.speechSynthesis.speak(msg);
sleep(100);
msg.text = choix2label.textContent;
window.speechSynthesis.speak(msg);
}
