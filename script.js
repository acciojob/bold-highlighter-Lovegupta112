let strong=document.getElementsByTagName('strong');
console.log(strong);
function highlight() {
    //Write your code here
for(let elm of strong){
    // console.log(elm);
    elm.style.color='green';
}
}


function return_normal() {
    //Write your code here

    for(let elm of strong){
        elm.style.color='black';
    }
}
