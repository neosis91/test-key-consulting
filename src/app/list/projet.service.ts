import {Injectable} from '@angular/core';
import {Projet} from './list.entities';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private projets: BehaviorSubject<Projet[]> = new BehaviorSubject([
    { id: 1, name: 'Projet de travaux lorem ipsum', user: 'John Doe', contract: 1534885932 }
  ]);
  public $projets = this.projets.asObservable();

  // Récupérer tous les projets ()
  getAll(): Projet[] {
    return this.projets.value;
  }

  post(projet: Projet): void {
    const projets = this.projets.value;
    projet.id = projets.length + 1;
    projets.push(projet);
    this.projets.next(projets);
  }

  put(projet: Projet): void {
    const projets = this.projets.value;
    const index = projets.findIndex(p => p.id === projet.id);
    if (index !== -1) {
      projets[index] = projet;
      this.projets.next(projets);
    }
  }

  delete(id: number): void {
    let copyProjets = [...this.projets.value];
    copyProjets = copyProjets.filter(p => p.id !== id);
    this.projets.next(copyProjets);
  }
}
