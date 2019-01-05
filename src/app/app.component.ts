import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  route: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private CustomerService : CustomerService,
    location: Location) {
    this.route = location.path();
  }

  ngOnInit(): void {
    if ((this.CustomerService.isLogged()) && (this.route == '/auth' || this.route == '') ){
      this.router.navigateByUrl('patient/dashboard');
    }else if (this.route == '') {
      this.router.navigate(['/auth'], { relativeTo: this.activatedRoute });
    } 
  }
}
