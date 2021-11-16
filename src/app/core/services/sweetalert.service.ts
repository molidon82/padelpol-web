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

  showApiErrors(response: { error?: object }) {
    const messages = Object.values(response.error || {}).reduce((sol, element) => {
      sol = sol.concat(element);
      return sol;
    }, []);

    if (messages.length == 0) messages.push("Error inesperado.");

    return this.error(messages.join("\n"));
  }

}
