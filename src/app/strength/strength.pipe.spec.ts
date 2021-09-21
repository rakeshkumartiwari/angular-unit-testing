import { StrengthPipe } from './strength.pipe'

describe('StrengthPipe', () => {
    let pipe = new StrengthPipe();

    it('should return weak when you pass 5', () => {
       let result =  pipe.transform(5);

       expect(result).toBe('5 (weak)');

    })

    it('should return strong when you pass 15', () => {
        let result =  pipe.transform(15);
 
        expect(result).toBe('15 (strong)');
 
     })
})