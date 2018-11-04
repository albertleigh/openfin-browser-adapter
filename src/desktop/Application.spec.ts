import { Application } from './Application';

describe('Desktop::Application',()=>{

    let clazz:typeof Application;

    beforeEach(()=>{
        clazz = Application;
    });

    it('all unsupported static methods defined',()=>{
        expect(clazz.staticMethods).toMatchSnapshot();
    })

    it('all unsupported instance methods defined',()=>{
        expect(clazz.instanceMethods).toMatchSnapshot();
    })

});