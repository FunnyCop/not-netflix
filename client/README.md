# CHECK COOKIES WITH THIS FUNCTION

```js
const [ user, setUser ] = useState( null )

useEffect( () => {
    axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
        .then( res => !res.data.message && navigate( "/" ) )
        .catch( () => navigate( "/" ) )

    axios.get( "http://localhost:8000/api/user", { withCredentials: true } )
        .then( res => setUser( res.data._id ) )
        .catch( err => console.log( err ) )
}, [] )
```

- [x] Start home page
- [x] Start login/registration form
- [x] Start display after login
- [ ] Start search display
- [ ] Start trailer display