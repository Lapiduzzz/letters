
function letter(text) {
    text = text.replaceAll('а', 'a')
    text = text.replaceAll('е', 'e')
    text = text.replaceAll('о', 'ο')
    text = text.replaceAll('р', 'p')
    text = text.replaceAll('с', 'c')
    text = text.replaceAll('у', 'y')
    text = text.replaceAll('х', 'x')

    text = text.replaceAll('А', 'A')
    text = text.replaceAll('В', 'B')
    text = text.replaceAll('Е', 'E')
    text = text.replaceAll('К', 'K')
    text = text.replaceAll('М', 'M')
    text = text.replaceAll('Н', 'H')
    text = text.replaceAll('О', 'Ο')
    text = text.replaceAll('Р', 'P')
    text = text.replaceAll('С', 'C')
    text = text.replaceAll('Т', 'T')
    text = text.replaceAll('Х', 'X')

    return text
}



let area = document.getElementById('area')
let display = document.getElementById('display')




let xx = (text) =>{
    display.innerHTML = `<p>${letter(text)}</p>`

}


area.addEventListener('input', (e) => {xx(e.target.value)})


