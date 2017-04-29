# test

[![Greenkeeper badge](https://badges.greenkeeper.io/StefH/angular-test.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/StefH/test.svg?branch=master)](https://travis-ci.org/StefH/test)
[![codecov](https://codecov.io/gh/StefH/test/branch/master/graph/badge.svg)](https://codecov.io/gh/StefH/test)
[![npm version](https://badge.fury.io/js/test.svg)](http://badge.fury.io/js/test)
[![devDependency Status](https://david-dm.org/StefH/test/dev-status.svg)](https://david-dm.org/StefH/test?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/StefH/test.svg)](https://github.com/StefH/test/issues)
[![GitHub stars](https://img.shields.io/github/stars/StefH/test.svg)](https://github.com/StefH/test/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StefH/test/master/LICENSE)

## Demo
https://StefH.github.io/test/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

test

## Installation

Install through npm:
```
npm install --save test
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { TestModule } from 'test';

@NgModule({
  imports: [
    TestModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/StefH/test/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/test/bundles/test.umd.js"></script>
<script>
    // everything is exported test namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://StefH.github.io/test/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT
