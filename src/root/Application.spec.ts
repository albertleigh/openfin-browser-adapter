import { Application } from './Application';

jest.useFakeTimers();

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

    it('getCurrent',()=>{
        expect(clazz.getCurrent()).toMatchSnapshot();
    })

    describe('instance method',()=>{

        let instance:Application = null;

        beforeEach(()=>{
            instance = new Application();
        })

        it('close succ',()=>{
            let succCb = jest.fn();
            expect(instance.terminate(true));
        })

        it('getChildWindows succ',()=>{
            let succCb = jest.fn();
            expect(instance.getChildWindows());
            jest.runAllTimers();
        })
    })

});