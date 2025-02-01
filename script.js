function valuta(){
let val = document.getElementById("valu").value.toUpperCase()
fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(resp => resp.json())
    .then(data => {
        let kurs=data.Valute[val].Value
        document.getElementById("kurs").value = kurs //TODO
        console.log(data)
    })
}
function potschitat(){
let val = document.getElementById("valu").value.toUpperCase()
let colvo = document.getElementById("colvo").value.toUpperCase()
fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(resp => resp.json())
    .then(data => {
        let kurs=data.Valute[val].Value
        document.getElementById("col").value = parseInt(kurs*colvo)
        console.log(data)
    })
}
let val = document.getElementById("valu")
fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(resp => resp.json())
    .then(data => {
    Object.keys(data.Valute).forEach(key =>{
        let name=data.Valute[key].Name
        let CharCode=data.Valute[key].CharCode
        console.log(name)
        let option=`<option value="${key}">${name}</option>`
        val.insertAdjacentHTML('beforeend', option);
    })
    })
