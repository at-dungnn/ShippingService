import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { HeroWidget } from './components/herowidget';
import { TopbarWidget } from './components/topbarwidget.component';
import { ListTop } from './components/list/list-top';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: 'landing.html',
  imports: [RouterModule, TopbarWidget, HeroWidget, RippleModule, StyleClassModule, ButtonModule, DividerModule, ListTop],
  template: ``
})
export class Landing {}
