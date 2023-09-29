import { Component, Input, OnInit } from '@angular/core';
import{ person } from '../person/person.model';

const relativeToPictureFolder = 'assets/img';
@Component({
  selector: 'app-basic-cart',
  templateUrl: './basic-cart.component.html',
  styleUrls: ['./basic-cart.component.css']
})
export class BasicCartComponent implements OnInit {
    @Input() person: person;
    public path: any;
    constructor(){
    }
    ngOnInit(): void {
        this.person.firstName;
        this.path = relativeToPictureFolder + this.person.profilePic;
    }
}
