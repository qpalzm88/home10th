import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  put(source, medium, campaign, term, content) {
    const body = {
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
      utm_term: term,
      utm_content: content,
    }
    return this.http.post("https://jsonplaceholder.typicode.com/posts", body);
  }
}
