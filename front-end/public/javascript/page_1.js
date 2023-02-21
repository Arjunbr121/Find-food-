const not=document.getElementById('val1');
not.addEventListener('click',(e)=>{
    divclick
})
function divclick(){
    console.log('click')
}
var a;
function show(){
    if(a==1){
    document.getElementById('val1').style.display="inline";
    return a=0;
}
else {
    document.getElementById('val1').style.display="none";
    return a=1;
}
}