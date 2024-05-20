import conf from '../conf/conf.js'
import {Client,Account,ID} from "appwrite"

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
           const userAccount=await this.account.create(ID.unique(),email,password,name);
           if(userAccount){
              return this.login({email,password});
           }
        }
        catch(error){
            console.log("Appwrite Service :: createAccount :: error",error);
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch(error){
            console.log("Appwrite Service :: Login :: error",error);
        }
    }
    async logout(){
        try{
            await this.account.deleteSession();
        }
        catch(error){
            console.log("Appwrite Service :: Logout :: error",error);
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite Service :: GetCurrentUser :: error",error);
        }
        return null;
    }
}

const authService=new AuthService();

export default authService;