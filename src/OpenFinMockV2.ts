export class OpenFinMockV2{

    static silentMode:boolean = false;

    static generateMethods(name:string,Klass:any){

        const staticMethods = Klass.staticMethods||[];
        const staticSyncMethods = Klass.staticSyncMethods||[];
        const instanceMethods = Klass.instanceMethods||[];
        const instanceSyncMethods = Klass.instanceSyncMethods||[];

        for (const method of staticMethods){
            if (Klass[method]){
                console.warn(`[OpenFinMock] Warning! Attempt to overwrite already implemented static methods:\`${name}.${method}\`. This method will not be overwritten. Remove this method from \`${name}.staticMethods\`.`);
                continue;
            }

            Klass[method] = async (...args:any[])=>{
                let argsMsg = '';

                if (args.length){
                    argsMsg = `This method also received the arguments: ${JSON.stringify(args,null,2)}`;
                }

                if (!OpenFinMockV2.silentMode){
                    console.info(`[OpenFinMock] Static method \`${name}.${method}\` not implemented. 
                        ${argsMsg} This method will not return anything, which will probably have unintended consequence.
                        Implement this method on the \`${name}\` class to return a value.               
                    `);
                }
            }
        }

        for (const method of staticSyncMethods){
            if (Klass[method]){
                console.warn(`[OpenFinMock] Warning! Attempt to overwrite already implemented static async methods:\`${name}.${method}\`. This method will not be overwritten. Remove this method from \`${name}.staticMethods\`.`);
                continue;
            }

            Klass[method] = (...args:any[])=>{
                let argsMsg = '';

                if (args.length){
                    argsMsg = `This method also received the arguments: ${JSON.stringify(args,null,2)}`;
                }

                if (args.length>1 && typeof args[args.length-2]=== 'function'){
                    args[args.length-2]();
                }

                if (!OpenFinMockV2.silentMode){
                    console.info(`[OpenFinMock] Static method \`${name}.${method}\` not implemented. 
                        ${argsMsg} This method will not return anything, which will probably have unintended consequence.
                        Implement this method on the \`${name}\` class to return a value.               
                    `);
                }
            }
        }

        for (const method of instanceMethods){
            if (Klass.prototype[method]){
                console.warn(`[OpenFinMock] Warning! Attemp to overwrite already implemented instance method: \`${name}#${method}\`.
                    This method will not be overwritten. Remove this method from \`${name}.instanceMethods\`.       
                `);
                continue;
            }

            Klass.prototype[method] = async (...args:any[]) => {
                let argsMsg = '';

                if (args.length){
                    argsMsg = `This method also received the arguments: ${JSON.stringify(args,null,2)}`;
                }

                if (!OpenFinMockV2.silentMode){
                    console.info(`[OpenFinMock] Instance method \`${name}.${method}\` not implemented. 
                        ${argsMsg} This method will not return anything, which will probably have unintended consequence.
                        Implement this method on the \`${name}\` class to return a value.               
                    `);
                }

            }
        }

        for (const method of instanceSyncMethods){
            if (Klass.prototype[method]){
                console.warn(`[OpenFinMock] Warning! Attemp to overwrite already implemented instance method: \`${name}#${method}\`.
                    This method will not be overwritten. Remove this method from \`${name}.instanceMethods\`.       
                `);
                continue;
            }

            Klass.prototype[method] = async (...args:any[]) => {
                let argsMsg = '';

                if (args.length){
                    argsMsg = `This method also received the arguments: ${JSON.stringify(args,null,2)}`;
                }

                if (args.length>1 && typeof args[args.length-2]=== 'function'){
                    args[args.length-2]();
                }

                if (!OpenFinMockV2.silentMode){
                    console.info(`[OpenFinMock] Instance method \`${name}.${method}\` not implemented. 
                        ${argsMsg} This method will not return anything, which will probably have unintended consequence.
                        Implement this method on the \`${name}\` class to return a value.               
                    `);
                }

            }
        }

        return Klass;

    }
}