import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingElement: HTMLElement;
  private styles = [
    'display: none;',
    'position: fixed;',
    'inset: 0;',
    'background: rgba(0, 0, 0, 0.6) url("assets/images/loading-padelpol.gif") center center no-repeat;',
  ];

  constructor() { 
    this.loadingElement = document.createElement("div");
    this.loadingElement.setAttribute('style', this.styles.join(''));
    document.body.appendChild(this.loadingElement);
  }

  start() {
    this.loadingElement.style.display = 'block';
  }

  stop() {
    this.loadingElement.style.display = 'none';
  }

}
