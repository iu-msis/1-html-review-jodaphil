const bookTableApp = {
    data() {
      return {
      "books": {
            title: {},
            author: {},
            pubyear: {},
            pages: {},
            MSRP: {},
        },  
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
    },
    created() {
        this.fetchBooksData();
    }

}

Vue.createApp(bookTableApp).mount('#bookApp');