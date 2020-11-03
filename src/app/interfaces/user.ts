export interface IUser {
  email: string;
  isAdmin: boolean;
  name: string;
  password: string;
  id: string;

  // Method to generate a UID
  generateUID(): string;
}
