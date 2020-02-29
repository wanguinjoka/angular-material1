import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatButtonToggleModule,
         MatIconModule,
         MatProgressSpinnerModule,
        MatToolbarModule,
      MatSidenavModule} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
