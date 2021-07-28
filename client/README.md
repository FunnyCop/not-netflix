# CHECK COOKIES WITH THIS FUNCTION

```js
const [ user, setUser ] = useState( null )

useEffect( () => {
    axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
        .then( res => res.data._id ? setUser( res.data._id ) : navigate( "/" ) )
        .catch( () => navigate( "/" ) )
}, [] )
```

- [x] Start home page
- [x] Start login/registration form
- [x] Start display after login
- [ ] Start search display
- [ ] Start trailer display