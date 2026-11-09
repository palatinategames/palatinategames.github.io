const header = document.createElement('h1');
header.textContent = 'the palatinate games';
document.getElementById('top').appendChild(header);

buildUL();

function buildUL() {
    
    const ul = document.createElement('ul');

    buildListElement("index.html",ul,'home');
    document.getElementById('top').appendChild(ul);
    
}


function addGame(ref,div) {
    
}

function buildListElement(href,ul,name) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = name;
    a.href = href;
    li.appendChild(a);
    ul.appendChild(li);
}