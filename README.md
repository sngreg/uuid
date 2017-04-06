# uuid
A very light weight Angular / Node module for generating a valid uuid4. One thing that differece about this is the last 11 characters of the UUID is the hextime stamp.

## Usage

### Angular

```
angular.module('yourModule', ['uuid']);

const generatedUUID = uuid.v4(); // generates a valid v4 uuid

const isValidUUID = uuid.validate(<uuid-to-validate>); // validates just if this is a valid v4 uuid

```

### Node

```
var uuid = require('uuid');

const generatedUUID = uuid.v4(); // generates a valid v4 uuid

const isValidUUID = uuid.validate(<uuid-to-validate>); // validates just if this is a valid v4 uuid

```
