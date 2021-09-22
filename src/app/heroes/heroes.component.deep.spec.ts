import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
import { Hero } from '../hero';
import { Component, Input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { By } from '@angular/platform-browser';


describe('HeroesComponent  (Deep)', () => {
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
            declarations: [HeroesComponent, HeroComponent],
            providers: [{ provide: HeroService, useValue: mockHeroesService }],
            schemas: [NO_ERRORS_SCHEMA]

        })
        fixture = TestBed.createComponent(HeroesComponent)

    });


    it('should render each hero as HeroComponent', () => {
        mockHeroesService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();
        let heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent))
        expect(heroComponentDEs.length).toBe(3)
        for (let index = 0; index < heroComponentDEs.length; index++) {
            expect(heroComponentDEs[index].componentInstance.hero.name).toBe(HEROES[index].name)

        }
    });


});