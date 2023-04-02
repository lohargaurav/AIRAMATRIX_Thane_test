import { NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    CdkTreeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class MaterialModule {}