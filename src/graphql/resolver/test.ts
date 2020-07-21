import {Test} from '../../class/testClass'

const testClass = new Test;
export default {
    pingWithoutAuth: () => {
        
        return testClass.pingWithoutAuth()
    }
}