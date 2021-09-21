import { MessageService } from './message.service';

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    })

    it('should have no message to start', () => {

        let result = service.messages.length
        expect(result).toBe(0);
    })

    it('should add a message while add is called', () => {

        service.add('first message');
        expect(service.messages.length).toBe(1);
        expect(service.messages[0]).toBe('first message');
    })
})