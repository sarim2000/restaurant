import loadpage from './modules/initial-load';
import loadhome from './modules/loadhome';
import loadmenu from './modules/menu';
import loadcontact from './modules/loadcontact';

loadpage();
const cls = document.getElementsByClassName("tabcontent");
const btn = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

btn.addEventListener('click',function(){
    for (let i = 0; i < cls.length; i++)
        cls[i].style.display = "none";
    loadhome();
});
menu.addEventListener('click',function(){
    for (let i = 0; i < cls.length; i++)
        cls[i].style.display = "none";
    loadmenu();
});
contact.addEventListener('click',function(){
    for (let i = 0; i < cls.length; i++)
        cls[i].style.display = "none";
    loadcontact();
});

