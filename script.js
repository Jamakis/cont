const usersE = document.getElementById('users');
const inputE = document.getElementById('input');
const formE = document.getElementById('form')

formE.addEventListener('submit', e => {
    e.preventDefault();
    gubid1(inputE.value);
})

function render(json) {
    usersE.innerText = '';
    const divE = document.createElement('div');
    const h2E = document.createElement('h2');
    const nameE = document.createElement('p');
    const idE = document.createElement('p');
    const mailE = document.createElement('p');

    h2E.innerText = json.username;
    nameE.innerText = json.name;
    idE.innerText = json.id;
    mailE.innerText = json.email;

    divE.appendChild(h2E);
    divE.appendChild(nameE);
    divE.appendChild(idE);
    divE.appendChild(mailE);
    usersE.appendChild(divE);
}

function render1(json) {
    const divE = document.createElement('div');
    const h2E = document.createElement('h2');
    const nameE = document.createElement('p');
    const idE = document.createElement('p');
    const mailE = document.createElement('p');

    h2E.innerText = json.username;
    nameE.innerText = json.name;
    idE.innerText = json.id;
    mailE.innerText = json.email;

    divE.appendChild(h2E);
    divE.appendChild(nameE);
    divE.appendChild(idE);
    divE.appendChild(mailE);
    usersE.appendChild(divE);
}

function gubid1(id){
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(
        obj => obj.json(),
        err => console.log(err)
    ).then(
        json => render(json),
        err => console.log(err)
    )
}


function gubid(id){
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(
        obj => obj.json(),
        err => console.log(err)
    ).then(
        json => render1(json),
        err => console.log(err)
    )
}

gubid(1)
gubid(2)
gubid(3)
gubid(4)
gubid(5)
gubid(6)
gubid(7)
gubid(8)
gubid(9)
gubid(10)

