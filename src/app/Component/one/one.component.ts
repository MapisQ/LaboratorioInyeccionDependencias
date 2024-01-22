import { Component } from '@angular/core';
import { ShowService } from 'src/app/Service/show.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

  constructor(private showService: ShowService) { }

  get items() {
     return this.showService.items;
  }
 

}
