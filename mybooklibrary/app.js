const book=document.getElementById('name');
const author=document.getElementById('author');
const status=document.getElementById('status').value;


document.querySelector('form').addEventListener('submit', function(e){
console.log(book.value)
console.log(author.value)
console.log(status)
e.preventDefault();
})
