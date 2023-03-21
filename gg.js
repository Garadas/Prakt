let quest=1;
let sum=0;
function calc(id){
if (quest==1){ 
    if (id=='1') {sum++;
}
    document.getElementById('q2').innerHTML = "What is the freezing point of water?";
}
if (quest==2){ 
    if (id=='1') sum++;
    document.getElementById('q2').innerHTML = "What is the longest river in the world?";
}
if (quest==3){ 
    if (id=='1') sum++;
    document.getElementById('q2').innerHTML = "How many chromosomes are in the human genome?";
}
if (quest==4){ 
    if (id=='1') sum++;
    document.getElementById('q2').innerHTML = "Which of these characters are friends with Harry Potter?";
}
if (quest==5){ 
    if (id=='1') sum++;
    document.getElementById('q2').innerHTML = "What is the capital of Canada?";
}
if (quest==6){ 
    if (id=='1') sum++;
    document.getElementById('q2').innerHTML = "What is the Jewish New Year called?";
}
if (quest==7){ 
    if (id=='1') sum++;
    document.getElementById('q2').innerHTML = "What is the freezing point of water?";
}
quest++;    
document.getElementById('q1').innerHTML = "Question "+quest+"/7";

}