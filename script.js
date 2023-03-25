// recupere les elements du DOM pour realiser le jeu
let cases =[... document.getElementsByClassName('case')];
let joueur = document.getElementById('joueur');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let scoreNul = document.getElementById('scoreNul');

// memo des stats du jeu
let state = {
    joueurEnCours: 1,
    scoreJ1:0,
    scoreJ2:0,
    matchNuls:0,
    c1:0,
    c2:0,
    c3:0,
    c4:0,
    c5:0,
    c6:0,
    c7:0,
    c8:0,
    c9:0,

}

const verifierVictoire = () => {
    if(
        (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c7 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0)
    ){
        return true;
    } else if(
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
    ){
        return null;
    } else{
        return false;
    }
}
const jouerCase = (e) =>{
    let idCase = e.target.id;
    // si case déja jouée on ne fait rien
    if(state[idCase] !== 0)
    return;
    
    state[idCase] = state.joueurEnCours;
    
    let isVictoire = verifierVictoire();
    if (isVictoire === true){
        // si il ya victoire
        alert ("Le gagnant est le joueur" + state.joueurEnCours);
        if (state.joueurEnCours === 1){
            state.scoreJ1++;
            score1.textContent = state.scoreJ1;
        } else{
            state.scoreJ2++;
      score2.textContent = state.scoreJ2;
        }

        resetState();
        cases.forEach((c) => (c.textContent = ""));
    } else if (isVictoire === null){
        // si il ya nul
        alert("Match nul !");

        state.matchNul++;
        scoreNul.textContent = state.matchNul;
        joueur.textContent = "1";
    
        resetState();
        cases.forEach((c) => (c.textContent = ""));
    } else if (isVictoire === false) {
        // sinon dans ce cas on continue le jeu
        if (state.joueurEnCours == 1) {
            state.joueurEnCours = 2;
            e.target.textContent = "X";
            joueur.textContent = "2";
          } else {
            state.joueurEnCours = 1;
            e.target.textContent = "O";
            joueur.textContent = "1";
          }

    }

};
cases.forEach((el)=>{
    el.addEventListener("click",jouerCase);
});


// const playButton = document.querySelector("button");

// const pauseButton = document.querySelector("pause");

// const monAudio = document.querySelector("audio");


// playButton.addEventListener("click",function(){
//     monAudio.play();
// })

// pauseButton.addEventListener("click",function(){
//     monAudio.pause();
// })