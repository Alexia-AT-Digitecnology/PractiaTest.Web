import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewerComponent } from './client-viewer.component';

describe('ClientViewerComponent', () => {
  let component: ClientViewerComponent;
  let fixture: ComponentFixture<ClientViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
