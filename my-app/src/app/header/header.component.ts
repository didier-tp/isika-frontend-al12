import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public preferencesService : PreferencesService) { 
    //injection de dépendance
  }
 

  //equivalent de @PostConstruct de java
  ngOnInit(): void {
  
  }
  


}
