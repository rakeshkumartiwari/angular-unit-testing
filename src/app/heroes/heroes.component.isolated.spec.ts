import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroesComponent } from './heroes.component'

describe('HeroesComponent (Isolated)', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'Spider Dude', strength: 8 },
            { id: 2, name: 'Wonderful Women', strength: 8 },
            { id: 3, name: 'Super Dude', strength: 8 }
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {
        it('shoul remove the indecated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2)
        })
    })

})