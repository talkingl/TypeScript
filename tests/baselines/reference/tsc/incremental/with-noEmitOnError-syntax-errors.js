Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/shared/types/db.ts]
export interface A {
    name: string;
}

//// [/src/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
;

//// [/src/src/other.ts]
console.log("hi");
export { }

//// [/src/tsconfig.json]
{
    "compilerOptions": {
        "outDir": "./dev-build",
        "noEmitOnError": true
    }
}




Output::
/lib/tsc --incremental -p src
[96msrc/src/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m


Found 1 error in src/src/main.ts[90m:4[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/shared/types/db.ts","/src/src/main.ts","/src/src/other.ts"]
Program options: {"outDir":"/src/dev-build","noEmitOnError":true,"incremental":true,"project":"/src","configFilePath":"/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/shared/types/db.ts (used version)
/src/src/main.ts (used version)
/src/src/other.ts (used version)


//// [/src/dev-build/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../shared/types/db.ts","../src/main.ts","../src/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-9621097780-export interface A {\r\n    name: string;\r\n}","2626879346-import { A } from \"../shared/types/db\";\r\nconst a = {\r\n    lastName: 'sdsd'\r\n;","11373096570-console.log(\"hi\");\r\nexport { }"],"options":{"noEmitOnError":true,"outDir":"./"},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3,4],"affectedFilesPendingEmit":[2,3,4]},"version":"FakeTSVersion"}

//// [/src/dev-build/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ],
    "fileNamesList": [
      [
        "../shared/types/db.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../shared/types/db.ts": {
        "version": "-9621097780-export interface A {\r\n    name: string;\r\n}",
        "signature": "-9621097780-export interface A {\r\n    name: string;\r\n}"
      },
      "../src/main.ts": {
        "version": "2626879346-import { A } from \"../shared/types/db\";\r\nconst a = {\r\n    lastName: 'sdsd'\r\n;",
        "signature": "2626879346-import { A } from \"../shared/types/db\";\r\nconst a = {\r\n    lastName: 'sdsd'\r\n;"
      },
      "../src/other.ts": {
        "version": "11373096570-console.log(\"hi\");\r\nexport { }",
        "signature": "11373096570-console.log(\"hi\");\r\nexport { }"
      }
    },
    "options": {
      "noEmitOnError": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/main.ts": [
        "../shared/types/db.ts"
      ]
    },
    "exportedModulesMap": {
      "../src/main.ts": [
        "../shared/types/db.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "../shared/types/db.ts",
        "Js"
      ],
      [
        "../src/main.ts",
        "Js"
      ],
      [
        "../src/other.ts",
        "Js"
      ]
    ]
  },
  "version": "FakeTSVersion",
  "size": 1029
}



Change:: no-change-run
Input::


Output::
/lib/tsc --incremental -p src
[96msrc/src/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m


Found 1 error in src/src/main.ts[90m:4[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/shared/types/db.ts","/src/src/main.ts","/src/src/other.ts"]
Program options: {"outDir":"/src/dev-build","noEmitOnError":true,"incremental":true,"project":"/src","configFilePath":"/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::




Change:: incremental-declaration-doesnt-change
Input::
//// [/src/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
};



Output::
/lib/tsc --incremental -p src
exitCode:: ExitStatus.Success
Program root files: ["/src/shared/types/db.ts","/src/src/main.ts","/src/src/other.ts"]
Program options: {"outDir":"/src/dev-build","noEmitOnError":true,"incremental":true,"project":"/src","configFilePath":"/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts

Semantic diagnostics in builder refreshed for::
/src/src/main.ts

Shape signatures in builder refreshed for::
/src/src/main.ts (computed .d.ts)


//// [/src/dev-build/shared/types/db.js]
"use strict";
exports.__esModule = true;


//// [/src/dev-build/src/main.js]
"use strict";
exports.__esModule = true;
var a = {
    lastName: 'sdsd'
};


//// [/src/dev-build/src/other.js]
"use strict";
exports.__esModule = true;
console.log("hi");


//// [/src/dev-build/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../shared/types/db.ts","../src/main.ts","../src/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-9621097780-export interface A {\r\n    name: string;\r\n}",{"version":"-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};","signature":"-4882119183-export {};\r\n"},"11373096570-console.log(\"hi\");\r\nexport { }"],"options":{"noEmitOnError":true,"outDir":"./"},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4]},"version":"FakeTSVersion"}

//// [/src/dev-build/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ],
    "fileNamesList": [
      [
        "../shared/types/db.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../shared/types/db.ts": {
        "version": "-9621097780-export interface A {\r\n    name: string;\r\n}",
        "signature": "-9621097780-export interface A {\r\n    name: string;\r\n}"
      },
      "../src/main.ts": {
        "original": {
          "version": "-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};",
          "signature": "-4882119183-export {};\r\n"
        },
        "version": "-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};",
        "signature": "-4882119183-export {};\r\n"
      },
      "../src/other.ts": {
        "version": "11373096570-console.log(\"hi\");\r\nexport { }",
        "signature": "11373096570-console.log(\"hi\");\r\nexport { }"
      }
    },
    "options": {
      "noEmitOnError": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/main.ts": [
        "../shared/types/db.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1038
}



Change:: no-change-run
Input::


Output::
/lib/tsc --incremental -p src
exitCode:: ExitStatus.Success
Program root files: ["/src/shared/types/db.ts","/src/src/main.ts","/src/src/other.ts"]
Program options: {"outDir":"/src/dev-build","noEmitOnError":true,"incremental":true,"project":"/src","configFilePath":"/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


