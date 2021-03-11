import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remoteapicountries1Component } from './remoteapicountries1.component';

describe('Remoteapicountries1Component', () => {
  let component: Remoteapicountries1Component;
  let fixture: ComponentFixture<Remoteapicountries1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Remoteapicountries1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Remoteapicountries1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
