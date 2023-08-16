var p_antes = this.document.getElementById("trava-purificador").offsetTop
var p_a_antes = this.document.getElementById("trava-agua-purificador").offsetTop
var a_antes = this.document.getElementById("trava-agua").offsetTop
var fluxo_antes = this.document.getElementById("fluxo-agua").offsetLeft
var p = false
var a = false

function move () {
    
    if (!p && !a)
        this.document.getElementById("estado").innerHTML = "Q0"

    if (p)
    {
        this.document.getElementById("p").style.border = "solid white"
    }
    else
    {
        this.document.getElementById("p").style.border = ""
    }

    if (a)
    {
        this.document.getElementById("a").style.border = "solid white"
    }
    else
    {
        this.document.getElementById("a").style.border = ""
    }

    if (p) {
        this.document.getElementById("trava-purificador").style.top = (p_antes + 15) + "px"
        this.document.getElementById("estado").innerHTML = "Q1"

        if (a) {
            this.document.getElementById("trava-agua-purificador").style.top = (p_a_antes - 15) + "px"
            this.document.getElementById("trava-agua").style.top = a_antes + "px"
            this.document.getElementById("fluxo-agua").style.left = (fluxo_antes - 25) + "px"
            this.document.getElementById("estado").innerHTML = "Q3"
        }
        else
        {
            this.document.getElementById("trava-agua-purificador").style.top = p_a_antes + "px"
            this.document.getElementById("fluxo-agua").style.left = fluxo_antes + "px"
        }

    }
    else
    {
        this.document.getElementById("trava-purificador").style.top = p_antes + "px"
        this.document.getElementById("trava-agua-purificador").style.top = p_a_antes + "px"

        if (a) {
            this.document.getElementById("trava-agua").style.top = (a_antes - 15) + "px"
            this.document.getElementById("fluxo-agua").style.left = (fluxo_antes - 25) + "px"
            this.document.getElementById("estado").innerHTML = "Q2"
        }
        else
        {
            this.document.getElementById("trava-agua").style.top = a_antes + "px"
            this.document.getElementById("fluxo-agua").style.left = fluxo_antes + "px"
        }
    }

    
}


window.addEventListener("keydown", function(event){
    var tecla = event.key

    //p -> 80 e a -> 65
    
    if ( tecla === 'p') {
        p = true
    }

    if ( tecla === 'a') {
        a = true
    }

    move()

})

window.addEventListener("keyup", function(event){
    var tecla = event.key

    //p -> 80 e a -> 65
    
    if ( tecla === 'p') {
        p = false
    }

    if ( tecla === 'a') {
        a = false
    }

    move()
})