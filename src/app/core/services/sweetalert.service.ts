import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

  success(title: string, subtitle?: string) {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: subtitle,
    });
  }
  
  warning(title: string, subtitle?: string) {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: subtitle,
    });
  }
  
  error(title: string, subtitle?: string) {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: subtitle,
    });
  }

}
