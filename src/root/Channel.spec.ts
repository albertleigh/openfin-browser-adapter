import { Channel } from './Channel';

describe('Desktop::Channel',()=>{

    let clazz:typeof Channel

    beforeEach(()=>{
        clazz = Channel;
    })

    it('all unsupported static methods defined',()=>{
        expect(clazz.staticMethods).toMatchSnapshot();
    })

    it('all unsupported instance methods defined',()=>{
        expect(clazz.instanceMethods).toMatchSnapshot();
    })

    it('create',async ()=>{
        expect(await clazz.create()).toMatchSnapshot();
    })

    it('connect',async ()=>{
        expect(await clazz.connect()).toMatchSnapshot();
    })

})