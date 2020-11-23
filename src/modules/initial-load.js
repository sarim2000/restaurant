function createHeader(id,text){
  const header = document.createElement('header');
  const logo = document.createElement('h1');
  logo.textContent = text;
  logo.setAttribute('class', id);
  header.appendChild(logo);
  return header;
}

function button(id,text){
    const btn = document.createElement('button');
    btn.setAttribute('id',id);
    btn.textContent = text;
    return btn;
}

function createNav(id){
    const nav = document.createElement('nav');
    const homebtn = button('home',"Home");
    const menubtn = button('menu','Menu');
    const contactbtn = button('contact','Contact');

    nav.appendChild(homebtn);
    nav.appendChild(menubtn);
    nav.appendChild(contactbtn);

    return nav;
}



function loadpage(){
    const content = document.getElementById('content');

    const header = createHeader('header', 'Restaurant');
    content.appendChild(header);

    const nav = createNav('btn');
    content.appendChild(nav);
}

export default loadpage;