import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewProviderComponent } from './create-new-provider.component';

describe('CreateNewProviderComponent', () => {
  let component: CreateNewProviderComponent;
  let fixture: ComponentFixture<CreateNewProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
