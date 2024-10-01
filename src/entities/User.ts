import { Recipe } from './Recipe';

export class User {
  id!: number;
  email!: string;
  password!: string;
  recipes!: Recipe[];
}