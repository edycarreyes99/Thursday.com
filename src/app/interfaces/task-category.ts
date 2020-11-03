export interface ITaskCategory {
  id: string;
  name: string;

  // Method to generate a TaskID
  generateTID(): string;
}
