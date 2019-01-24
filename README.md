# Openfin browser adapter
[![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]


Openfin browser adapter is a set of mockup openfin apis in browser environment to assist openfin based app developing/testing.

* Written in typescript
* Support openfin api js v9.61.38.40

![](https://albertleigh.github.io/openfin-react-latest/img/screenshoot.gif)

## Installation

```text
    npm i openfin-browser-adapter 
    or 
    yarn add openfin-browser-adapter
```

## Usage
```javascript

    import { BrowserAdapter } from 'openfin-browser-adapter'
    
    // **************************************************************
    // check whether fin handler is defined or not
    // if not it means we are at browser environment,
    // thus use browser-adapter instead to mockup openfin js apis
    if(!window.fin){
        window.fin = new BrowserAdapter({
            finUuid:process.env.REACT_APP_FIN_UUID,     // fin app uuid injected via dotenv
            silentMode:false,                           // log function calls to console or not
        });
    }

```


## apis supported:

*The author is lazy and he won't complete this section till next release* 


[LICENSE]: ./LICENSE.md
[CHANGELOG]: ./CHANGELOG.md

[version-badge]: https://img.shields.io/badge/version-0.35.21-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
