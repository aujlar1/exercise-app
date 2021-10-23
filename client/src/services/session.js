import { Login } from "./users";
const session = {
    user: null,
    messages: [],
    toRoute: null,
    Login(handle, password){
        const response = Login(handle, password);
        this.user = response.user;
        
    }
};
export default session;