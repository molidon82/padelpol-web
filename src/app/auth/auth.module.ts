import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

// Components 
import { RegisterPageComponent } from './components/register-page/register-page.component';

// Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule, AuthRoutingModule, MatFormFieldModule, MatAutocompleteModule,
    MatInputModule, MatIconModule, MatButtonModule
  ]
})
export class AuthModule { }
