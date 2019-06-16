import mockConsole from 'jest-mock-console';

import { BaseApiClass } from '../root/Base';
import { OpenFinMockV2 } from '../OpenFinMockV2';

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

        const TargetClz = OpenFinMockV2.generateMethods('testClz',SampleClass);

        TargetClz.staticMethodCalled(()=>{},()=>{});

        expect(TargetClz).toMatchSnapshot();
        expect(console.warn).toMatchSnapshot();

        const instance = new TargetClz();

        instance.instanceMethodCalled(()=>{},()=>{});

        expect(console.info).toMatchSnapshot();

    })

})