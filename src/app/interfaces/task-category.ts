export interface ITaskCategory {
  TID: string;
  name: string;

  // Method to generate a TaskID
  generateTID(): string;
}
