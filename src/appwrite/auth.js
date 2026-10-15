import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

/**
 * @typedef {Object} UserSession
 * @property {string} $id
 * @property {string} userId
 * @property {string} expire
 */

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  /**
   * @param {Object} params
   * @param {string} params.email
   * @param {string} params.password
   * @param {string} params.name
   * @returns {Promise<UserSession>}
   */
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        return await this.login({ email, password });
      }

      return userAccount;
    } catch (error) {
      console.error("AuthService :: createAccount :: error", error);
      throw error;
    }
  }

  /**
   * @param {Object} params
   * @param {string} params.email
   * @param {string} params.password
   * @returns {Promise<UserSession>}
   */
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("AuthService :: login :: error", error);
      throw error;
    }
  }

  /**
   * @returns {Promise<Object | null>}
   */
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      return null;
    }
  }

  /**
   * @returns {Promise<void>}
   */
  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.error("AuthService :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
