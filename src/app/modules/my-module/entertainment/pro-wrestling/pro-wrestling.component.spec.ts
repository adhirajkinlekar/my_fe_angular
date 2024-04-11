import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProWrestlingComponent } from './pro-wrestling.component';

describe('ProWrestlingComponent', () => {
  let component: ProWrestlingComponent;
  let fixture: ComponentFixture<ProWrestlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProWrestlingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProWrestlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
