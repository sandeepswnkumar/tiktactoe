let tikToe = "X";
let temp = ""
let player = document.getElementById('player');
let boxItam = document.getElementById('boxItam');
let reset = document.getElementById('reset');
let showModal = document.getElementById('showModal');
let winPlayer = document.getElementById('winPlayer');
let greet = document.getElementById('greet');

let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3');
let span4 = document.getElementById('span4');
let span5 = document.getElementById('span5');
let span6 = document.getElementById('span6');
let span7 = document.getElementById('span7');
let span8 = document.getElementById('span8');
let span9 = document.getElementById('span9');


let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');

let tik = document.getElementById('tik');


const kik = () => {
    if (tikToe === "X") {
        tikToe = "O"
        tik.innerText = "O"
        player.style.color = "red"
    } else {
        tikToe = "X"
        tik.innerText = "X"
        player.style.color = "#2ecc71"
    }
}

//Reset
reset.addEventListener('click', () => {
    location.reload();

})
showModal.addEventListener('click', () => {
    location.reload();
    showModal.style.display = 'none';
})



//Results
boxItam.addEventListener('click', () => {
    if (box1.innerText !== "" && box2.innerText !== "" && box3.innerText !== "" && box4.innerText !== "" && box5.innerText !== "" && box6.innerText !== "" && box7.innerText !== "" && box8.innerText !== "" && box9.innerText !== "") {
        winPlayer.innerHTML = "No one WIN";
        greet.innerHTML = "Oops";
        showModal.style.display = 'flex';
    }
    else {
        if ((box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X") || (box1.innerText === "O" && box2.innerText === "O" && box3.innerText === "O")) {
            if (box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X") {

                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';

            }
            if (box1.innerText === "O" && box2.innerText === "O" && box3.innerText === "O") {

                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';

            }

        }
        else if ((box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X") || (box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O")) {
            if (box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X") {
                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }
            if (box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O") {
                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }

        }
        else if ((box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X") || (box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O")) {
            if (box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X") {

                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';

            }


            if (box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O") {
                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }

        }
        else if ((box7.innerText === "X" && box8.innerText === "X" && box9.innerText === "X") || (box7.innerText === "O" && box8.innerText === "O" && box9.innerText === "O")) {
            if (box7.innerText === "X" && box8.innerText === "X" && box9.innerText === "X") {
                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }

            if (box7.innerText === "O" && box8.innerText === "O" && box9.innerText === "O") {
                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';

            }

        }
        else if ((box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X") || (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O")) {
            if (box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X") {
                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }
            if (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O") {
                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }

        }
        else if ((box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X") || (box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O")) {
            if (box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X") {
                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }
            if (box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O") {
                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }
        }
        else if ((box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X") || (box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O")) {
            if (box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X") {
                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }
            if (box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O") {
                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }

        }
        else if ((box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X") || (box1.innerText === "O" && box5.innerText === "O" && box9.innerText === "O")) {
            if (box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X") {
                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }
            if (box1.innerText === "O" && box5.innerText === "O" && box9.innerText === "O") {
                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }

        }
        else if ((box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X") || (box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O")) {
            if (box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X") {
                winPlayer.innerHTML = "Player X WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }
            if (box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O") {
                winPlayer.innerHTML = "Player O WIN";
                greet.innerHTML = "Congratulations";
                showModal.style.display = 'flex';
            }

        }

    }
})



box1.addEventListener('click', () => {

    if (box1.innerHTML === `<div class="active disable">${temp}</div>`) {
        return;

    }
    else if (box1.innerHTML === `<div class="active disable" id="">${temp}</div>`) {
        return;
    }
    else {
        box1.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        if (box1.innerText === "X") {
            box1.style.color = "yellow"
        }
        if (box1.innerText === "O") {
            box1.style.color = "red"
        }
        kik();
    }


})

box2.addEventListener('click', (e) => {
    if (box2.innerHTML === `<div class="active disable">${temp}</div>`) {

        return;

    }
    else if (box2.innerHTML === `<div class="active disable" id="">${temp}</div>`) {

        return;
    }
    else {
        box2.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        
        if (box2.innerText === "X") {
            box2.style.color = "yellow"
        }
        if (box2.innerText === "O") {
            box2.style.color = "red"
        }
        kik();
    }

})
box3.addEventListener('click', (e) => {
    if (box3.innerHTML === `<div class="active disable">${temp}</div>`) {
        return;

    }
    else if (box3.innerHTML === `<div class="active disable" id="">${temp}</div>`) {
        return;
    }
    else {
        box3.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        if (box3.innerText === "X") {
            box3.style.color = "yellow"
        }
        if (box3.innerText === "O") {
            box3.style.color = "red"
        }
        kik();
    }

})
box4.addEventListener('click', () => {
    if (box4.innerHTML === `<div class="active disable">${temp}</div>`) {
        return;

    }
    else if (box4.innerHTML === `<div class="active disable" id="">${temp}</div>`) {
        return;
    }
    else {
        box4.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        if (box4.innerText === "X") {
            box4.style.color = "yellow"
        }
        if (box4.innerText === "O") {
            box4.style.color = "red"
        }
        kik();
    }

})
box5.addEventListener('click', () => {
    if (box5.innerHTML === `<div class="active disable">${temp}</div>`) {
        return;

    }
    else if (box5.innerHTML === `<div class="active disable" id="">${temp}</div>`) {
        return;
    }
    else {
        box5.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        if (box5.innerText === "X") {
            box5.style.color = "yellow"
        }
        if (box5.innerText === "O") {
            box5.style.color = "red"
        }
        kik();
    }

})
box6.addEventListener('click', () => {
    if (box6.innerHTML === `<div class="active disable">${temp}</div>`) {
        return;

    }
    else if (box6.innerHTML === `<div class="active disable" id="">${temp}</div>`) {
        return;
    }
    else {
        box6.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        if (box6.innerText === "X") {
            box6.style.color = "yellow"
        }
        if (box6.innerText === "O") {
            box6.style.color = "red"
        }
        kik();
    }

})
box7.addEventListener('click', () => {
    if (box7.innerHTML === `<div class="active disable">${temp}</div>`) {
        return;

    }
    else if (box7.innerHTML === `<div class="active disable" id="">${temp}</div>`) {
        return;
    }
    else {
        box7.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        if (box7.innerText === "X") {
            box7.style.color = "yellow"
        }
        if (box7.innerText === "O") {
            box7.style.color = "red"
        }
        kik();
    }

})
box8.addEventListener('click', () => {
    if (box8.innerHTML === `<div class="active disable">${temp}</div>`) {
        return;

    }
    else if (box8.innerHTML === `<div class="active disable" id="">${temp}</div>`) {
        return;
    }
    else {
        box8.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        if (box8.innerText === "X") {
            box8.style.color = "yellow"
        }
        if (box8.innerText === "O") {
            box8.style.color = "red"
        }
        kik();
    }

})
box9.addEventListener('click', () => {
    if (box9.innerHTML === `<div class="active disable">${temp}</div>`) {
        return;

    }
    else if (box9.innerHTML === `<div class="active disable" id="">${temp}</div>`) {
        return;
    }
    else {
        box9.innerHTML = `<div class="active disable">${tikToe}</div>`;
        temp = tikToe;
        if (box9.innerText === "X") {
            box9.style.color = "yellow"
        }
        if (box9.innerText === "O") {
            box9.style.color = "red"
        }
        kik();
    }

})








//hover Effect
box1.addEventListener('mouseover', () => {
    span1.innerText = `${tikToe}`;

})

box2.addEventListener('mouseover', () => {
    span2.innerHTML = `${tikToe}`;

})
box3.addEventListener('mouseover', () => {
    span3.innerHTML = `${tikToe}`;

})
box4.addEventListener('mouseover', () => {
    span4.innerHTML = `${tikToe}`;

})
box5.addEventListener('mouseover', () => {
    span5.innerHTML = `${tikToe}`;

})
box6.addEventListener('mouseover', () => {
    span6.innerHTML = `${tikToe}`;

})
box7.addEventListener('mouseover', () => {
    span7.innerHTML = `${tikToe}`;

})
box8.addEventListener('mouseover', () => {
    span8.innerHTML = `${tikToe}`;

})
box9.addEventListener('mouseover', () => {
    span9.innerHTML = `${tikToe}`;

})




//mouseout effect
box1.addEventListener('mouseout', () => {
    span1.innerText = '';

})

box2.addEventListener('mouseout', () => {
    span2.innerHTML = '';

})
box3.addEventListener('mouseout', () => {
    span3.innerHTML = '';

})
box4.addEventListener('mouseout', () => {
    span4.innerHTML = '';

})
box5.addEventListener('mouseout', () => {
    span5.innerHTML = '';

})
box6.addEventListener('mouseout', () => {
    span6.innerHTML = '';

})
box7.addEventListener('mouseout', () => {
    span7.innerHTML = '';

})
box8.addEventListener('mouseout', () => {
    span8.innerHTML = '';

})
box9.addEventListener('mouseout', () => {
    span9.innerHTML = '';

})


