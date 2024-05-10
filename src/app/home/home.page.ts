import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSearchbar, IonInfiniteScroll, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSearchbar, IonInfiniteScroll, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, RouterLinkWithHref, CommonModule],
})
export class HomePage {
  constructor() {}
}
