import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalMusicComponent } from './metal-music.component';

describe('MetalMusicComponent', () => {
  let component: MetalMusicComponent;
  let fixture: ComponentFixture<MetalMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetalMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetalMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
