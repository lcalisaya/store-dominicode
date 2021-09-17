import { Product } from './../../pages/products/interfaces/product.interface';
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable(
    {providedIn: 'root'}
)

//Programación reactiva con rxjs
export class ShoppingCartService{
    products: Product[] = [];
    
    private cartSubject = new BehaviorSubject<Product[]>([]);
    private totalPriceSubject = new BehaviorSubject<number>(0);
    private quantitySubject = new BehaviorSubject<number>(0);

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
        //Se busca el producto si existe en el carrito
        const isProductInCart = this.products.find(({id})=> id == product.id)
        //Si existe se le agrega +1 a la propiedad qty del producto
        if(isProductInCart){
            isProductInCart.qty += 1;
        } else {
            //Si no existe se se agrega el producto al carrito con propiedad qty=1
            this.products.push({... product, qty:1});
        }

        this.cartSubject.next(this.products);
    }

    //Obtener cantidad de productos en el carrito
    private getQuantityProducts(): void {
        const quantity = this.products.reduce((acc, prod) => acc += prod.qty, 0);
        this.quantitySubject.next(quantity);
    }

    //Obtener precio total de los productos en el carrito
    private getTotalPrice(): void {
        const total = this.products.reduce((acc, prod) => acc += (prod.price * prod.qty), 0);
        this.totalPriceSubject.next(total);
    }
}