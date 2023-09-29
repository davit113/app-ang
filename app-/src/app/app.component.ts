import { Component, OnInit } from '@angular/core';
import { HttpRequest,  } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { personService } from './person.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'V0.1';
    public people = [
        {
            id: 1,
            firstName:'davit',
            pictureUrl:'pic1.jpj'
        },
        {
            id: 2,
            firstName:'davit',
            pictureUrl:'pic2.jpj'
        },
        {
            id: 3,
            firstName:'davit3',
            pictureUrl:'pic3.jpj'
        }
    ]
    constructor(private personService: personService){

    }
    ngOnInit(): void {
    }
}
