import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sdbx-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  public showSearchResults: boolean = false;
  public searchResults: { name: string, description: string }[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.searchResults = [
      { name: 'Sample Result', description: 'This result is used for demonstrating routing' },
    ];
  }

  public onClearClicked(): void {
    this.showSearchResults = false;
  }

  public onSearchClicked(): void {
    this.showSearchResults = true;
  }
}
