import { AfterViewInit, Component, OnInit } from '@angular/core';
//import anime from 'node_modules/animejs/lib/anime.es.js';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterViewInit {

  constructor() { }


  ngAfterViewInit(): void{

  //  let tl = anime.timeline({
  //       easing: 'easeOutExpo',
  //       duration: 500,
  //       delay: 3000
  //     });

  //     tl.ad({
  //       targets: [".nav",".social-icons","bottom-nav"],
  //       opacity: 0
  //     }).ad({
  //       targets: ".nav",
  //       translateY: -400
  //     }).add({
  //       targets: ".social-icons",
  //       translateX: -400
  //     }).add({
  //       targets: ".bottom-nav",
  //       translateY: -400
  //     })

      


  }
}
