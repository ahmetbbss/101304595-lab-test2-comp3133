import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissiondetailsComponent } from './mission-details.component';

describe('MissionDetailsComponent', () => {
  let component: MissiondetailsComponent;
  let fixture: ComponentFixture<MissiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissiondetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
