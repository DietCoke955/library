function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
        return [title, author, pages, status]
    }

}


function addBookToLibrary() {

}


const newBook = new Book('Hobbit', 'Tolkein', 300, 'Read')