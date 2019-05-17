if (localStorage.getItem('clicky.count') == null) localStorage.setItem('clicky.count', '0')

function countUp() {
    localStorage.setItem('clicky.count', (parseInt(localStorage.getItem('clicky.count'))+1).toString())
    update()
}

function update() {
    $('#count').text(localStorage.getItem('clicky.count'))
}

window.onload = update()