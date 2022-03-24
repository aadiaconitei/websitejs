//var vs let
//1.

var primaVariabila = 20;
var primaVariabila = 40; //redeclareare este permisa dar nu este recomandata
//primaVariabila = 60; // reasignarea erte ok , schimba valoarea variabilei
console.log(primaVariabila);
let primulNumar = 10;
//let primulNumar = 17;// redeclararea cu let genereaza eroare: SyntaxError
primulNumar = 27;// reasignarea erte ok , schimba valoarea variabilei
console.log(primulNumar);

//2.
function myTest() {
    //declar local o variabila
    var masina1;
    masina1 = 'Ferrari';
    console.log('Masina mea noua este: ' + masina1);
}
//console.log('Masina ta este: ' + masina1);//ReferenceError
function myTest() {
    //declar local o variabila
    let masina1;
    masina1 = 'Ferrari';
    console.log('Masina mea noua este: ' + masina1);
}
//console.log('Masina ta este: ' + masina1);// ReferenceError
//2.1
{
    //declar global o variabila chiar daca se afla intre { }
    var culoare = 'rosie';
    console.log('Masina mea noua este: ' + culoare);

}
console.log('Masina ta este: ' + culoare);
{
    //declar local o variabila  intre { }
    let model = '125 s';
    console.log('Modelul masinei mele este: ' + model);

}
//console.log('Modelul masinei tale este: ' + model);

//2.2 declarata global
var masina = 'Dacia';

function myCar(){
    console.log('Masina mea din garaj este: '+ masina);
}

console.log('Masina mea este: '+ masina);

let masina2 = 'Opel';

function myCar(){
    console.log('Masina mea din garaj este: '+ masina2);
}

console.log('Masina mea este: '+ masina2);
//3.
function salutvar() {
    console.log(foo); // undefined
    var foo = "Salut Var";
    console.log(foo); 
  }
  
  salutvar();
  function salutlet() {
    console.log(foo); // ReferenceError
    let foo = "Salut let";
    console.log(foo); 
  }
  
  salutlet();

  //4
  let nume = 'Popescu';
  const prenume='Dan';
  nume ='Ionescu';
  prenume = 'Ion';