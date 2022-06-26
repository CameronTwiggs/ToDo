/* Made with love by @fitri This is a component of my ReactJS project https://codepen.io/fitri/full/oWovYj/ */


// Note from Cameron
// Hey if you are reading this, This site has a drag and drop feature. That
// I havent witten myself. I found this code on https://codepen.io/fitri/pen/VbrZQm
// of a burilient guy who made a drag and drop feature. 
// I figured it would be okay given the scope of the project.



function enableDragSort(listClass) {
    const sortableLists = document.getElementsByClassName(listClass);
    Array.prototype.map.call(sortableLists, (list) => {enableDragList(list)});
  }
  
  function enableDragList(list) {
    Array.prototype.map.call(list.children, (item) => {enableDragItem(item)});
  }
  
  function enableDragItem(item) {
    item.setAttribute('draggable', true)
    item.ondrag = handleDrag;
    item.ondragend = handleDrop;
  }
  
  function handleDrag(item) {
    const selectedItem = item.target,
          list = selectedItem.parentNode,
          x = event.clientX,
          y = event.clientY;
    
    selectedItem.classList.add('drag-sort-active');
    let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
    
    if (list === swapItem.parentNode) {
      swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(selectedItem, swapItem);
    }
  }
  
  function handleDrop(item) {
    item.target.classList.remove('drag-sort-active');
    numberListItems(); // updates the number of list items
     // and addition I made to this code
  }
  
  (()=> {enableDragSort('drag-sort-enable')})();