import mockConsole from 'jest-mock-console';

import { BaseApiClass } from '../desktop/Base';
import { OpenFinMock } from '../OpenFinMock';

describe('OpenFinMock',()=>{

    let restoreConsole:Function = null;

    beforeEach(()=>{
        restoreConsole = mockConsole();
    })

    afterEach(()=>{
        restoreConsole()
    })

    it('silentMode off',()=>{

        class SampleClass extends BaseApiClass{

            static staticMethods:string[]=[
                'staticMethod1',
                'staticMethod2',
                'staticMethodImpl',
                'staticMethodCalled',
            ];

            static instanceMethods :string[]=[
                'instanceMethod1',
                'instanceMethod2',
                'instanceMethod3',
                'instanceMethodImpl',
                'instanceMethodCalled',
            ];

            static staticMethodImpl(){

            }

            instanceMethodImpl(){

            }

        }

        const TargetClz = OpenFinMock.generateMethods('testClz',SampleClass);

        TargetClz.staticMethodCalled(()=>{},()=>{});

        expect(TargetClz).toMatchSnapshot();
        expect(console.warn).toMatchSnapshot();

        const instance = new TargetClz();

        instance.instanceMethodCalled(()=>{},()=>{});

        expect(console.info).toMatchSnapshot();

    })

})