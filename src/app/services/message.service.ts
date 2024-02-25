import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  alert(message: string,type:string): void {
    const alertContainer = document.createElement('div');
    alertContainer.className = type === 'error' ?'err':'info';
    alertContainer.textContent = message;
    document.body.appendChild(alertContainer);

    setTimeout(() => {
      alertContainer.remove();
    }, 1000); // Remove the alert after 3 seconds
    }
}
