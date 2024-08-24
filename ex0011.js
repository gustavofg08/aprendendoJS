function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += ('<p>foi <strong>multado</strong> OTARIO</p>')
}
        }