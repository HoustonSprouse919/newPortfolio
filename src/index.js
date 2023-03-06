import _ from 'lodash';
 import './style.css';
import Icon2 from './images/icon.png';
import signInPic from './images/signInPage.png';
import oldPortfolio from './images/oldPortfolio.png';
import gymWebsite from './images/gymWebsite.png';
import weatherApp from './images/weatherApp.png';
import todoList from './images/todoList.png';

 window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


if(document.title == "Portfolio"){
    function component() {
        const element = document.querySelector('.myPic');
       const myIcon = new Image();
       myIcon.src = Icon2;
     
       element.appendChild(myIcon);
     
        return element;
      }
      component();
    console.log("portfolio")
} else if(document.title == "My Work"){

    function addImage(divName,imageUsed){
        const element = document.querySelector(`.${divName}`);
        const projectPic = new Image();
        projectPic.src = imageUsed;
      
        element.appendChild(projectPic);
      
         return element;
    }

    addImage("sec1",gymWebsite);
    addImage("sec2",oldPortfolio);
    addImage("sec3",signInPic);
    addImage("sec4",weatherApp);
    addImage("sec5",oldPortfolio);
    addImage("sec6",todoList);
    addImage("sec7",oldPortfolio);
    addImage("sec8",oldPortfolio);
}