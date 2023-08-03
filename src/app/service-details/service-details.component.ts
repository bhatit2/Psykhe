import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as serviceDetailsData from "../../assets/data.json";

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit{
  data: any = serviceDetailsData;
  currentServiceData: any;
  id: any;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.paramMap.subscribe((param) => {
      this.id = param.get("id");
      this.currentServiceData = this.data[this.id];
    });
  }
}