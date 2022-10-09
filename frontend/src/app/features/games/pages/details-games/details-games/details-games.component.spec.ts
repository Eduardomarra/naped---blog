import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGamesComponent } from './details-games.component';

describe('DetailsGamesComponent', () => {
  let component: DetailsGamesComponent;
  let fixture: ComponentFixture<DetailsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
