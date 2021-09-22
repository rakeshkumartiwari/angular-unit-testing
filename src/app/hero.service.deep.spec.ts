import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';

describe('HeroService', () => {
    let mockMessageservice;
    let service: HeroService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        mockMessageservice = jasmine.createSpyObj(['add'])
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroService,{ provide: MessageService, useValue: mockMessageservice }]
        })

        service = TestBed.inject(HeroService)
        httpTestingController = TestBed.inject(HttpTestingController)
    });

    it('should call get with correct url', () => {
        service.getHero(4).subscribe();

       let req =  httpTestingController.expectOne('api/heroes/4');

       req.flush({id:4, name:'Super Dude', strength:8});

       expect(req.request.method).toBe('GET')

    })

});