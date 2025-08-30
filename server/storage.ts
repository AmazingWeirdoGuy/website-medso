import { type User, type InsertUser, type Program, type InsertProgram, type News, type InsertNews } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getPrograms(): Promise<Program[]>;
  getProgram(id: string): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;
  
  getNews(): Promise<News[]>;
  getNewsItem(id: string): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private programs: Map<string, Program>;
  private news: Map<string, News>;

  constructor() {
    this.users = new Map();
    this.programs = new Map();
    this.news = new Map();
    
    // Initialize with default data
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    // Default programs
    const defaultPrograms: Program[] = [
      {
        id: "clinical-skills",
        title: "Clinical Skills Workshop",
        subtitle: "First on the scene",
        description: "Hands-on training in basic medical procedures and patient care techniques.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        createdAt: new Date()
      },
      {
        id: "disease-awareness",
        title: "Disease Awareness Campaigns",
        subtitle: "Fundraising events",
        description: "Initiatives to raise funds for hospitals.",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        createdAt: new Date()
      },
      {
        id: "hospital-volunteering",
        title: "Hospital Volunteering",
        subtitle: "Donation & charity",
        description: "Donations to charitable organizations or hospitals.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        createdAt: new Date()
      },
      {
        id: "medical-research",
        title: "Medical Research Projects",
        subtitle: "Social media page",
        description: "Student-made short videos exploring current medical topics, with the aim to improve public health.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        createdAt: new Date()
      }
    ];

    defaultPrograms.forEach(program => this.programs.set(program.id, program));

    // Default news
    const defaultNews: News[] = [
      {
        id: "health-fair-2024",
        category: "Health Fair 2024",
        title: "Annual Health Fair Success",
        description: "Our 2024 Health Fair attracted over 500 participants, providing free health screenings and medical consultations to the community.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        createdAt: new Date()
      },
      {
        id: "global-health-initiative",
        category: "Global Health Initiative",
        title: "New Partnership Announced",
        description: "MedSo partners with international healthcare organizations to expand our global health advocacy programs.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        createdAt: new Date()
      }
    ];

    defaultNews.forEach(news => this.news.set(news.id, news));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values());
  }

  async getProgram(id: string): Promise<Program | undefined> {
    return this.programs.get(id);
  }

  async createProgram(insertProgram: InsertProgram): Promise<Program> {
    const id = randomUUID();
    const program: Program = { 
      ...insertProgram, 
      id, 
      createdAt: new Date() 
    };
    this.programs.set(id, program);
    return program;
  }

  async getNews(): Promise<News[]> {
    return Array.from(this.news.values());
  }

  async getNewsItem(id: string): Promise<News | undefined> {
    return this.news.get(id);
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const id = randomUUID();
    const news: News = { 
      ...insertNews, 
      id, 
      createdAt: new Date() 
    };
    this.news.set(id, news);
    return news;
  }
}

export const storage = new MemStorage();
