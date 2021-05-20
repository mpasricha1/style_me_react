import {createContext} from 'react';

const UserContext = createContext({

    email: "",
    setEmail: () => {},
    loggedIn: false,
    setLoggedIn: () => {}
    // id:"",
    // setId:() => {},
    // name:"",
    // setName:() => {},
    // loggedIn: false,
    // setLoggedIn: () => {}
});

export default UserContext;