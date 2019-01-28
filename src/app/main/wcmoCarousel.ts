import { Component, OnInit, Injectable } from "@angular/core"
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Injectable()
class WcmoCarouselResolver implements Resolve<any> {

    constructor(private http: Http) { }
    resolve(route: ActivatedRouteSnapshot): Observable<CarouselItem[]> {
        return this.getCarousels();
    }

    getCarousels(): Observable<CarouselItem[]> {
        return this.http
            .get('assets/carousel.json').pipe(
                map(response => response.json()));
    }
}

@Component({
    selector: "wcmoCarousel",
    templateUrl: './wcmoCarousel.html'
})
class WcmoCarouselComponent implements OnInit {

    carousels: CarouselItem[];
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.carousels = this.route.snapshot.data['carousel'];
        $('.carousel').carousel({
            fullWidth: true,
            indicators: true
        });
        this.autoPlay();
    }

    private autoPlay() {
        $('.carousel').carousel('next');
        setInterval(this.autoPlay, 6500);
    }



    constructImageUrl(image) {
        return '../../images/' + image;
    }
}

interface CarouselItem {
    image: string;
    title: string;
    link: string;
}

export { WcmoCarouselResolver, WcmoCarouselComponent };
