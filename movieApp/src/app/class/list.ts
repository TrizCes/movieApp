import { IList } from "../interface/i-list";

export class List implements IList {
  id?: number;
  name: string;

  constructor(id: number, name: string){
          this.id = id;
          this.name = name;
  }
}
