import {
  type InsertContact,
  type Contact,
  type InsertBlogPost,
  type BlogPost,
  contactSubmissions,
  blogPosts,
} from "@shared/schema";
import { db } from "./db";
import { desc, eq } from "drizzle-orm";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db.insert(contactSubmissions).values(contact).returning();
    return result;
  }

  async getContacts(): Promise<Contact[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [result] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return result;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [result] = await db.insert(blogPosts).values(post).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
