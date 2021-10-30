const bookTableApp = {
    data() {
      return {
        books: [],
        bookForm: {}
      }
    },
    computed: {

    },
    methods: {
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postBook(evt) {
          if(this.selectedBook == null) {
            this.postNewBook(evt);
          } else {
            this.postEditBook(evt);
          }
        },

        selectBook(b) {
          this.selectedBook = b;
          this.bookForm = Object.assign({}, this.selectedBook);
        },

      postNewBook(evt) {
          //     this.offerForm.studentId = this.selectedStudent.id;

              // console.log("Posting!", this.bookForm);
              console.log("Posting!");

              fetch('api/books/create.php', {
                  method:'POST',
                  body: JSON.stringify(this.bookForm),
                  headers: {
                    "Content-Type": "application/json; charset=utf-8"
                  }
                })
                .then( response => response.json() )
                .then( json => {
                  console.log("Returned from post:", json);
                  // TODO: test a result was returned!
                  this.books = json;

                  // reset the form
                  this.bookForm = {};
                });

      },
      postEditBook(evt) {
                this.bookForm.id = this.selectedBook.id;


                console.log("Updating!", this.bookForm);

                fetch('api/books/update.php', {
                    method:'POST',
                    body: JSON.stringify(this.bookForm),
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    }
                  })
                  .then( response => response.json() )
                  .then( json => {
                    console.log("Returned from post:", json);
                    // TODO: test a result was returned!
                    this.books = json;

                    this.bookForm = {};
                  });
              },
              postDeleteBook(b) {
                if (!confirm("Are you sure you want to delete the book from "+b.title+"?")) {
                  return;
                }
                console.log("Delete!", b);
        
                fetch('api/books/delete.php', {
                    method:'POST',
                    body: JSON.stringify(b),
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    }
                  })
                  .then( response => response.json() )
                  .then( json => {
                    console.log("Returned from post:", json);
                    // TODO: test a result was returned!
                    this.offers = json;
        
                    // reset the form
                    this.resetBookForm();
                  });
          },
          resetBookForm() {
            this.selectedBook = null;
            this.bookForm = {};
          }
        
    },
       
    created() {
        this.fetchBooksData();
    }

}

Vue.createApp(bookTableApp).mount('#bookApp');