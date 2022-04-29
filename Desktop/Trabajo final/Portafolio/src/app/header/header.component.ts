import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Logo:any = "../assets/imagenes/Logo.jpg"
  Gmail:any = "../assets/imagenes/Gmail.png"
  Facebook:any = "../assets/imagenes/Facebook.png"
  Instagram:any = "../assets/imagenes/Instagram.png"
  Twitter:any = "../assets/imagenes/Twitter.png"
  Linkedin:any = "../assets/imagenes/Linkedin.png"
  Fondo:any = "../assets/imagenes/Fondo.png"


  constructor() { }

  ngOnInit(): void {
  }

}
