import { HttpRequest,  } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

import { person } from './person/person.model';

interface Post {
    title: string;
    content: string;
    id?: string;
  }


@Injectable({providedIn: 'root'})
export class personService {
    private base_url = 'http://localhost:3000/users';
    dammyPerson :person = {
        id:1,
        firstName: 'lua',
        lastName: 'skd',
        profilePic: '0',
        description: 'lorem',
        friendList: []
    }

    constructor(private http: HttpClient) {}

    createAndStoreGet(url){

    }
    fetchPerson(string:Number){
        return this.http
                .get<person>(this.base_url + '/' + string);
    }
    fetchPage(pageNumber:Number, maxPerPage: Number = 10){
        let pageNum =`?_page=${pageNumber}`;
        let maxNum = `&_limit=${maxPerPage}`;
        return this.http
                .get<person>(this.base_url+pageNum+maxNum)
                .pipe(
                    map(response =>{
                        const personArray: person[] = [];
                        for(let i  in response){
                            personArray.push(response[i]);
                        }
                        return personArray;
                    })
                );
    };
    fetchPeople(arr:Number[],pageNumber:Number){
        let pageNum =`_page=${pageNumber}`;
        let query  = '?';
        for(let friendId of arr){
            query += `id=${friendId}&`;
        }
        query+=pageNum;
        return this.http
                .get<person[]>(this.base_url+query)
                .pipe(
                    map(response =>{
                        const personArray: person[] = [];
                        for(let i  in response){
                            personArray.push(response[i]);
                        }
                        return personArray;
                    })
                );
    }

}