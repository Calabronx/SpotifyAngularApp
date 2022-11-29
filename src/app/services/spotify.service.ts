import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify service listo");
    //console.log(this.getToken());
  }

  getQuery(query: string) {

    const URL = `https://api.spotify.com/v1/${query}`;



    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD-hQj2Ak-XNWDQFJe-Oq94LwfxINL9_9uI6dngN908jGsx4HYZtolp5wPl4SQDgZZC88YtreTpmqiN8wfsFHQdq-vxi4wSZxRK3Qz4tXBCLIdrbEo'
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQA2aJgcA4x2qBBfh0cs1od69DobcRSFoVNd2Yz6x8ffa6h_4foYMYkGsxjvHReZWh9DGMs5Ru7eoFpdAP3FoYCb5wOTsI4lncNdew6Tyabr97ACptg'
    // });
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => data['albums'].items));

    // this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", { headers })
    //               .pipe(map((data: any) => data['albums'].items));

  }

  getArtistas(termino: string) {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQA2aJgcA4x2qBBfh0cs1od69DobcRSFoVNd2Yz6x8ffa6h_4foYMYkGsxjvHReZWh9DGMs5Ru7eoFpdAP3FoYCb5wOTsI4lncNdew6Tyabr97ACptg'
    // });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items));

    // this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    //   .pipe(map((data: any) => data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    //.pipe(map((data: any) => data['artists'].items));
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?market=es`)
      .pipe(map((data: any) => data['tracks']));
  }

  // getToken() {
  //   const url = 'https://accounts.spotify.com/api/token';
  //   const headers = {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'application/x-www-form-urlencoded')
  //   };
  //   const body = new HttpParams()
  //     .set('grant_type', 'client_credentials')
  //     .set('client_id', 'f1aca40006a64657b1b2089e3de4a4bf')
  //     .set('client_secret', '77c7686f3f034d45bc4567ec2d6bebe8')
  //     .set('token-type', 'Bearer');

  //     const test = url + body.toString() + headers;
  //     console.log(test);

  //   return this.http.post(url, body.toString(), headers);
  // }


}

