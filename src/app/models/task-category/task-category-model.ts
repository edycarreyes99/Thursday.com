import {ITaskCategory} from '../../interfaces/task-category';
import {GlobalService} from '../../services/global/global.service';

export class TaskCategoryModel implements ITaskCategory {
  TCID: string;
  name: string;

  constructor(name: string) {
    this.TCID = this.generateTID();
    this.name = name;
  }

  generateTID(): string {
    const service = new GlobalService();
    return service.generateID(8, 'TC');
  }
}
