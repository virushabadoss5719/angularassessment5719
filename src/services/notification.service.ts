import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    public notification$: Subject<string> = new Subject();
    constructor(private snackBar: MatSnackBar) { }
    showToaster(msg: string) {
        this.snackBar.open(msg, null, {
            duration: 3000,
        });
    }
}
