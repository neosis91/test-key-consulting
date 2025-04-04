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
        afterClosed: jest.fn().mockReturnValue(of(null)),
      }),
    } as unknown as jest.Mocked<MatDialog>;

    projetServiceSpy = {
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      $projets: of([]),
    } as unknown as jest.Mocked<ProjetService>;

    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: ProjetService, useValue: projetServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait appeler post() après ajout validé', async () => {
    // GIVEN
    const mockProjet = { id: 1, name: 'Projet à ajouter', status: StatusE.TERMINATE };
    const dialogRefMock = {
      afterClosed: jest.fn().mockReturnValueOnce(of(mockProjet)),
    };

    dialogSpy.open.mockReturnValueOnce(dialogRefMock);

    // WHEN
    await component.add();

    // THEN
    expect(dialogSpy.open).toHaveBeenCalledTimes(1);
    expect(dialogSpy.open).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        panelClass: expect.arrayContaining(['w-full', 'md:w-[532px]']),
      })
    );
    expect(projetServiceSpy.post).toHaveBeenCalledTimes(1);
    expect(projetServiceSpy.post).toHaveBeenCalledWith(mockProjet);
  });

  it('devrait appeler put() après édition validée', async () => {
    // GIVEN
    const mockProjet = { id: 1, name: 'Projet à éditer', status: StatusE.TERMINATE };
    const dialogRefMock = {
      afterClosed: jest.fn().mockReturnValueOnce(of(mockProjet)),
    };

    dialogSpy.open.mockReturnValueOnce(dialogRefMock);

    // WHEN
    await component.edit(mockProjet);

    // THEN
    expect(dialogSpy.open).toHaveBeenCalledTimes(1);
    expect(dialogSpy.open).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        panelClass: expect.arrayContaining(['w-full', 'md:w-[532px]']),
        data: expect.objectContaining({ projet: mockProjet }),
      })
    );
    expect(projetServiceSpy.put).toHaveBeenCalledTimes(1);
    expect(projetServiceSpy.put).toHaveBeenCalledWith(mockProjet);
  });

  describe('Méthode delete()', () => {
    it("devrait appeler delete() du service avec l'id", () => {
      // GIVEN
      const mockProjet = { id: 1, name: 'Projet à supprimer', status: StatusE.TERMINATE } as Projet;

      // WHEN
      component.delete(mockProjet);

      // THEN
      expect(projetServiceSpy.delete).toHaveBeenCalledWith(1);
    });
  });
});
