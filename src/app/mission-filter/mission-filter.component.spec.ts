import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionfilterComponent } from './mission-filter.component';

describe('MissionFilterComponent', () => {
  let component: MissionfilterComponent;
  let fixture: ComponentFixture<MissionfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionfilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
