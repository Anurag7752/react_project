import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query} from 'appwrite';

export class serive{
    Client = new Client();
    Databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProject);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwroteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

                async updatePost(slug, {title, content, featuredImage,
                    status}){
                        try{
                            return await this.databases.updateDocument(
                                conf.appwriteDatabaseId,
                                conf.appwroteCollectionId,
                                slug,
                                {
                                    title,
                                    content,
                                    featuredImage,
                                    status,
                                }
                            )
                        } catch (error){
                            console.log("Appwrite serive :: updatePost :: error", error);

                        }
                    }

                    async deletePost(slug){
                        try{
                            await this.databases.deleteDocument(
                                conf.appwriteDatabaseId,
                                conf.appwroteCollectionId,
                                slug
                            )
                            return true
                        }catch (error){
                            console.log("Appwrite serive :: deletePost :: error", error);
                            return false
                        }
                    }
            )

        }catch (error){
            console.log("Appwrite service :: createPost :: error", error);

        }
    }

    async getPost(slug){
        try{
            return await this.databases.geteDocument(
                conf.appwriteDatabaseId,
                conf.appwroteCollectionId,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error)
            return false;
        }
    }

    async getPosts(Queries = [Query.equal("starus", "active")]){
        try{
            return await this.databases.listDocument(
                conf.appwriteDatabaseId,
                conf.appwroteCollectionId,
                
                    Queries
                
            )
        } catch (error){
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteDatabaseId,
                ID.unique(),
                file
            )
        }catch (error){
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteDatabaseId,
                fileId
            )
        }
    }
}

const serive = new service()
export default service