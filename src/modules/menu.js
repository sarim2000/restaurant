function menu(){
    const sec = document.createElement('section');
    sec.setAttribute('class','tabcontent');
    

    const para = document.createElement('p');
    para.innerHTML = "Biryani";
    const paraimg = document.createElement('img');
    paraimg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Biryani_Home.jpg/1200px-Biryani_Home.jpg"
    paraimg.style.height = "300px";
    paraimg.style.marginLeft = "auto";
    paraimg.style.marginRight = "auto"
    para.style.textAlign = "center";
    paraimg.style.display = "block"
    // para.style.display = "block"
    const sR = document.createElement('div');
    const sR1 = document.createElement('div');
    const sR2 = document.createElement('div');
    const sR3 = document.createElement('div');
    const para1 = document.createElement('p');
    sR.setAttribute('class','secondRow');
    para1.innerHTML = "Nehari";
    para1.style.marginLeft = "150px";
    const paraimg1 = document.createElement('img');
    paraimg1.src = "https://upload.wikimedia.org/wikipedia/commons/2/24/Nihari.JPG";
    paraimg1.style.width = "400px";
    paraimg1.style.height = "300px";
    const para2 = document.createElement('p');
    // para1.setAttribute('class','secondRow');
    para2.innerHTML = "Tea";
    para2.setAttribute('class','tea');
    para2.style.textAlign = "center";
    
    const paraimg2 = document.createElement('img');
    paraimg2.src = "https://www.thestatesman.com/wp-content/uploads/2019/05/tea-culture-1024x683.jpg";
    paraimg2.style.width = "400px";
    paraimg2.style.height = "300px";
    const para3 = document.createElement('p');
    para3.innerHTML = "Kebabs";
    para3.style.textAlign = "center";
    const paraimg3 = document.createElement('img');
    paraimg3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2qGA53N6c9iyJVFhNlnJUkKmhYnVnmaKVw&usqp=CAU";
    sR3.appendChild(para3);
    sR3.appendChild(paraimg3);
    paraimg3.style.width = "400px";
    paraimg3.style.height = "300px";
    
    sR1.appendChild(para2);
    sR1.appendChild(paraimg2);
    sec.appendChild(para);
    sec.appendChild(paraimg);
    sR2.style.marginRight = "150px";
    sR1.style.marginRight = "150px";
    sR2.style.marginLeft = "10px";
    sR2.appendChild(para1);
    sR2.appendChild(paraimg1);
    sR.appendChild(sR2);
    sR.appendChild(sR1);
    sR.appendChild(sR3);

    sec.appendChild(sR);
    
    
    return sec;
}

function loadmenu(){
    const content = document.getElementById('content');

    const infos = menu();

    content.appendChild(infos);
}

export default loadmenu;    