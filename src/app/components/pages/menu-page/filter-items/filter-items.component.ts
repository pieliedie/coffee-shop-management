import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItemsComponent implements OnInit {

  @Output() filterItems: EventEmitter<string> = new EventEmitter<string>();

  private _filter: string;

  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.filterItems.emit(this.filter);
  }

  constructor() { }

  ngOnInit() {
  }

}
