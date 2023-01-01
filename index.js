


// document.getElementById('btn').addEventListener('click', check)
// const feed =  document.querySelector('.input-field').value

// function check(){
//     const u = "	https://api.funtranslations.com/translate/minion.json"
// const urL = u + "?text= "+ feed
// // fetch(urL)
// // .then(response=>response.json())
// // .then(json=>console.log(json))
// console.log(feed)

// }
var op = document.querySelector(".output")
function check(){
    let feed =  document.querySelector('.input-field').value
    let urL = "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + feed
    console.log(urL)
fetch(urL)
.then(response => response.json())
// 
.then(json=>{
    var translatedText = json.contents.translated;
    op.innerHTML = translatedText;

})
// .catch(console.log("Error encountered"))
}

document.getElementById('btn').addEventListener('click', check)
