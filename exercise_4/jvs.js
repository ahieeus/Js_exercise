//The document.createElement(htmlTag) accepts an HTML tag name and returns a new Node with the Element type
let div = document.createElement('div');
div.id = 'content'; //add id
div.classList.add('note');//add class
//or div.className = 'note';
//add an HTML snippet to the div
div.innerHTML = '<p>CreateElement example</p>';

//create a new text node and add it to the div
let text = document.createTextNode('CreateElement example');
div.appendChild(text);

//create a new heading and add it to the div
let h2 = document.createElement('h2');
h2.textContent = 'Add h2 element to the div';
div.appendChild(h2);

//To attach the div to the document, use the appendChild() method
document.body.appendChild(div);
console.log(document.body);


//Create new list items
const menu = document.querySelector('#menu');
let li = document.createElement('li');
li.textContent = 'Product';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';
menu.appendChild(li); //add a node to the end of the list of child nodes of a specified parent node.
//can be used to move an existing child node to a new position within the document.
//Appending the same child node again will not create a duplicate; it will remain a single instance



//use the setAttribute method to set an attribute to an element, as in element.setAttribute('class', 'myClass');.


//innerHTML property of an element to get or set an HTML markup contained in the element.
//return the current HTML source of the document, including all changes that have been made since the page was loaded
console.log(menu.innerHTML);
//document.body.innerHTML = '';//replace the existing content of an element with the new content.(remove all child)

//!!! SECURITY RISK: Should not set the contents that you have no control over the innerHTML(ex: alert()...)


//Difference between the innerHTML and createElement() when it comes to creating new elements in the DOM tree
//1)createElement() is more performant, innerHTML is cleaner and shorter when you want to add attributes to the element
//2)createElement() is more secure




//Use the DocumentFragment to compose DOM nodes before updating them to the active DOM tree to get better performance.
//The DocumentFragment interface is a lightweight version of the Document that stores a piece of document structure like a standard document. However, a DocumentFragment isn’t part of the active DOM tree.
//If you change the document fragment, it doesn’t affect the document or incur any performance
let fragment = new DocumentFragment(); //or let fragment = document.createDocumentFragment();

let languages = ['JS', 'TypeScript', 'Elm', 'Dart', 'Scala'];
let langEl = document.querySelector('#language');

languages.forEach((language) => {
     let li = document.createElement('li');
     li.innerHTML = language;
     fragment.appendChild(li);
})

langEl.appendChild(fragment);



//The element.before() method allows you to insert one or more nodes before the element
const p = document.querySelector('p');
// create a new h1 element
const h1 = document.createElement('h1');
h1.innerText = 'JavaScript DOM - before()';
// insert the h1 before the paragraph
p.before(h1);



//Use the element.after() method to insert one or more nodes after the element.

//Use the insertAdjacentHTML(positionName, text) method to insert a text as Nodes into the DOM tree at a specified position.
//The positionName accepts 1 of the following 4 values:
/* beforebegin: before the element
   afterbegin: before its first child of the element
   beforeend: after the last child of the element
   afterend: after the element 
*/
//The text parameter is a string that the method parses as HTML or XML. It cannot be Node objects
let list = document.querySelector('#list');

list.insertAdjacentHTML('beforebegin', '<h2>Web Technology</h2>');
list.insertAdjacentHTML('afterbegin', '<li>HTML</li>');
list.insertAdjacentHTML('beforeend', '<li>JavaScript</li>');
list.insertAdjacentHTML('afterend', '<p>For frontend developers</p>');
//Always escape the user input text that you pass into the insertAdjacentHTML() method to avoid security risks.



//Use Node.replaceChild(newChild, oldChild) to replace a child element of a node with a new element.
li.textContent = 'Works';
menu.replaceChild(li, menu.firstElementChild);



//Use parentNode.removeChild() to remove a child node from a parent node.
//The parentNode.removeChild() throws an exception if the child node cannot be found in the parent node.
menu.removeChild(menu.lastElementChild);



//Use the node.cloneNode() method to clone the node
//Pass true into the cloneNode() method to create a deep clone of a DOM element.

//let clonedNode = originalNode.clonedNode(deep);

//Optional pamaraters deep: if deep is true then the original node and all of its descendants are cloned
                         // if deep is false only the original node will be cloned. This is default 
//The originalNode is the element to be cloned
//The cloneNode() returns a copy of the originalNode,  all attributes and inline listeners of the originalNode but doesn’t copy the event listeners and data                     
let clonedMenu = menu.cloneNode(true);
document.body.appendChild(clonedMenu);        



//Use the parentNode.append() method to append a set of Node objects or DOMString objects after the last child node of the parentNode.
let app = document.querySelector('#app');

let langs = ['TypeScript','HTML','CSS'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

app.append(...nodes);




//Use the parentNode.prepend() method to prepend a list of Node objects or DOMString objects before the first child node of the parent node.

//Use the parentNode.insertBefore(newNode, existingNode) to insert a new node before an existing node as a child node of a parent node.