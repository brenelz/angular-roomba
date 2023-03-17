import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombaGridComponent } from './roomba-grid.component';

describe('RoombaGridComponent', () => {
  let component: RoombaGridComponent;
  let fixture: ComponentFixture<RoombaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoombaGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoombaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
