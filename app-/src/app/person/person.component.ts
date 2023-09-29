import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { personService } from '../person.service';
import { person } from './person.model';
const relativeToPictureFolder = '/assets/img';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit{
    personParced = false;
    personId: number;
    person: person;
    friends: person[] = [];
    constructor(private route: ActivatedRoute, private personService: personService /* private http:HttpClient */){
        this.personId = this.route.snapshot.params['id'];
    }
    ngOnInit(){
        /* for same page refresh */
        this.route.params.subscribe(
            (params:Params)=>{
                this.personId = params['id'];
            }
        );
        /* end */
        this.personService.fetchPerson(this.personId)
            .subscribe(
                res=>{
                    this.person = res;
                    this.personParced =true;
                    // this.getFriends();
                } 
            );
        
    }
}
