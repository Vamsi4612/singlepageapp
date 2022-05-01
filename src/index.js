import {navbar , translator} from '../components/navbar.js'
import '../styles/navbar.css'
import '../styles/translate.css'
document.querySelector("#navbar").innerHTML = navbar()
console.log(navbar)
document.querySelector("#container").innerHTML = translator()
console.log(translator)


document.querySelector("#translate").addEventListener("click" , trans)
function read(selector){
    return document.querySelector(selector).value
}
// https://libretranslate.de/translate
async function trans(){
    try{
    const text = read("#text-input")
    const lang_in =read("#inputselect")
    const lang_out =read("#outputselect")

    const url = "https://libretranslate.de/translate"
    const res= await fetch(url, {
        
        method : "POST",
        body : JSON.stringify({
            q:text,
            source: lang_in,
            target: lang_out,
            format: "text",
        }),
        headers:{
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    document.querySelector("#translatedoutput").innerHTML = data.translatedText

    }
    catch(err){
        console.log(err)
    }

}