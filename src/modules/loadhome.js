function info(){
    const sec = document.createElement('section');
    sec.setAttribute('class','tabcontent');
    const img = document.createElement('img');
    img.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

    img.setAttribute('class','set');
    sec.appendChild(img);
    const about = document.createElement('p');
    about.innerHTML = "In a restaurant one is both observed and unobserved. Joy and sorrow can be displayed and observed unwittingly, the writer scowling naively and the diners wondering, What the hell is he doing?";
    about.setAttribute('class','paragraph');
    sec.appendChild(about);
    return sec;
}

function loadhome(){
    const content = document.getElementById('content');

    const infos = info();

    content.appendChild(infos);

}

export default loadhome;