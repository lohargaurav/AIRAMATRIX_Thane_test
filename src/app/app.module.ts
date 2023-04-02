import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EditAddressComponent } from "./component/edit-address/edit-address.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";
import { DataFormatService } from "./shared/service/data-format.service";

@NgModule({
  declarations: [
    EditAddressComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [DataFormatService],
  bootstrap: [EditAddressComponent],
})
export class AppModule {}
