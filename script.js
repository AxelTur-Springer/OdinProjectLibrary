// html elements
let popUpform = document.querySelector(".fullFormPopUp")
let btnAddBook = document.querySelector(".addBookBtn")
let btnEraseAll = document.querySelector(".eraseAll") 
let btnSumbitNewBook = document.querySelector(".SubmitBooks")





// popUpform Button Functionalitys

btnAddBook.addEventListener("click",
    function(){
        popUpform.style.display= "flex";
        if(popUpform.style.display= "flex"){
        }
        
}
)


btnEraseAll.addEventListener("click",
    function(){
        window.localStorage.clear();
        document.location.reload()
        
}
)
//
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
    setLocal()
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
    const removeBtnDiv = document.createElement("div");
    const removeBtn = document.createElement("button");   

    //class adding
    newBookDiv.classList.add("newBookDiv")
    titleDiv.classList.add("titleOfBook")
    authDiv.classList.add("authorBook")
    pageDiv.classList.add("numberOfPagesRead")
    finishedReading.classList.add("finishedReading")
    removeBtnDiv.classList.add("btnToggleReadParent")
    removeBtn.classList.add("btnToggleReadYesOrNo")
    
    //appending
    newBookDiv.appendChild(titleDiv)
    newBookDiv.appendChild(authDiv)
    newBookDiv.appendChild(pageDiv)
    newBookDiv.appendChild(finishedReading)
    newBookDiv.appendChild(removeBtnDiv)
    removeBtnDiv.appendChild(removeBtn)

    //changing values

   titleDiv.innerHTML = `<p>Title ${nombreLibro} </p>`
   authDiv.innerHTML = `<p>Author: ${autor} </p>`
   pageDiv.innerHTML = `<p>I readed up to page ${paginasLeidas} out of  </p>`
   finishedReading.innerHTML = `<p>Did i finish Reading ?  ${termineDeLeer} </p>`
   removeBtn.innerText="Read"
  
   if(termineDeLeer===false) {
    removeBtn.innerText = 'Not Read';
    removeBtn.style.backgroundColor = '#e04f63';
    }else {
        removeBtn.style.backgroundColor = '#63da63'
    }

  
  
   // returning finished div
 

library.appendChild(newBookDiv)
}








function renderBooks(){
    const myNode = document.getElementById("gridBooksShown");
    myNode.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++){
        createNewBookDiv(myLibrary[i].bookTitle, myLibrary[i].bookAuthor,
         myLibrary[i].bookPagesRead, myLibrary[i].readYesOrNei);
        
     }
     
     }





function setLocal(){
    window.localStorage.setItem('library', JSON.stringify(myLibrary));
}


function refreshed(){
        if(myLibrary = JSON.parse(window.localStorage.getItem('library')).length === 0 ){

        }
        else{
            console.log("else of refreshed")
            myLibrary = JSON.parse(window.localStorage.getItem('library'));
      
           
             renderBooks()
        }
}


window.onload = function() {
    
    refreshed() 
}




/*document.getElementById("gridBooksShown").addEventListener("click",function(e) {
    // e.target was the clicked element
  if (e.target && e.target.matches("button.btnToggleReadYesOrNo")) {
    if(e.target.innerText==="Read"){
        
        //myLibraryWhenRefresh[0].readYesOrNei=false;
       renderBooks()
       refreshed()
    }else if(e.target.innerText==="Not Read"){
       

    }
    }
});
*/



/*document.getElementById("gridBooksShown").addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("button.btnToggleReadYesOrNo")) {
    if(e.target.innerText==="Read"){
        e.target.innerText="Not Read"
        e.target.style.backgroundColor="red"
        
    }else if(e.target.innerText==="Not Read"){
        e.target.innerText="Read"
        e.target.style.backgroundColor="black"

    }
	}
});
*/
// function to recreate divs
/*for(let i = 0; i < myLibraryWhenRefresh.length; i++){
    createNewBookDiv(myLibraryWhenRefresh[i].bookTitle, myLibraryWhenRefresh[i].bookAuthor,
    myLibraryWhenRefresh[i].bookPagesRead, readYesOrNei);
   
} */  

//window.localStorage.clear();



