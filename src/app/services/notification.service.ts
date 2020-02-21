import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    config = new MatSnackBarConfig();
    constructor(private snackBar: MatSnackBar) {
        this.config.duration = 3000;
        this.config.verticalPosition = 'top';
        this.config.horizontalPosition = 'right';
        this.config.panelClass = ['info-snackbar'];
    }
    showInfo(msg: string) {
        this.snackBar.open(msg, null, this.config);
    }
}
