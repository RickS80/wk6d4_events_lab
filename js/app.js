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

const createListTitle = document.createElement('p')
createListTitle.textContent = `Book Title: ${event.target.title.value}`

const list = document.querySelector('#reading-list')
list.appendChild(createListTitle)

}
//   resultForm = document.querySelector('save')
//   resultForm.textContent = 'testing'
// }
//
// const createListItem = function(event) {
//   const newReadingListTitle = document.createElement('li')
//   newReadingListTitle.textContent = `title`
//   const newReadingAuthor = document.createElement('li')
//   newReadingListTitle.textContent = `author`
// }


// const list = document.querySelector('#reading-list')
// list.appendChild(createListItem)
