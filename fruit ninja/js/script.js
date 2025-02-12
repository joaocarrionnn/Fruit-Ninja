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


var x = 0
var y = 0
var w = 50
var h = 50
var p_inicial_x = Math.random() * (canvas.height - 100) + 50
var p_inicial_y = canvas.height - 50
var velocidade = 70 //Alterar depois

var angulo_radiano = velocidade * (Math.PI / 180)
var v_inicial_x = velocidade * Math.cos(angulo_radiano)
var v_inicial_y = -velocidade * Math.sin(angulo_radiano)
const g = 9.82
var tempo = 0
var escala = 17





function desenhar(p_tempo){


   tempo += p_tempo * escala

    ctx.clearRect(0,0,canvas.width , canvas.height)

    x = p_inicial_x + (v_inicial_x * tempo)
    y = p_inicial_y + (v_inicial_y * tempo)+ (0.5 * g * tempo * tempo)


    ctx.beginPath()
    ctx.rect( x, y, w, h)
    ctx.fillStyle = "blue"
    ctx.fill()

    if (y > canvas.height - 50){
        tempo = 0
    }
}



var ultimoTempo  = 0


function atualizar(deltaTempo){
    var time = (deltaTempo - ultimoTempo) / 1000
    ultimoTempo = deltaTempo
    desenhar(time)
    console.log(time)
    
    requestAnimationFrame(atualizar)
}


requestAnimationFrame(atualizar)



