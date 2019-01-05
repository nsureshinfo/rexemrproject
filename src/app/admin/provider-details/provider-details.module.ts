import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewProviderComponent } from './create-new-provider/create-new-provider.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
@NgModule({
  declarations: [CreateNewProviderComponent, EditProviderComponent],
  imports: [
    CommonModule
  ]
})
export class ProviderDetailsModule { }
