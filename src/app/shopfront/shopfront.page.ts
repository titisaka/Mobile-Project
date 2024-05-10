import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonSearchbar, IonInfiniteScroll, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonBackButton, IonIcon, IonThumbnail } from '@ionic/angular/standalone';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-shopfront',
  templateUrl: './shopfront.page.html',
  styleUrls: ['./shopfront.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonSearchbar, IonInfiniteScroll, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonBackButton, IonIcon, IonThumbnail]
})
export class ShopfrontPage implements OnInit {
  products:any = [];
  constructor(private productsService:ProductsService) { 

  }

  ngOnInit(): void{
    this.productsService.getProductData().subscribe(
      (data)=>{
        this.products = data.Shopping;
      }
    );
  }
}
