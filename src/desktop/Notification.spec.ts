import { Notification } from './Notification';

describe('Desktop::Notification',()=>{

    let clazz:typeof Notification;

    beforeEach(()=>{
        clazz = Notification;
    });

    it('all unsupported static methods defined',()=>{
        expect(clazz.staticMethods).toMatchSnapshot();
    })

    it('all unsupported instance methods defined',()=>{
        expect(clazz.instanceMethods).toMatchSnapshot();
    })

});