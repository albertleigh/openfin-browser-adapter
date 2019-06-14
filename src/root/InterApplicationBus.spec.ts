import { InterApplicationBus } from './InterApplicationBus';

describe('Desktop::InterApplicationBus',()=>{

    let clazz:typeof InterApplicationBus;

    beforeEach(()=>{
        clazz = InterApplicationBus;
    });

    it('all unsupported static methods defined',()=>{
        expect(clazz.staticMethods).toMatchSnapshot();
    })

    it('all unsupported instance methods defined',()=>{
        expect(clazz.instanceMethods).toMatchSnapshot();
    })

    it('Channel class',()=>{
        expect(clazz.Channel).toMatchSnapshot();
    })

});