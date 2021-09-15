import { Product } from './../../pages/products/interfaces/product.interface';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable(
    {providedIn: 'root'}
)

//Programación reactiva con rxjs
export class ShoppingCartService{
    products: Product[] = [];
    
    private cartSubject = new Subject<Product[]>();
    private totalPriceSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    get totalAction$(): Observable<number> {
        return this.totalPriceSubject.asObservable();
    }

    get quantityAction$(): Observable<number> {
        return this.quantitySubject.asObservable();
    }

    get cartAction$(): Observable<Product[]> {
        return this.cartSubject.asObservable();
    }
    
    //Llama a los 3 métodos privados
    updateCart(product: Product): void {
        this.addToCart(product);
        this.getQuantityProducts();
        this.getTotalPrice();
    }

    // Agregar un producto al carrito
    private addToCart(product: Product): void {
        this.products.push(product);
        this.cartSubject.next(this.products);
    }

    //Obtener cantidad de productos en el carrito
    private getQuantityProducts(): void {
        const quantity = this.products.length;
        this.quantitySubject.next(quantity);
    }

    //Obtener precio total de los productos en el carrito
    private getTotalPrice(): void {
        const total = this.products.reduce((acc, prod) => acc += prod.price, 0);
        this.totalPriceSubject.next(total);
    }
}