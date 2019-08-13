class Button {
    constructor(text, type, action) {
        this.text = text;
        if(type == "success"||type == "warning"||type == "disabled"||type == "danger"){
        this.type = type;
        } else{
            this.type == "default";
        }
        this.action = action;
    }

    render(parrent_id) {
        // ???
        var box = document.getElementById(parrent_id);
        box.innerHTML += `<button class= "${this.type}" onclick="${this.action}">${this.text}</button>`
        // hint: html representation of the button - <button class="???" onclick="???">???</button> 
    }
}
button1 = new Button("OK", "success", "okAction()")
button1.render("actions");

button2 = new Button("ОТМЕНА", "danger", "cancelAction()")
button2.render("actions");

function okAction() {
    alert("You've accepted")
}
function cancelAction() {
    alert("You've canceled")
}
//  ???