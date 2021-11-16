import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { appRoutes } from 'src/app/app-routes';
import { SweetalertService } from 'src/app/core/services/sweetalert.service';
import { authRoutes } from '../../auth-routes';
import { PaddleLevelApiResponse } from '../../interfaces/paddle-level-api-response';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm = this.fb.group({
    name: [''],
    paddleLevel: [''],
    email: [''],
    password: [''],
    passwordConfirmation: [''],
  });

  loginPagePath = `/${appRoutes.authModule}/${authRoutes.loginPage}`;

  paddleLevels: PaddleLevelApiResponse[];
  filteredPaddleLevels: Observable<PaddleLevelApiResponse[]>;

  constructor(private fb: FormBuilder, private authApiService: AuthApiService, private sweetalertService: SweetalertService) { }

  ngOnInit(): void {
    this.authApiService.getPaddleLevels().subscribe(res => {
      this.paddleLevels = res;
      this.registerForm.controls['paddleLevel'].setValue('');
    });

    this.filteredPaddleLevels = this.registerForm.controls['paddleLevel'].valueChanges.pipe(
      map((value: string | PaddleLevelApiResponse) => {
        if (typeof value != 'string') value = value.name;
        return this.filter(value);
      })
    );
  }

  displayFn(paddelLevel: PaddleLevelApiResponse): string {
    return paddelLevel && paddelLevel.name ? paddelLevel.name : '';
  }

  private filter(value: string): PaddleLevelApiResponse[] {
    return this.paddleLevels.filter(pl => pl.name.toLowerCase().includes(value.toLowerCase()));
  }

  onRegisterSubmit(): any {
    const params = this.registerForm.value;
    // if (typeof params.paddleLevel == 'string') return this.sweetalertService.warning("El nivel de padel es obligatorio");
    // if (params.password != params.passwordConfirmation) return this.sweetalertService.warning("Las contraseñas han de ser iguales");
    this.authApiService.register({
      name: params.name,
      paddle_level_id: params.paddleLevel.id,
      email: params.email,
      password: params.password,
      password_confirmation: params.passwordConfirmation
    }).subscribe({
      next: res => {
        this.sweetalertService.success("Usuario creado correctamente", "Por favor, inicie sesión con el mismo");
      },
      error: errorResponse => {
        console.log(errorResponse);
        this.sweetalertService.showApiErrors(errorResponse);
      }
    });

  }

}
