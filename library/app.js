let myLibrary = []



function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
        return [title, author, pages, status]
    }

}


myLibrary.push(['fatty'])

function addBookToLibrary() {
    myLibrary.push(Book())

}


