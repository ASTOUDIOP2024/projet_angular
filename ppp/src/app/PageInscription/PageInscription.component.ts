import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PageInscription',
  standalone: true,
  imports: [],
  templateUrl: './PageInscription.component.html',
  styleUrl: './PageInscription.component.css'
})
export class PageInscriptionComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.initSlider();
  }

  initSlider() {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const interval = 5000; // 5 secondes

    function showSlide(i: number) {
      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === i);
      });
    }

    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, interval);

    showSlide(index);
  }
}
