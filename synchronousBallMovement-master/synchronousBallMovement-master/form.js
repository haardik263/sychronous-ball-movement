class Form{
    constructor(){}
    display(){
    var title= createElement("h2")
    title.html("car racing game")
    title.position(500,0)
    var input= createInput("Name")
    var button=createButton("Play")
    input.position(500,200)
    button.position(500,250)
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var greeting=createElement("h3")
        greeting.html("Hello"+name)
        greeting.position(500,200)
    })
    }
}