const joc = document.querySelector('.container');
const scor = document.getElementById('scor');
const btnReset = document.getElementById('btnReset');
const map = [];
const bw = 70;
const piese = 3;

document.addEventListener('DOMContentLoaded', onLoad);
joc.addEventListener('click', onClick);

function onLoad(){
  joc.style.width = `${piese*bw}px`;
  joc.style.height = `${piese*bw}px`;
  genereazaPiese(piese);
}
function onClick(e){
  let t = e.target;
  let max = map.length;
  if(!t.hasOwnProperty('k')) return;
  //obtine coordonatele piesei
  let l = t.y,
      c = t.x;
  //muta piesa
  if(l+1<max && map[l+1][c]==0){
    t.y=l+1; //schimba coordonata
    t.style.top = `${t.y*bw}px`;//ajusteaza piesa
    map[l+1][c]=t.k;//actualizeaza modelul
    map[l][c]=0;
  }else if(l-1>=0 && map[l-1][c]==0){
    t.y=l-1;
    t.style.top = `${t.y*bw}px`;
    map[l-1][c]=t.k;
    map[l][c]=0;
  }else if(c+1<max && map[l][c+1]==0){
    t.x=c+1;
    t.style.left = `${t.x*bw}px`;
    map[l][c+1]=t.k;
    map[l][c]=0;
  }else if(c-1>=0 && map[l][c-1]==0){
    t.x=c-1;
    t.style.left = `${t.x*bw}px`;
    map[l][c-1]=t.k;
    map[l][c]=0;
  }
  if(gameOver()){
    alert('Felicitari! Ai castigat!');
    btnReset.disabled=false;
  }
}
function gameOver(){
  let res = true;
  for(let i=0; i<piese; i++){
    let min = i*piese+1;
    let cnt = i==piese-1?piese-1:piese;
    for(let j=1; j<cnt; j++){
      if(map[i][0]!=min || map[i][j]!=map[i][j-1]+1){
        return false;
      }
    }
  }
  return res;
}
function genereazaPiese(l){
  let keys = [];
  for(let i=0; i<l*l-1; i++){
    keys.push(i+1);
  }
  let x, y;
  //init map
  for(let i=0; i<l; i++){
    map.push(Array(l).fill(0));
  }
  for(let i=0; i<l*l-1; i++){
    //determina x si y
    y = Math.floor(i / l);
    x = Math.round(i % l);
    //obtine cheia
    let ndx = genereazaNumar(0,keys.length-1);
    let key = keys[ndx];
    keys.splice(ndx,1);

    //genereaza si plaseaza element pentru cheia curenta
    let img = document.createElement('div');
    img.k = key;
    img.x = x;
    img.y = y
    img.style.left = `${x*bw}px`;
    img.style.top = `${y*bw}px`;
    img.classList.add('img');
    img.textContent = key;
    //modifica modelul
    map[y][x] = key;
    joc.appendChild(img);
  }
}
function genereazaNumar(min, max) {
  return Math.ceil(min + Math.random() * (max - min));
}

