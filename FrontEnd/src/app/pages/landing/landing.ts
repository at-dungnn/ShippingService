import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: 'landing.html',
  imports: [CommonModule, ButtonModule],
  template: ``
})
export class Landing {}
