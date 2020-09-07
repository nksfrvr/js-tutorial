// PART 1




//Selectors

//get elem by Id //

//let addNew = document.getElementById('addBtn');
//addNew.style.color = 'red';

//Get elems by class name

//let items = document.getElementsByClassName('list-group-item');
//console.log(items);
//for (var i = 0; i < items.length; i++) {
  //items[i].style.backgroundColor = '#f4f4f4';
//}

//Get elems by tagname

//let items = document.getElementsByTagName('li')

//for (var i = 0; i < items.length; i++) {
  //items[i].style.backgroundColor = 'aqua';
//}


//QuerySelector//
//let header = document.querySelector('.header'); //class name
//header.style.borderBottom = 'solid 4px grey';
//console.log(header);

//let input = document.querySelector('input');
//input.value = 'hello world';
//
//let submit =document.querySelector('button[type="button"]');
//submit.innerText = 'add';
//
////QuerySelectorAll
//let items = document.querySelectorAll('.list-group-item');
//console.log(items);

//Odd an Even child selector

//let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
//
//for (var i = 0; i < odd.length; i++) {
//  odd[i].style.backgroundColor = 'red';
//}

//let even = document.querySelectorAll('.list-group-item:nth-child(even)');
//for (var i = 0; i < even.length; i++) {
//  even[i].style.backgroundColor ='coral';
//}



//PART 2



//Traversing the document



//let itemList = document.querySelector('.list-group');

//parentNode
//console.log(itemList.parentNode);

// childNodes
//console.log(itemList.childNodes);


//children = html.colection of all children
//console.log(itemList.children);

//looping through all children
//for (var i = 0; i < itemList.children.length; i++) {
//  itemList.children[i].innerText = 'item changed';
//}

//first child
//console.log(itemList.firstChild);

//last child
//console.log(itemList.lastChild);


//first element child
//console.log(itemList.firstElementChild);

//last element child
//console.log(itemList.lastElementChild);

//Siblings


//let itemList = document.querySelector('.list-group');

//next sibling
//console.log(itemList.nextSibling);


//next element Sibling
//console.log(itemList.nextElementSibling);

//previous Sibling
//console.log(itemList.previousSibling);

//previous element Sibling
//console.log(itemList.previousElementSibling);


//Creating new element
//let newDiv = document.createElement('div');


//newDiv.className = 'new-div';

//add id
//newDiv.id = 'new-id';

//set any attribute
//newDiv.setAttribute('title','new-title');

//create text childNodes
//let newDivText = document.createTextNode('hello world ');

//add text to new element
//newDiv.appendChild(newDivText);

//inserting new element  in the dom
//let container = document.querySelector('.insert');
//let h2 = container.firstElementChild;

//container.insertBefore(newDiv,h2);

//console.log(h2);



//console.log(newDiv);
