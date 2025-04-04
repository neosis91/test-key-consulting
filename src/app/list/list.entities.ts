import { StatusE } from './form-projet/form-projet.component';

export interface Project {
  id: number;
  name: string;
  user: string;
  contract: number;
  status: StatusE;
}
