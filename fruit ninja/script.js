//Criando o elemento
var canvas = document.createElement("canvas")

//Definindo tamanho
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.prepend(canvas)

var ctx = canvas.getContext("2d")

var x = Math.random() * window.innerWidth
var y = Math.random() * window.innerHeight

var w = 50
var h = 50


ctx.beginPath()
ctx.rect( x, y, w, h)
ctx.fillStyle = "red"
ctx.fill()


function desenhar(){

    ctx.clearRect(0,0,canvas.width , canvas.height)

    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight

    var w = 50
    var h = 50


    ctx.beginPath()
    ctx.rect( x, y, w, h)
    ctx.fillStyle = "red"
    ctx.fill()
}



var ultimoTempo  = 0


function atualizar(deltaTempo){
    var time = deltaTempo - ultimoTempo
    ultimoTempo = deltaTempo
    desenhar()
    console.log(time)
    
    requestAnimationFrame(atualizar)
}


requestAnimationFrame(atualizar)



