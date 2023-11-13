import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { FakeAuthService } from '../shared/services/fake-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links!: Link[];
  currentUser!: string | undefined;

  constructor(
    private _authService: FakeAuthService
  ) { }

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
          { title: 'Routing', url: "demo/demo07" },
          { title: 'Http demo', url: "demo/demo08" },
        ], isVisible: false
      },
      {
        title: "Exo", children: [
          { title: 'Chrono', url: "exo/exo01" },
          { title: 'Shopping list', url: "exo/exo02" },
          { title: 'Shopping list +', url: "exo/exo03" },
        ], isVisible: false
      }
    ];
    //Recuperation de la valeur de mon subject
    // this.currentUser = this._authService.currentUser;
    // console.log(this.currentUser);

    //Recuperation vie subscribe
    this._authService.currentUser$.subscribe(
      (user: string | undefined) => {
        this.currentUser = user;
        console.log(user);
      })
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
