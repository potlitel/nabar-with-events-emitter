import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatSnackBarModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
