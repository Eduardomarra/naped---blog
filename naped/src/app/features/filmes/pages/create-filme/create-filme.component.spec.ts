import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilmeComponent } from './create-filme.component';

describe('CreateFilmeComponent', () => {
  let component: CreateFilmeComponent;
  let fixture: ComponentFixture<CreateFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
