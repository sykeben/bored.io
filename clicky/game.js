if (typeof localStorage.getItem('clicky.count') === undefined) localStorage.setItem('clicky.count', 0)

function countUp() {
    localStorage.setItem('clicky.count', parseInt(localStorage.getItem('clicky.count'))+1)
    update()
}

function update() {
    $('#count').text(localStorage.getItem('clicky.count'))
}

window.onload = update()