import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAnimesComponent } from './details-animes.component';

describe('DetailsAnimesComponent', () => {
  let component: DetailsAnimesComponent;
  let fixture: ComponentFixture<DetailsAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
