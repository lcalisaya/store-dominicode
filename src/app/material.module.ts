import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"; 
//Módulo de Material
//Decorador que marca el comportamiento de la clase de abajo
@NgModule({
    exports: [
        MatToolbarModule
    ]
})

export class MaterialModule {

}