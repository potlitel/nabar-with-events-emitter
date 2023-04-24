import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //do the magic!!!

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatSnackBarModule, NgbModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
