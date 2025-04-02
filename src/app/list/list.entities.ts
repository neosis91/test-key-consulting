import { StatusE } from './form-projet/form-projet.component';

export interface Projet {
  id: number;
  name: string;
  user: string;
  contract: number;
  status: StatusE;
}
