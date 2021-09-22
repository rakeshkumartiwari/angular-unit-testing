import { HeroComponent } from './hero.component'

describe('HeroComponent (Isolated)', () => {
    let component: HeroComponent;

    beforeEach(() => {
        component = new HeroComponent()
    })

    it('should have a correct hero', () => {
        component.hero = { id: 3, name: 'Super Dude', strength: 8 };

        expect(component.hero.name).toBe('Super Dude')
    })

})