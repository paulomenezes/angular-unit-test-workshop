import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.scss'],
})
export class GistsComponent implements OnInit {
  gists: any[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.getGists('paulomenezes').subscribe((gists) => {
      this.gists = gists;
    });
  }
}
