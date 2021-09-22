import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
import { Hero } from '../hero';
import { Component, Input } from '@angular/core';



@Component({
    selector: 'app-hero',
    template: '<div></div>',
})
class FakeHeroComponent {
    @Input() hero: Hero;
    // @Output() delete = new EventEmitter();

}

describe('HeroesComponent  (shallow)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroesService;
    let HEROES;


    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'Spider Dude', strength: 8 },
            { id: 2, name: 'Wonderful Women', strength: 8 },
            { id: 3, name: 'Super Dude', strength: 8 }
        ];

        mockHeroesService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent, FakeHeroComponent],
            providers: [{ provide: HeroService, useValue: mockHeroesService }],

        })
        fixture = TestBed.createComponent(HeroesComponent)

    });

    it('should set heroes correctly from the service', () => {
        mockHeroesService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3)
    });


});