export interface IGlobalService {

  // Method to generate an ID
  generateID(lengthID: number, prefix: string): string;
}
