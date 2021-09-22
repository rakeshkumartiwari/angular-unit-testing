import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HeroComponent (Shallow)', () => {
    let fixture: ComponentFixture<HeroComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            imports:[RouterTestingModule]
        })
        fixture = TestBed.createComponent(HeroComponent)
    });



    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 3, name: 'Super Dude', strength: 8 };
        expect(fixture.componentInstance.hero.name).toBe('Super Dude');
    })



    it('should render the hero name in a anchor tag', () => {
        fixture.componentInstance.hero = { id: 3, name: 'Super Dude', strength: 8 };

        fixture.detectChanges();
        let dEA = fixture.debugElement.query(By.css('a')).nativeElement.textContent;
        expect(dEA).toContain('Super Dude')
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Super Dude')
    })

});
