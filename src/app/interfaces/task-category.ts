export interface ITaskCategory {
  TCID: string;
  name: string;

  // Method to generate a TaskID
  generateTID(): string;
}
