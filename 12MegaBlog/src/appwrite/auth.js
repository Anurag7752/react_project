import conf from '../conf/conf';

import {client, Account, ID, Client } from "appwrite";
export class AuthService {


    client = new Client();
    Account;

        constructor() {
            this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProject);
        this.account = new Account(this.client);
             
        }

        async createAccount({email, password, name}){
            try{
              const userAccount = await this.account.create(ID.unique() email, password, name);
              if(userAccount){
                //call another method
                return this.login({email, password});

              }else {
                return userAccount;

              }
            }
            catch(error){
                throw error;    
            }
        }

        async login({email, password}){
            try{
              return await this.account.createEmailSession
                (email, password);

            }catch (error) {
                throw error;
            }
        }

        async getCurrentUser(){
            try {
                return await this.account.get();
            } catch (error) {
                console.log("Appwrite serive :: getCurrent :: error", error);
            }

            return null
        }

        async logout(){
            try{
                await this.account.deleteSessions();
            }catch (error) {
                console.log("Appwrote serive :: logout :: error", error);
            }
        }
    }
    

const authService = new AuthService();

export default authService




