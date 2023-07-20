import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(public authserve:AuthserviceService) {}

  logout(): void {
    this.authserve.logout();
  }

}
