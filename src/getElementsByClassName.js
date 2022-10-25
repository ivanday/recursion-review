// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  console.log('body', document.body);
  console.log('childNodes', document.body.childNodes);
  console.log('classlist', document.body.classList);

  var element = document.body;
  var children = element.childNodes;
  var classList = element.classList;

  //initialize an empty array
  //pull the first children of body

  //define a function that will be run recursively to check children
    //if there's no children, check the class list, push the node to our array

    //check if there are children, if there are, iterate over them and run recursively

  //iterate through initial children and run check children

  //return our array


  if (classList.includes(className)) {
    return element;
  }

  children.forEach(function (child, index) {
    if (child.childNodes !== undefined){
      getElementsByClassName(className)
    }
  });



};

getElementsByClassName('targetClassName');
