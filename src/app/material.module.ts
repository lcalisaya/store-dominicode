import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"; 
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule} from "@angular/material/form-field";
//Módulo de Material
//Decorador que marca el comportamiento de la clase de abajo
@NgModule({
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule
    ]
})

export class MaterialModule {

}