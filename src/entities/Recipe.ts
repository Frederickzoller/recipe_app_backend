import { User } from './User';

export class Recipe {
  id!: number;
  title!: string;
  description!: string;
  ingredients!: string[];
  steps!: string[];
  author!: User | null;
}