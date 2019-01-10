document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)

});

const handleFormSubmit = function (event){
  event.preventDefault();
  console.log(event.target.title.value);
  console.log(event.target.author.value);
  console.log(event.target.category.value);


const listItem = document.createElement('div')


  const createListTitle = document.createElement('p')
  createListTitle.textContent = `Title: ${event.target.title.value}`
  listItem.appendChild(createListTitle)

  const createListAuthor = document.createElement('p')
  createListAuthor.textContent = `Author: ${event.target.author.value}`
  listItem.appendChild(createListAuthor)

  const createListCategory = document.createElement('p')
  createListCategory.textContent = `Category: ${event.target.category.value}`
  listItem.appendChild(createListCategory)


const list = document.querySelector('#reading-list')
list.appendChild(listItem)

event.target.reset()

}
