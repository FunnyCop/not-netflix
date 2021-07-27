# CHECK COOKIES WITH THIS FUNCTION

```js
useEffect( () => {
    axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
        .then( res => !res.data.message && navigate( "/" ) )
        .catch( () => navigate( "/" ) )
    }, [] )
```

- [x] Start home page
- [x] Start login/registration form
- [ ] Start display after login
- [ ] Start search display
- [ ] Start trailer display