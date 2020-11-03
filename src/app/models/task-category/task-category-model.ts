import {ITaskCategory} from '../../interfaces/task-category';
import {GlobalService} from '../../services/global/global.service';

export class TaskCategoryModel implements ITaskCategory {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = this.generateTID();
    this.name = name;
  }

  generateTID(): string {
    const service = new GlobalService(null);
    return service.generateID(8, 'TC');
  }
}
