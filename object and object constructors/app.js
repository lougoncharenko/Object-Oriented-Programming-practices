const book=document.getElementById('name');
const author=document.getElementById('author');
const status=document.getElementById('status').value;



//book constructor
function Book(name, author, status){
this.name=name;
this.author=author;
this.status=status;
}

// UI Constructor
function UI() {}

//add book to list
UI.prototype.addBookToList=function(book){
    const list=document.getElementById('library');
      // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.status}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}

//event listener for add book
document.getElementById('library').addEventListener('submit', function(e){
    console.log(book.value)
    console.log(author.value)
    console.log(status)
    e.preventDefault();
    })