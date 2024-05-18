import { Client, Account } from "appwrite";
import config from "../config/config.js";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(config.appwrite_project_id);
const account = new Account(client);


//get current user


// async function getCurrentUser() {
//   try {
//     return account.get();
//   } catch (error) {
//     console.log("Appwrite : getCurrentUser : error", error);
//   }
//   return null;
// }
export { account }

