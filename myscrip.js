let textarea = document.getElementById("text");
let outputDiv1 = document.getElementById('kok');
let outputDiv2 = document.getElementById('kak');
let outputDiv3 = document.getElementById('kek');
let outputDiv4 = document.getElementById('krk');
let outputDiv5 = document.getElementById('ktk');
let outputDiv6 = document.getElementById('kyk');
let outputDiv7 = document.getElementById('kuk');
let button1 = document.getElementById('Bone');
let checkone = document.getElementById('one');
let checktwo = document.getElementById('two');
let checkthree = document.getElementById('three');
let checkfour = document.getElementById('four');
let checkfive = document.getElementById('five');
let checksix = document.getElementById('six');
let checkseven = document.getElementById('seven');


textarea.addEventListener("input" , searchwords);

function searchwords() {
   if(checkone.checked){
    let text = textarea.value;
    let words = text.split(/\s+/);
    let count = words.filter(words => words.trim() !== '');
    const lol = /[^0-9]/;
    count = count.filter(count => lol.test(count));
    const kek = /[^~!@#$^%&*()_+-/|<>"':;}{]/;
    count = count.filter(count => kek.test(count));
   outputDiv1.innerHTML = `Кількість слів: ${count.length}`;
   }
};
textarea.addEventListener("input" , searcword);

function searcword(){
    if(checktwo.checked){
        let countword = textarea.value;
 outputDiv2.innerHTML = `Кількість символів: ${countword.length}`;
    }
}
 
textarea.addEventListener("input" , nospace);

function nospace(){
    if(checkthree.checked){
    let nospace = textarea.value;
     let fnospace = nospace.replace(/\s/g, '').length;
    outputDiv3.innerHTML = `Кількість символів без пробілів: ${fnospace}`;
    }
};
textarea.addEventListener("input", persent);

function persent() {
    if(checkfour.checked){
    let text = textarea.value.toLowerCase();
    let charMap = new Map();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    let totalChars = text.length;
   
    let percentages = new Map();
    charMap.forEach((count, char) => {
        let percentage = (count / totalChars) * 100
        percentages.set(char, percentage.toFixed(2) + '%');
    });
    console.log(percentages)
    outputDiv4.innerHTML = `% Символів: ${JSON.stringify(Array.from(percentages))}`;
    }
}


textarea.addEventListener("input", vol);

function vol(){
    if(checkfive.checked){
    let vol = textarea.value;
    let vowels = vol.match(/[аеёиоуіїыэюя]/gi);
    let gg = vowels ? vowels.length : 0;
    outputDiv5.innerHTML = `Кількість голосних: ${gg}`;
    }
}

textarea.addEventListener("input", bol);

function bol(){
    if(checksix.checked){
    let bol = textarea.value;
    let bowels = bol.match(/[бвгджзйклмнпрсстфхцчш]/gi);
    let bb = bowels ? bowels.length : 0;
    outputDiv6.innerHTML = `Кількість приголосних: ${bb}`;
    }
}
textarea.addEventListener("input", what);

function what(){
    if(checkseven.checked){
    let wol = textarea.value;
    let wowels = wol.match(/[-!?'";:,._*]/gi);
    let ww = wowels ? wowels.length : 0;
    outputDiv7.innerHTML = `Кількість розділових знаків: ${ww}`;
    }
}
button1.addEventListener('click', function(){
    textarea.value = '';
  
    });

  
