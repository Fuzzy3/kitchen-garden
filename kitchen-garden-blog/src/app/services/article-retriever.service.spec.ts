import { TestBed } from '@angular/core/testing';

import { ArticleRetrieverService } from './article-retriever.service';

describe('ArticleRetrieverService', () => {
  let service: ArticleRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
