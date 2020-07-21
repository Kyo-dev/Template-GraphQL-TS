import {Auth} from '../../class/authClass'

const authClass = new Auth;

export default {
    newUser: (args:any) => {
        console.log('HOLA')
        return authClass.sign_up(args);
    }
}