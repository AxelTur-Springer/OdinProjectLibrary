// html elements
let popUpform = document.querySelector(".formPopUp")
let btnAddBook = document.querySelector(".addBookBtn")
let btnSumbitNewBook = document.querySelector(".SubmitBooks")





// popUpform Button Functionalitys

btnAddBook.addEventListener("click",
    function(){
        popUpform.style.display= "flex";
        
}
)


// retrieve input values on submit
let bookTitle;
let bookAuthor;
let bookPagesRead;
let readYesOrNei;
let myLibrary = [];

btnSumbitNewBook.addEventListener("click",
    function saveValueAndPassInBook(){
        //window.localStorage.setItem('user', JSON.stringify(myLibrary));

        bookTitle = btnSumbitNewBook.parentNode.parentNode[0].value
        bookAuthor = btnSumbitNewBook.parentNode.parentNode[1].value
        bookPagesRead = btnSumbitNewBook.parentNode.parentNode[2].value
        readYesOrNei = btnSumbitNewBook.parentNode.parentNode[3].checked
        
        popUpform.style.display= "none";
       

       // console.log(myLibrary)
        
        addBookToLibrary(bookTitle,bookAuthor,bookPagesRead,readYesOrNei)
        renderBooks()

    }
)

//recieve and create a new book
function Book(bookTitle,bookAuthor,bookPagesRead,readYesOrNei) {
  this.bookTitle = bookTitle,
  this.bookAuthor = bookAuthor,
  this.bookPagesRead = bookPagesRead,
  this.readYesOrNei = readYesOrNei; 
}

// add newely created book to my library array
function addBookToLibrary(bookTitle,bookAuthor,bookPagesRead,readYesOrNei) {
    newBook = new Book(bookTitle,bookAuthor,bookPagesRead,readYesOrNei); 
    myLibrary.push(newBook);
}

//creating book div elements
function createNewBookDiv(nombreLibro,autor,paginasLeidas,termineDeLeer){
    const library = document.querySelector('.gridBooksShown');
    
    //creating
    const newBookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const finishedReading = document.createElement('div');
    const removeBtn = document.createElement("div");
   
    //class adding
    newBookDiv.classList.add("newBookDiv")
    titleDiv.classList.add("titleOfBook")
    authDiv.classList.add("authorBook")
    pageDiv.classList.add("numberOfPagesRead")
    finishedReading.classList.add("finishedReading")
    removeBtn.classList.add("btnToggleReadYesOrNo")

    
    //appending
    newBookDiv.appendChild(titleDiv)
    newBookDiv.appendChild(authDiv)
    newBookDiv.appendChild(pageDiv)
    newBookDiv.appendChild(finishedReading)
    newBookDiv.appendChild(removeBtn)

    //changing values

   titleDiv.innerHTML = `<p>Title ${nombreLibro} </p>`
   authDiv.innerHTML = `<p>Author: ${autor} </p>`
   pageDiv.innerHTML = `<p>I readed up to page ${paginasLeidas} out of  </p>`
   finishedReading.innerHTML = `<p>Did i finish Reading ?  ${termineDeLeer} </p>`

    // returning finished div
 return library.appendChild(newBookDiv)

}





let  myLibraryWhenRefresh = [];
function renderBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        createNewBookDiv(myLibrary[i].bookTitle, myLibrary[i].bookAuthor,myLibrary[i].bookPagesRead, readYesOrNei);
        myLibraryWhenRefresh.push(myLibrary[i])
        myLibrary.shift();
    }   
setLocal()

}

function setLocal(){
    window.localStorage.setItem('library', JSON.stringify(myLibraryWhenRefresh));
}

let data=window.performance.getEntriesByType("navigation")[0].type;

function refreshed(){
        if(myLibraryWhenRefresh = JSON.parse(window.localStorage.getItem('library')).length === 0 ){

        }
        else{
            console.log("else of refreshed")
            myLibraryWhenRefresh = JSON.parse(window.localStorage.getItem('library'));

            if(data === "reload"){
                for(let i = 0; i < myLibraryWhenRefresh.length; i++){
                    createNewBookDiv(myLibraryWhenRefresh[i].bookTitle, myLibraryWhenRefresh[i].bookAuthor,
                    myLibraryWhenRefresh[i].bookPagesRead, myLibraryWhenRefresh[i].readYesOrNei);
                   
                }
            }
        }
}

if(data === "reload"){
    refreshed()
}




// function to recreate divs
/*for(let i = 0; i < myLibraryWhenRefresh.length; i++){
    createNewBookDiv(myLibraryWhenRefresh[i].bookTitle, myLibraryWhenRefresh[i].bookAuthor,
    myLibraryWhenRefresh[i].bookPagesRead, readYesOrNei);
   
} */  

//window.localStorage.clear();



