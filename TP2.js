// ex1
function Surface(r){
    r = prompt("donne rayon ");
    return Math.PI*Math.pow(r,2);
}
// ex2
var a =3;
var b= 2;
function Multiplie(x=8){
    return x*3;
}
function affiche(){
    alert(Multiplie(a));
    alert(Multiplie(b));
    alert(Multiplie());
}
// ex3
//1
function fonction1(x){
    return x+5;
}
//2
function fonction2(x,y){
    return x+y;
}
//3
function fonction0(){
    n = prompt("donne un nombre");
    return n+2;
}
// ex5
function ageValide(age){
    if (age >=5 && age<= 60){
        return  " Age valide";
    }else{
        return " age invalide";
    }
}
// ex7
//1
var min = (a,b)=>{
    if ( a < b){
        var min = a;
    }else{
        var min = b;
    }
    return min;
}
//2
var max = (a,b)=>{
    if ( a > b){
        var max = a;
    }else{
        var max = b;
    }
    return max;
}
//3
a = parseFloat(prompt("donne un nombre"));
b = parseFloat(prompt("donne un nombre"));
document.write(max(a,b));
document.write("<br>");
document.write(min(a,b));
// ex8
var h = (c) => {
    return c.length;
};
// ex9
var res = '';
function inverser(ch) {
    
    for (let i = ch.length ; i >= 0; i--) {
        res += ch[i];
    }
    return res;
}
// ex10
function  inverserNombre(nb){
    return inverser(nb)
}
// ex11
var c = "";
function dupliquer(ch,nb) {
    for(let i = 0 ;i <= nb; i++){
        c +=ch;
    }
    return c;
}
// ex12
//1
let tables = ["A","B","C","D"];
let tablee = ["a","b","c","d"];
function Tester(ch){
 
 for(let i=0;i<tables.length;i++){
     if(tables[i]===ch[0]){
     return "majuscule";
     }else if(tablee[i]===ch[0]){
     return "minuscule";
    }else{
     return "makaynch"; }
    }
}
//2
 function Contient(chaine) {
        let c = 0;
           
            for (let i = 0; i < chaine.length; i++) {
                if (chaine[i] === '@') {
                    c ++};
                }
            if (c === 1){
                return true
            }else{return false}
    }
//3
function Chiffre(ch){
    
    return isFinite(ch);
    
}
//4
function Remplace(ch){
    let c = "";
    for(let i=0;i<ch.length;i++){
        if(ch[i] >= '0' && ch[i] <= '9'){
             c = c+ "*";
            
        }else{
            c +=  ch[i];
          
        }
        return c;
    }
}
//ex14
let i = parseInt(prompt("donne un nombre positif"));
let a = Math.sqrt(Math.abs(i));
document.writeln(a);
//ex15
let d = parseInt(prompt("donne un nombre aléatoire"));
let q = parseInt( Math.random()*10);

if(d==q){
    document.write("bravo");
}
else if(d>q){
    document.write("plus grand");
}else{
    document.write("plus petit");
}

