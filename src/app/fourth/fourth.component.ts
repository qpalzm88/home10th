import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JsonService } from '../json.service';

@Component({
  selector: 'fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  users: any;
  utm_source;
  utm_medium;
  utm_campaign;
  utm_term;
  utm_content;
  private subscription: Subscription;
  constructor(private rout: ActivatedRoute, public json: JsonService) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.rout.queryParams.subscribe((queryParams) => this.utm_source = queryParams['utm_source']);
    this.subscription = this.rout.queryParams.subscribe((queryParams) => this.utm_medium = queryParams['utm_medium']);
    this.subscription = this.rout.queryParams.subscribe((queryParams) => this.utm_campaign = queryParams['utm_campaign']);
    this.subscription = this.rout.queryParams.subscribe((queryParams) => this.utm_term = queryParams['utm_term']);
    this.subscription = this.rout.queryParams.subscribe((queryParams) => this.utm_content = queryParams['utm_content ']);

    this.json.put(this.utm_source,
      this.utm_medium,
      this.utm_campaign,
      this.utm_term,
      this.utm_content).subscribe((data) => {
        console.log(data);
        this.users = data;
      });

  }

}
