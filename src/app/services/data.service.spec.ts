import { TestBed, inject } from '@angular/core/testing';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
  });

  it('should be created', inject([HttpTestingController, DataService],
    (httpMock: HttpTestingController, dataService: DataService) => {
      expect(dataService).toBeTruthy();
    }
  ));
});
