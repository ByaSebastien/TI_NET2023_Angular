import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links!: Link[];

  ngOnInit(): void {
    this.links = [
      { title: 'Home', url: '/home' },
      {
        title: "Demo", children: [
          { title: 'Bindings', url: "demo/demo01" },
          { title: 'Pipes', url: "demo/demo02" },
          { title: 'Directives', url: "demo/demo03" },
          { title: 'Input / Output', url: "demo/demo04" },
          { title: 'Services', url: "demo/demo05" },
          { title: 'Formulaire', url: "demo/demo06" },
        ], isVisible: false
      },
      {
        title: "Exo", children: [
          { title: 'Chrono', url: "exo/exo01" },
          { title: 'Shopping list', url: "exo/exo02" },
          { title: 'Shopping list +', url: "exo/exo03" },
        ], isVisible: false
      }
    ]
  }

  toggleLink(link: Link): void {
    link.isVisible = true;
  }

  clearLink(): void {
    for (let link of this.links) {
      link.isVisible = false;
    }
  }
}
