//To get the parent node, use parentNode property, return the read-only, if element does not have a parent node return null
//The document and DocumentFragment do not have a parent node
let note = document.querySelector('.note');
console.log(note.parentNode);



let current = document.querySelector('.current');

//To get the next sibling, return null if the current element is the last one in the list
let nextSibling = current.nextElementSibling;
console.log(nextSibling);

//To get the prev sibling, return null if the current element is the first one in the list
let prevSibling = current.previousElementSibling;
console.log(prevSibling);

//Get all siblings of an element
let getSiblings = function (e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) { //1 stand for : Node.ELEMENT_NODE
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

let siblings = getSiblings(document.querySelector('.current'));
siblingText = siblings.map(e => e.innerText); // e.innerHTML, e.textContent
console.log(siblingText);




//get the first child element
//The firstChild and lastChild return the first and last child of a node, which can be any node type including text node, comment node, and element node.
let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);

//The firstElementChild and lastElementChild return the first and last child Element node.
let firstElementChild = content.firstElementChild.nodeName;
console.log(firstElementChild);

//get the last child element
let menu = document.getElementById('menu');
console.log(menu.lastElementChild);

//get all child elements
//childNodes property returns all child elements with any node type, return a live NodeList
//To get the child element with only the element node type, use the children property
let children = menu.children;
console.log(children);