var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
link.integrity = "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p";
link.crossOrigin = 'anonymous';
head.appendChild(link);

document.body.onload = addElement;

function addElement() {

    const Div = document.createElement("div");
    Div.style.fontFamily = "Monospace";



    const newDiv = document.createElement("div");
    newDiv.style.margin = "3% 13%";
    newDiv.style.background = "rgb(128,128,128)";
    newDiv.style.height = "290px";
    newDiv.style.padding = ".5% 0% .5%";



    const newDivone = document.createElement("div");
    newDivone.style.margin = "138px 0 0";
    const image = document.createElement('img');
    image.src = './john.png';
    image.style.width = "15%";
    image.style.height = "170px";
    image.style.borderRadius = "50%";
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundSize = "cover";
    image.style.border = "4px dotted yellow";
    image.style.margin = "0 42.25%";
    newDivone.append(image);



    const newDivTh = document.createElement("div");
    newDivTh.style.margin = "1.4% 0 0";
    newDivTh.style.background = "rgb(128,128,128)";
    newDivTh.style.height = "29px";


    const newDivtwo = document.createElement("div");
    newDivtwo.style.margin = " -75px 31% ";
    newDivtwo.style.height = "82px";
    newDivtwo.style.width = "38%";
    newDivtwo.style.backgroundColor = "rgb(243,176,42)";
    newDivtwo.style.position = "relative";
    newDivtwo.style.paddingTop = "10px"
    newDivtwo.innerText = "John Doe";
    newDivtwo.style.textAlign = "center";
    newDivtwo.style.fontSize = "55px";

    newDivone.appendChild(newDivtwo);
    const Address = document.createElement("p");
    Address.innerText = "Varanasi India | +919140780963 | dummmyemail.com | www.domain.com |";
    Address.style.textAlign = "center";
    Address.style.fontSize = "18px";
    Address.style.margin = ".25rem";

    const HR = document.createElement("hr");
    HR.style.border = ".8px solid black"



    const matter = document.createElement("div");
    matter.style.display = "flex";
    matter.style.fontSize = "16px";
    matter.style.padding = "1% 0 8%";
    matter.style.textAlign = "center";



    const matterO = document.createElement("div");
    matterO.style.flex = "1";
    matterO.style.height = "auto";
    matterO.style.padding = "0% .5% 0% 1.75%";
    matterO.style.borderRight = "3px solid grey";
    const icons = document.createElement("span");
    icons.style.fontSize = "50px";
    const I = document.createElement("i");
    I.className = "fas fa-user-circle";
    I.style.float = "left";
    I.style.margin = "0 3% 0 12%";
    icons.appendChild(I);
    const P1 = document.createElement("span");
    P1.innerText = "Profile";
    P1.style.fontSize = "24px";
    P1.style.float = "left";
    P1.style.position = "relative";
    P1.style.marginTop = "1.8rem"



    const BR = document.createElement("br");
    const BR1 = document.createElement("br");
    const BR2 = document.createElement("br");
    const BR3 = document.createElement("br");
    const BR4 = document.createElement("br");
    const BR5 = document.createElement("br");



    const P2 = document.createElement("p");
    P2.style.fontSize = "15px";
    P2.innerText = "I am a full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.";



    const SkillDiv = document.createElement("div");
    SkillDiv.style.margin = "1.6rem 0";
    const I2 = document.createElement("i");
    I2.className = "fas fa-flask";
    I2.style.float = "left";
    I2.style.margin = "0 3% 0 12%";
    I2.style.fontSize = "50px";
    const P3 = document.createElement("span");
    P3.innerText = "Skills";
    P3.style.fontSize = "24px";
    P3.style.float = "left";
    P3.style.position = "relative";
    P3.style.marginTop = "1.8rem";
    const P4 = document.createElement("p");
    P4.style.fontSize = "20px";
    P4.innerText = "Technical Skills";
    SkillDiv.appendChild(I2);
    SkillDiv.appendChild(P3);
    SkillDiv.appendChild(BR1);



    const Pdiv = document.createElement("div");
    Pdiv.style.margin = "2rem 0 4rem";
    const JS = document.createElement("span");
    JS.style.fontSize = "15px";
    JS.innerText = "Javascript";
    JS.style.float = "left";
    JS.style.fontFamily = "serif"
    const progress = document.createElement("progress");
    progress.style.float = "right";
    progress.max = "100";
    progress.value = "50";
    Pdiv.appendChild(JS);
    Pdiv.appendChild(progress);



    const Brief = document.createElement("div");
    const I3 = document.createElement("i");
    I3.className = "fas fa-briefcase";
    I3.style.float = "left";
    I3.style.margin = "0 3% 0 5%";
    I3.style.fontSize = "50px";
    const P5 = document.createElement("span");
    P5.style.fontSize = "24px";
    P5.innerText = "Work Experience";
    P5.style.marginTop = ".5rem"
    P5.style.float = "left";
    Brief.appendChild(I3);
    Brief.appendChild(BR3);
    Brief.appendChild(P5);



    const paraDiv = document.createElement("div");
    paraDiv.style.margin = "1rem 0 .5rem";
    const paraOne = document.createElement("p");
    paraOne.style.fontSize = "15px";
    paraOne.innerText = "I have 3 years of experience as a freelance on codementor where i have worked on python assignments on a regular basis.I have 5 star rating from clients all across the globe.I have worked as a full time role for Company 1 and Company 2."
    const paraTwo = document.createElement("h2");
    paraTwo.innerText = "Company 1";
    const para3 = document.createElement("p");
    para3.style.fontSize = "15px";
    para3.style.marginBottom = "0";
    para3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna.Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi.Morbi ullamcorper augue quis ullamcorper maximus.Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros, pharetra non purus vel, fermentum condimentum lectus.Donec nec ornare libero, ac lacinia tellus.";

    paraDiv.appendChild(BR4);
    paraDiv.appendChild(paraOne);
    paraDiv.appendChild(paraTwo);
    paraDiv.appendChild(para3);


    matterO.appendChild(icons);
    matterO.appendChild(P1);
    matterO.appendChild(BR);
    matterO.appendChild(P2);
    matterO.appendChild(SkillDiv);
    matterO.appendChild(BR2);
    matterO.appendChild(P4);
    matterO.appendChild(Pdiv);
    matterO.appendChild(Brief);
    matterO.appendChild(BR5);
    matterO.appendChild(paraDiv);


    matter.appendChild(matterO);


    const matterT = document.createElement("div");
    matterT.style.flex = "1";
    matterT.style.height = "600px";
    matterT.style.margin = "0 .75rem 0 1rem";



    const ParasDiv = document.createElement("div");
    const para4 = document.createElement("h2");
    para4.innerText = "Company 2";
    para4.style.margin = "0 0 1.2rem";
    const para5 = document.createElement("p");
    para5.style.fontSize = "15px";
    para5.style.marginBottom = "0";
    para5.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna.Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi.Morbi ullamcorper augue quis ullamcorper maximus.Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros, pharetra non purus vel, fermentum condimentum lectus.Donec nec ornare libero, ac lacinia tellus.";
    const para6 = document.createElement("h2");
    para6.innerText = "Company 2";
    para6.style.margin = "1.5rem 0 1.2rem";
    const para7 = document.createElement("p");
    para7.style.fontSize = "15px";
    para7.style.marginBottom = "0";
    para7.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna.Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi.Morbi ullamcorper augue quis ullamcorper maximus.Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros, pharetra non purus vel, fermentum condimentum lectus.Donec nec ornare libero, ac lacinia tellus.";
    const para8 = document.createElement("h1");
    para8.innerText = "Education";
    para8.style.margin = "2rem 0 1rem";
    const para9 = document.createElement("h1");
    para9.innerText = "IIT - BHU";
    para9.style.margin = "0 0 1.5rem";
    const para10 = document.createElement("p");
    para10.style.fontSize = "15px";
    para10.style.marginBottom = "0";
    para10.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna.Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi.Morbi ullamcorper augue quis ullamcorper maximus.Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros, pharetra non purus vel, fermentum condimentum lectus.Donec nec ornare libero, ac lacinia tellus.";
    ParasDiv.appendChild(para4);
    ParasDiv.appendChild(para5);
    ParasDiv.appendChild(para6);
    ParasDiv.appendChild(para7);
    ParasDiv.appendChild(para8);
    ParasDiv.appendChild(para9);
    ParasDiv.appendChild(para10);

    matterT.appendChild(ParasDiv);



    matter.appendChild(matterT);

    newDiv.appendChild(newDivone);
    newDiv.appendChild(newDivTh);
    newDiv.appendChild(Address);
    newDiv.appendChild(HR);
    newDiv.appendChild(matter);


    Div.appendChild(newDiv);
    Div.appendChild(newDivtwo);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(Div, currentDiv);
}