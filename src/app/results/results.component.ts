import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '../google-books-api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private gsa:GoogleBookApiService) { }

  private books;

  ngOnInit() {
  }



}
