import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderdashboardComponent } from './providerdashboard.component';

describe('ProviderdashboardComponent', () => {
  let component: ProviderdashboardComponent;
  let fixture: ComponentFixture<ProviderdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
