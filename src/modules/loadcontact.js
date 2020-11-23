function contact(){
    const sect = document.createElement('section');
    sect.setAttribute('class','tabcontent');
    sect.style.backgroundColor = "red";
    const para = document.createElement('p');
    para.innerHTML = "You cannot and will NOT contact us!";
    para.style.fontSize = "xx-large";
    para.style.textAlign = "center";
    sect.appendChild(para);
    return sect;
}

function loadcontact(){
    const content = document.getElementById('content');
    const infos = contact();

    content.appendChild(infos);
}

export default loadcontact;