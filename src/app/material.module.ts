import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatProgressSpinnerModule, MatDividerModule, MatChipsModule, MatInputModule } from '@angular/material';

const myModule = [
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports:[myModule]
})
export class MaterialModule { }
