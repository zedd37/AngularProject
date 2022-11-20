import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInfluencerPasswordComponent } from './change-influencer-password.component';

describe('ChangeInfluencerPasswordComponent', () => {
  let component: ChangeInfluencerPasswordComponent;
  let fixture: ComponentFixture<ChangeInfluencerPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeInfluencerPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeInfluencerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
