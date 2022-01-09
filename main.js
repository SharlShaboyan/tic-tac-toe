let btn = document.querySelectorAll('.one div, .two div, .three div');
let x = true;

btn.forEach((el) => {
    el.addEventListener('click', f1);
});

function f1() {
    if (x) {
        this.innerHTML = "X";
        x = false;
        this.removeEventListener('click', f1);
        } else {
        this.innerHTML = "O";
        x = true;
        this.removeEventListener('click', f1);
        };
    
    // ---------Row---------
    
    if (btn[0].innerHTML === "X" && btn[1].innerHTML === "X" && btn[2].innerHTML === "X") {
        setTimeout(function() {
            alert("X won");
        }, 200);
    } else if (btn[0].innerHTML === "O" && btn[1].innerHTML === "O" && btn[2].innerHTML === "O") {
        setTimeout(function() {
            alert("O won");
        }, 200);
    };
    
    if (btn[3].innerHTML === "X" && btn[4].innerHTML === "X" && btn[5].innerHTML === "X") {
        setTimeout(function() {
            alert("X won");
        }, 200);
    } else if (btn[3].innerHTML === "O" && btn[4].innerHTML === "O" && btn[5].innerHTML === "O") {
        setTimeout(function() {
            alert("O won");
        }, 200);
    };
    
    if (btn[6].innerHTML === "X" && btn[7].innerHTML === "X" && btn[8].innerHTML === "X") {
        setTimeout(function() {
            alert("X won");
        }, 200);
    } else if (btn[6].innerHTML === "O" && btn[7].innerHTML === "O" && btn[8].innerHTML === "O") {
        setTimeout(function() {
            alert("O won");
        }, 200);
    };
    
    // ------Column-------
    
    if (btn[0].innerHTML === "X" && btn[3].innerHTML === "X" && btn[6].innerHTML === "X") {
        setTimeout(function() {
            alert("X won");
        }, 200);
    } else if (btn[0].innerHTML === "O" && btn[3].innerHTML === "O" && btn[6].innerHTML === "O") {
        setTimeout(function() {
            alert("O won");
        }, 200);
    };
    
    if (btn[1].innerHTML === "X" && btn[4].innerHTML === "X" && btn[7].innerHTML === "X") {
        setTimeout(function() {
            alert("X won");
        }, 200);
    } else if (btn[1].innerHTML === "O" && btn[4].innerHTML === "O" && btn[7].innerHTML === "O") {
        setTimeout(function() {
            alert("O won");
        }, 200);
    };
    
    if (btn[2].innerHTML === "X" && btn[5].innerHTML === "X" && btn[8].innerHTML === "X") {
        setTimeout(function() {
            alert("X won");
        }, 200);
    } else if (btn[2].innerHTML === "O" && btn[5].innerHTML === "O" && btn[8].innerHTML === "O") {
        setTimeout(function() {
            alert("O won");
        }, 200);
    };
    
    // -------from l to r--------
    
    if (btn[0].innerHTML === "X" && btn[4].innerHTML === "X" && btn[8].innerHTML === "X") {
        setTimeout(function() {
            alert("X won");
        }, 200);
    } else if (btn[0].innerHTML === "O" && btn[4].innerHTML === "O" && btn[8].innerHTML === "O") {
        setTimeout(function() {
            alert("O won");
        }, 200);
    };
    
    //--------from r to l------
    
    if (btn[2].innerHTML === "X" && btn[4].innerHTML === "X" && btn[6].innerHTML === "X") {
        setTimeout(function() {
            alert("X won");
        }, 200);
    } else if (btn[2].innerHTML === "O" && btn[4].innerHTML === "O" && btn[6].innerHTML === "O") {
        setTimeout(function() {
            alert("O won");
        }, 200);
    };
    
    };


