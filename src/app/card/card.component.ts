import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  public image:string="https://wallpapers.com/images/hd/valorant-background-4t7cfik133uxsxs5.jpg";
  public Titulo:string = "Curso de angular con Interpolacion";
  constructor() { }

  ngOnInit(): void {
    
  }

}
