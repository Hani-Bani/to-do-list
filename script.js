window.addEventListener('DOMContentLoaded', () => {
    
//declare variables
const addButton = document.getElementById('add-btn')
const ul = document.querySelector('ul')
  
//function to append li to the ul
const addToList = function(event) {
    event.preventDefault()  // default of a button is submit
    const li = document.createElement('li')
    let inputValue = document.getElementById('input-box').value     // grab element
    const textInput = document.createTextNode(inputValue)           //place element in a text node
    li.appendChild(textInput)
     
        if (inputValue == '') {
            alert('Do you have something in mind to do?')
        }else {
            ul.appendChild(li) 
        } 
    document.getElementById('input-box').value = ''                 //reset the input-box

//create a button to delete an li and append it to li

const span = document.createElement('span')
const deleteButton = document.createTextNode('Delete')
span.className='del-btn'
span.appendChild(deleteButton)
li.appendChild(span)


//for each button created, delete button is cr

const delBtn = document.getElementsByClassName('del-btn')
for (i = 0; i < delBtn.length; i++) {
    delBtn[i].onclick = function() {
      const div = this.parentElement
      div.style.display = "none"
    }
}
}
addButton.addEventListener('click', addToList)

});








