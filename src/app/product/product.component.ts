import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();    
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      name: 'logout',
      title: 'Are you sure you want to logout?',
      description: 'Pretend this is a convincing argument on why you shouldnt logout :)',
      actionButtonText: 'Logout',
    }
    const modalDialog = this.dialog.open(ProductFormComponent, dialogConfig);
  }
}
