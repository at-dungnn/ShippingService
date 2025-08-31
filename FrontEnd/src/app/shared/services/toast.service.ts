import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(public _messageService: MessageService) { }
    showError(message: string, keyToast: string) {
        this._messageService.add({
            key: keyToast,
            severity: 'error',
            summary: 'Error',
            detail: message,
        });
    }
    showSuccess(message: string, keyToast: string) {
        this._messageService.add({
            key: keyToast,
            severity: 'success',
            summary: 'Success',
            detail: message,
        });
    }

    showWarning(message: string, keyToast: string) {
        this._messageService.add({
            key: keyToast,
            severity: 'warn',
            summary: 'Notification',
            detail: message,
        });
    }

    showSuccessNoKey(message: string) {
        this._messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: message,
        });
    }

    showErrorNoKey(message: string) {
        this._messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message,
        });
    }

    showWarningNoKey(message: string) {
        this._messageService.add({
            severity: 'warn',
            summary: 'Notification',
            detail: message,
        });
    }
}
