import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multi-select-dd',
  templateUrl: './multi-select-dd.component.html',
  styleUrls: ['./multi-select-dd.component.css']
})
export class MultiSelectDdComponent implements OnInit {
  dropDownOpened: boolean = false;
  isAllSelected: boolean = false;
  count: number = 0;
  selectedItemsDisplay: string = null;
  searchText: string = null;
  tempData: any[] = [];
  searchFilterEnable: boolean = false;
  selectedItems: any[] = [];
  @Input() placeholder: string = null;
  @Input() data: any[] = null;
  @Input() settings: any = null;

  constructor() { }

  ngOnInit() {
    this.tempData = Object.assign([], this.data);
    this.tempData.forEach((i) => i.checked = false);
  }

  selectAll() {
    this.tempData.forEach((x) => x.checked = !this.isAllSelected);
    if (!this.isAllSelected) {
      this.data.forEach((x) => x.checked = !this.isAllSelected);
      this.selectedItems = Object.assign([], this.data);
    } else
      this.selectedItems = [];
  }

  removeItem(index, event) {
    this.selectedItems[index].checked = false;
    this.selectedItems.splice(index, 1);
    event.stopPropagation();
  }

  checkValue(item) {
    if (item.checked) {
      if (this.selectedItems.filter(x => x.text == item.text).length > 0) {
        this.selectedItems.splice(this.selectedItems.map(x => x.text).indexOf(item.text), 1);
      } else {
        this.selectedItems.push(item);
        if (this.selectedItems.filter(x => x.checked == true).length == this.data.length)
          this.isAllSelected = true;
      }
    } else {
      this.selectedItems.splice(this.selectedItems.map(x => x.text).indexOf(item.text), 1);
      if (this.selectedItems.filter(x => x.checked == true).length != this.data.length)
        this.isAllSelected = false;
    }
  }

  searchCity(text) {
    this.tempData = this.data.filter(item => item.text.startsWith(text));
  }

  arrowClick() {
    this.dropDownOpened = !this.dropDownOpened;
  }
}
