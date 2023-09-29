import { Component, Input, OnInit } from '@angular/core';
import { personService } from '../person.service';
import { person } from '../person/person.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  implements OnInit{
    @Input() personIds: Number[]|null;
    public persons: person[] =[];
    private  carentPageCount = 0;
    private timeout =false;
    constructor(private personService: personService){
    }
    ngOnInit(){
        this.insertPeople()
        /* infinite scroll */
        const val = document.querySelector('#inf-section');
        window.addEventListener('scroll', (e)=>{
            console.log(val.getBoundingClientRect().bottom);
            console.log(window.innerHeight);
            if(val.getBoundingClientRect().bottom < window.innerHeight && !this.timeout){
                this.timeout = true;
                this.insertPeople();
            } 
        })
    }
    private insertPeople(){
        if(!this.personIds){
            this.personService.fetchPage((++this.carentPageCount))
                .subscribe(
                    res => {
                        this.persons.push(...res);
                        this.timeout = false;
                    }
                );
        }else{
            this.personService.fetchPeople(this.personIds, ++this.carentPageCount).subscribe(
                res =>{
                    this.persons.push(...res);
                    this.timeout = false;
                }
            )
        }
    }

}
