// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms'; 
// import { SourcingService } from '../services/sourcing.service';
// import { SourcingItem } from '../models/sourcing-item.model';

// @Component({
//   selector: 'app-sourcing-list',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './sourcing-list.component.html'
// })
// export class SourcingListComponent implements OnInit {
//   sourcingItems: SourcingItem[] = [];
  
// newItem: SourcingItem = {
//   sapCode: '',
//   description: '',
//   drawingRevision: '',
//   commodity: '',
//   supplier: '',
//   buyerCST: '',
//   applicationProduct: '',
//   customerCode: '',       // Add this
//   costingSheet: false,     // Add this
//   toolCostStatus: '',      // Add this
//   dualSource: '',          // Add this
//   saReleasedNumber: '',
//   remarks: '',             // Add this
//   isirDocuments: false,
//   ppapDocument: false
// };

//   constructor(private sourcingService: SourcingService) {}

//   ngOnInit(): void {
//     this.loadData();
//   }

//   loadData() {
//     this.sourcingService.getSourcingItems().subscribe({
//       next: (data) => this.sourcingItems = data,
//       error: (err: any) => console.error('Error fetching data', err) // Added : any
//     });
//   }

//   onSave() {
//     // This now matches the addItem method in the service
//     this.sourcingService.addItem(this.newItem).subscribe({
//       next: () => {
//         alert('Data added successfully!');
//         this.loadData(); 
//         this.resetForm(); 
//       },
//       error: (err: any) => alert('Failed to add data. Is the backend running?') // Added : any
//     });
//   }

// resetForm() {
//   this.newItem = {
//     sapCode: '', description: '', drawingRevision: '', commodity: '',
//     supplier: '', buyerCST: '', applicationProduct: '', customerCode: '',
//     toolCostStatus: '', dualSource: '', saReleasedNumber: '', remarks: '',
//     isirDocuments: false, ppapDocument: false, costingSheet: false
//   };
// }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { SourcingService } from '../services/sourcing.service';
import { SourcingItem } from '../models/sourcing-item.model';

@Component({
  selector: 'app-sourcing-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sourcing-list.component.html'
})
export class SourcingListComponent implements OnInit {

  sourcingItems: SourcingItem[] = [];

  // ✅ NEW: edit mode flag
  isEditMode = false;

  // ✅ CHANGED: id added (optional)
  newItem: SourcingItem = {
    id: 0,
    sapCode: '',
    description: '',
    drawingRevision: '',
    commodity: '',
    supplier: '',
    buyerCST: '',
    applicationProduct: '',
    customerCode: '',
    costingSheet: false,
    toolCostStatus: '',
    dualSource: '',
    saReleasedNumber: '',
    remarks: '',
    isirDocuments: false,
    ppapDocument: false
  };

  constructor(private sourcingService: SourcingService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.sourcingService.getSourcingItems().subscribe({
      next: data => this.sourcingItems = data,
      error: err => console.error('Error fetching data', err)
    });
  }

  // ✅ CHANGED: ADD + UPDATE logic
  onSave() {
    if (this.isEditMode) {
      // 🔁 UPDATE
      this.sourcingService.updateItem(this.newItem.id!, this.newItem).subscribe({
        next: () => {
          alert('Data updated successfully!');
          this.afterSave();
        },
        error: () => alert('Failed to update data')
      });
    } else {
      // ➕ ADD
      this.sourcingService.addItem(this.newItem).subscribe({
        next: () => {
          alert('Data added successfully!');
          this.afterSave();
        },
        error: () => alert('Failed to add data')
      });
    }
  }

  // ✅ NEW: Edit button handler
  editItem(item: SourcingItem) {
    this.isEditMode = true;
    this.newItem = { ...item }; // clone
  }

  // ✅ NEW: reset after save
  afterSave() {
    this.isEditMode = false;
    this.resetForm();
    this.loadData();
  }

  resetForm() {
    this.newItem = {
      id: 0,
      sapCode: '',
      description: '',
      drawingRevision: '',
      commodity: '',
      supplier: '',
      buyerCST: '',
      applicationProduct: '',
      customerCode: '',
      costingSheet: false,
      toolCostStatus: '',
      dualSource: '',
      saReleasedNumber: '',
      remarks: '',
      isirDocuments: false,
      ppapDocument: false
    };
  }
}
