import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

  warning(title: string, subtitle?: string) {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: subtitle,
    });
  }
  
}
