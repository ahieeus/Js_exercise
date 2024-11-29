//To set the inline style of an element, use the style property
//If the CSS property contains (-) use ([]) : element.style.['background-color']
// or use: element.style.backgroundColor
// or use setAttribute('style', 'background-color:red');
//If don't want to overwrite the existing CSS properties completely, use (+=): element.style.cssText += 'color:red;background-color:yellow';
let p = document.querySelector('#content'); 
p.style.color = 'red';
p.style.fontWeight = 'bold';
let style = window.getComputedStyle(p);//get all styles applied to an element
console.log('color:', style.color);
console.log('font-weight:', style.fontWeight);




//The className property returns a spaceseparated list of classes of an element as a string.
let menu = document.querySelector('#menu');
console.log(menu.className);
//To add new class using className property, use(+=)
menu.className += ' new';
console.log(menu.className);
// or use classList.add(): menu.classList.add('new')

menu.className = 'class1';//overwrite all the classes of an element
console.log(menu.className);




//The element’s classList property returns the live DOMTokenList of the class attributes of an element
//add(), remove(), replace(), contain()
//toggle(): if the class list doesn't contain the class name, the methed adds it to class list; else remove it






//Use offsetWidth & offsetHeight properties of the DOM element to get its width and height
let box = document.querySelector(".box");
let width = box.offsetWidth;
let height = box.offsetHeight;
console.log({width, height});
const domRect = box.getBoundingClientRect();
console.log(domRect);

//To get the element's width and height that include padding but without the border, use clientWidth, clientHeight
width = box.clientWidth;
height = box.clientHeight;
console.log({width, height});

//To get the margin/border of an element, use the getComputedStyle()
style = getComputedStyle(box);
let marginLeft = parseInt(style.marginLeft);
console.log(marginLeft);

let borderTopWidth = parseInt(style.borderTopWidth);
console.log(borderTopWidth);

//To get the height and width of the window
width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
console.log({width, height});