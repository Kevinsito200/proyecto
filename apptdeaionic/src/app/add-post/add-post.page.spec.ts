import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPostPage } from './add-post.page';

describe('AddPostPage', () => {
  let component: AddPostPage;
  let fixture: ComponentFixture<AddPostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
