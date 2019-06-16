import { Window } from './Window';

describe('Desktop::Window',()=>{

    let clazz:typeof Window;

    beforeEach(()=>{
        clazz = Window;
    });

    it('all unsupported static methods defined',()=>{
        expect(clazz.staticMethods).toMatchSnapshot();
    })

    it('all unsupported instance methods defined',()=>{
        expect(clazz.instanceMethods).toMatchSnapshot();
    })

});