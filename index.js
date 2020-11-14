function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main')
  let pages = []
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
    pages.push(book.numberOfPages)
  })
  const h2 = document.createElement('h2')
  h2.innerHTML = `Total pages: ${pages.reduce(getSum, 0)}`
  main.appendChild(h2)
  
}

function getSum(total, num) {
  return total + Math.round(num);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
