/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RssCardComponent } from './rss-card.component';

describe('RssCardComponent', () => {
  let component: RssCardComponent;
  let fixture: ComponentFixture<RssCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
