import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundObjectComponent } from './sound-object.component';

describe('SoundObjectComponent', () => {
  let component: SoundObjectComponent;
  let fixture: ComponentFixture<SoundObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
