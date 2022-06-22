import { Component } from '@angular/core'
import { ItemEventData, Screen } from '@nativescript/core';

import { BASE64_PDFS } from './data'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly BASE64_PDFS = BASE64_PDFS.map((data: string) => `data:application/pdf;base64,${data}`);
  readonly HEIGHT = Screen.mainScreen.heightDIPs;

  onLoaded(): void {
    console.log('onLoaded');
  }

  onItemTap(event: ItemEventData): void {
    console.log('onItemTap', event.index);
  }
  
  onItemLoading(event: ItemEventData): void {
    console.log('onItemLoading', event.index);
  }
  
  onLoad(index: number): void {
    console.log('onLoad', index);
  }
}
