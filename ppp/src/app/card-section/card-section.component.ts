import { Component, OnInit } from '@angular/core';
import { Carte } from '../models/carte.model'
@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.css'
})
export class CardSectionComponent implements OnInit{

  constructor() { }

  forms = [
    { name: 'Job Application Form Template', image: 'data:image/png;base64,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' },
    { name: 'Rental Application Form Template', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelKy-hn2-0fogoQs9OJYSuTmm0MHapf1vHQ&s' },
    { name: 'Volunteer Application Form Template', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIst8NOp-fDGqCThX65hzcWXJOEnG-n91TnA&s' },
    { name: 'Affiliate Application Form Template', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZCup0YrCh9slBK1kTDVzdrFUaKBs9borWw&s' },
    { name: 'Award Application Form Template', image: 'https://img.freepik.com/vecteurs-libre/modele-formulaire-inscription-design-plat_23-2147978342.jpg' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSCvTGJAiOVEh5O3dQ4FuAAjPQs_ZiUN-oA&s' },


    { name: 'Volunteer Application Form Template', image: 'https://img.freepik.com/premium-vector/create-account-login-form-website-design-template-ui-ux_102918-34.jpg?w=360' },
    { name: 'Affiliate Application Form Template', image: 'https://img.freepik.com/vecteurs-premium/modele-formulaire-inscription-design-plat_23-2147976843.jpg' },
    { name: 'Award Application Form Template', image: 'https://img.freepik.com/vecteurs-libre/modele-formulaire-inscription-design-plat_23-2147978342.jpg' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3MQrAMXtd6r5vry9ZU_59RyB3folyvWurg&s' },
  ];


  ngOnInit(): void {
  }
}
