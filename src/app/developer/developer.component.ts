import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer = new Developer(
    'Damien',
    'Guyonnet',
    26,
    'M',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis id veritatis dignissimos accusamus alias, eaque sequi ea. Deleniti facilis unde fuga dicta veritatis quia, esse sapiente cupiditate! Ipsum, iste est.Ex nesciunt quae deserunt dolorum consequatur omnis vitae optio fugiat, sit obcaecati beatae asperiores rerum rem nihil, vero labore explicabo laudantium nemo autem porro animi ratione. Labore excepturi voluptate quisquam?',
    [{ name: 'Javascript', logo: '../../assets/js-logo.png', site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Angular', logo: '../../assets/angular-logo.png', site: 'https://angular.io/docs' }
    ]
  );

  constructor() {
  }

  ngOnInit() {

  }

}
