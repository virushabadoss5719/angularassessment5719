import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    config = new MatSnackBarConfig();
    message = '';
    public notification$: Subject<string> = new Subject();
    constructor(private snackBar: MatSnackBar) {
        this.config.duration = 3000;
        this.config.verticalPosition = 'top';
        this.config.horizontalPosition = 'right';
    }
    showInfo(msg: string) {
        this.config.panelClass = ['info-snackbar'];
        this.message = msg;
        this.show();
    }

    showWarn(msg: string) {
        this.config.panelClass = ['warn-snackbar'];
        this.message = msg;
        this.show();
    }
    showError(msg: string) {
        this.config.panelClass = ['error-snackbar'];
        this.message = msg;
        this.show();
    }

    show() {
        this.snackBar.open(this.message, null, this.config);
    }
}
