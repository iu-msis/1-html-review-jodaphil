//Methods taken from Vue.js documentation site https://vuejs.org/ and Tom Gregory class instruction


const Offer = {
    data() {
      return {
        "person": {},
        "books":[]
        }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
        fetchUserData() {
            console.log("A");
            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                console.log("C");
                this.person = responseJson.results[0];
    
            })
            .catch( (err) => {
                console.error(err);
            })
            console.log("B");
        },
        fetchBookData() {
            fetch('api/books/')
            .then( response => response.json())
            .then( (responseJson) => {
                console.log(responseJson);
                this.books=responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchUserData();
        this.fetchBookData();
    } //end created
} // end Offer config
  
Vue.createApp(Offer).mount('#offerApp');
console.log("Z");