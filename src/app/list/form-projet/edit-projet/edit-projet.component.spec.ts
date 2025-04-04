import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjetComponent } from './edit-projet.component';

describe('AddProjetComponent', () => {
  let component: EditProjetComponent;
  let fixture: ComponentFixture<EditProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProjetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
