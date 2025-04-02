// list.component.d.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjetService } from './projet.service';
import { of } from 'rxjs';
import { Projet } from './list.entities';
import { StatusE } from './form-projet/form-projet.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let dialogSpy: jest.Mocked<MatDialog>;
  let projetServiceSpy: jest.Mocked<ProjetService>;

  beforeEach(async () => {
    dialogSpy = {
      open: jest.fn().mockReturnValue({
        afterClosed: jest.fn().mockReturnValue(of(null))
      })
    } as unknown as jest.Mocked<MatDialog>;

    projetServiceSpy = {
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      $projets: of([])
    } as unknown as jest.Mocked<ProjetService>;

    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: ProjetService, useValue: projetServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Méthode delete()', () => {
    it('devrait appeler delete() du service avec l\'id', () => {
      const mockProjet = { id: 1, name: 'Projet à supprimer', status: StatusE.TERMINATE } as Projet;

      component.delete(mockProjet);

      expect(projetServiceSpy.delete).toHaveBeenCalledWith(1);
    });
  });
});
