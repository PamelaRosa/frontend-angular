import {ProductOrder} from "../models/product-order.model";
import {Subject} from "rxjs/internal/Subject";
import {ProductOrders} from "../models/product-orders.model";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable()
export class EcommerceService {
    url = "http://localhost:3000/produtos"
    private ordersUrl = "/api/orders";

    private productOrder: ProductOrder;
    private orders: ProductOrders = new ProductOrders();

    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();
    private subTotalSubject = new Subject();
    private sumFreteSubject = new Subject();
    private semFreteSubject = new Subject();

    private total: number;
    private subtotal: number;
    private sumFrete: number;
    private semFrete: number;

    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    listarProdutos ():Observable<Product[]> {
        return this.http.get<Product[]>(this.url)
    }
    saveOrder(order: ProductOrders) {
        return this.http.post(this.ordersUrl, order);
    }

    set SelectedProductOrder(value: ProductOrder) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }

    get SelectedProductOrder() {
        return this.productOrder;
    }

    set ProductOrders(value: ProductOrders) {
        this.orders = value;
        this.ordersSubject.next();
    }

    get ProductOrders() {
        return this.orders;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
    }
    get SubTotal() {
        return this.subtotal;
    }

    set SubTotal(value: number) {
        this.subtotal = value;
        this.subTotalSubject.next();
    }
    get SumFrete() {
        return this.sumFrete;
    }

    set SumFrete(value: number) {
        this.sumFrete = value;
        this.sumFreteSubject.next();
    }

    get SemFrete() {
        return this.semFrete;
    }

    set SemFrete(value: number) {
        this.semFrete = value;
        this.semFreteSubject.next();
    }
}