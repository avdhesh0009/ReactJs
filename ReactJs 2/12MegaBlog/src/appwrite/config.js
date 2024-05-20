import conf from '../conf/conf.js'
import {Client,ID,Databases,Storage,Query} from "appwrite"

export class Service{
    client=new Client();
    databases;
    bucket;
    // In appwrite buckets are storage
    constructor(){
       v
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,
    status,useId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // documentId deni hoti hai hum slug de rhe hain ID.unique bhi de skte hain
                slug,
                {
                    // yeh appwrite mein jo attribut banaye hain vhi hain
                    title,
                    content,
                    featuredImage,
                    status,
                    useId,
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }
    async updatePost(slug,{title,content,featuredImage,
    status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: updatePost :: error",error);
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: updatePost :: error",error);
            return false;
        }
    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error",error);
            return false;
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // [
                //     Query.equal("status","active")
                // ]
                // hum ese bhi likh skte the per uper variable define kr dia
                // hai toh ab jrurt nhi hai
                queries,
            )
        }
        catch(error){
            console.log("Appwrite service :: getPosts :: error",error);
            return false;
        }
    }
    // file upload service
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }
    async deleteFile(fielId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fielId
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: deleteFile :: error",error);
            return false;
        }
    }
    getFilePreview(fielId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fielId
        )
    }
}

const service=new Service();
// object bana ke return kr dia ki sidha uske
// function use kr ske
export default service