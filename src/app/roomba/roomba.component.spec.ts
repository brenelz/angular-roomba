import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombaComponent } from './roomba.component';

describe('RoombaComponent', () => {
  let component: RoombaComponent;
  let fixture: ComponentFixture<RoombaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoombaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
