import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom-Multiselect-Dropdown';
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { id: 1, text: 'Mumbai' },
      { id: 2, text: 'Bangalore' },
      { id: 3, text: 'Kolkata' },
      { id: 4, text: 'Delhi' },
      { id: 5, text: 'Chennai' },
      { id: 6, text: 'Kanpur' },
      { id: 7, text: 'Surat' },
      { id: 8, text: 'Hyderabad' },
      { id: 9, text: 'Pune' },
      { id: 10, text: 'Howrah' },
      { id: 11, text: 'Coimbatore' },
      { id: 12, text: 'Madhurai' },
      { id: 13, text: 'Mysore' },
      { id: 14, text: 'Hassan' },
      { id: 15, text: 'Hubli' }
    ];
    
    // this.selectedItems = [
    //   { id: 1, text: 'Barbecue' },
    //   { id: 2, text: 'Mustard' }
    // ];

    this.dropdownSettings = {
      selectAllText: 'Select All',
      showSelectAll: true,
      allowSearchFilter: true
    };
  }
}
