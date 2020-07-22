export class Test {
    constructor(){}
    public pingWithoutAuth(){
        return {pong: "pong without Auth"}
    }
    public pingWithAuth(args:any){
        return {pong: "pong with Auth"}
    }
}