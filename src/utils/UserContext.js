import {createContext} from 'react'; 

const UserContext = createContext({
	id: ""
	setId: () => {},
	name: "", 
	setName: () => {},
	loggedIn: false,
	setLoggedIn: () => {}
}); 

export default UserContext; 