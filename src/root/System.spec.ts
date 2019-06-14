import { System } from './System';

describe('Desktop::System',()=>{

    let clazz:typeof System;

    beforeEach(()=>{
        clazz = System;
    });

    it('all unsupported static methods defined',()=>{
        expect(clazz.staticMethods).toMatchSnapshot();
    })

    it('all unsupported instance methods defined',()=>{
        expect(clazz.instanceMethods).toMatchSnapshot();
    })

});