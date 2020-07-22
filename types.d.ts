declare namespace Express{
    export interface Request {
        userId: string;
        isAuth: boolean;
    }   
}