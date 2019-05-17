if (localStorage.getItem('clicky.count') == null) localStorage.setItem('clicky.count', '0')
var count = localStorage.getItem('clicky.count')

function autoSave() { localStorage.setItem('clicky.count', count.toString()); setTimeout(autoSave, 100) }

function countUp() { count++; update() }

function update() { $('#count').text(count) }

window.onload = function() { update(); autoSave() }