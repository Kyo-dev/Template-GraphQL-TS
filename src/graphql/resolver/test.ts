import {Test} from '../../class/testClass'

const testClass = new Test;
export default {
    pingWithoutAuth: () => {
        
        return testClass.pingWithoutAuth()
    },
    pingWithAuth: async(args:any, req:any) => {
        if(!req.isAuth) throw new Error("NO AUTH")
        return testClass.pingWithAuth(args)
    }
}