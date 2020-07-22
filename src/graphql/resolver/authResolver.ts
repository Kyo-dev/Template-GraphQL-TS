import {Auth} from '../../class/authClass'

const authClass = new Auth;

export default {
    sign_up: (args:any) => {
        return authClass.sign_up(args);
    },
    sign_in:(args:any) =>{
        console.log('sign in')
        return authClass.sign_in(args)
    }
}