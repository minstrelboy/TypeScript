/// <reference path='fourslash.ts'/>

////interface Collection<T, U> {
////    length: number;
////    add(x: T, y: U): void ;
////    remove(x: T, y: U): boolean;
////}
////}
////interface Combinators {
////    map<T, U, V>(c: Collection<T, U>, f: (x: T, y: U) => V): Collection<T, V>;
////    map<T, U>(c: Collection<T, U>, f: (x: T, y: U) => any): Collection<any, any>;
////}
////}
////class A {
////    foo<T>(): T { return null; }
////}
////}
////class B<T> {
////    foo(x: T): T { return null; }
////}
////}
////var c1: Collection<any, any>;
////var c2: Collection<number, string>;
////var c3: Collection<Collection<number, number>, string>;
////var c4: Collection<number, A>;
////var c5: Collection<number, B<any>>;
////}
////var _: Combinators;
////// param help on open paren for arg 2 should show 'number' not T or 'any'
////// x should be contextually typed to number
////var rf1 = (x: number, y: string) => { return x.toFixed() };
////var rf2 = (x: Collection<number, number>, y: string) => { return x.length };
////var rf3 = (x: number, y: A) => { return y.foo() };
////}
////var /*9*/r1a  = _.map/*1c*/(c2, (/*1a*/x, /*1b*/y) => { return x.toFixed() });
////var /*10*/r1b = _.map(c2, rf1);
////}
////var /*11*/r2a = _.map(c3, (/*2a*/x, /*2b*/y) => { return x.length });
////var /*12*/r2b = _.map(c3, rf2);
////}
////var /*13*/r3a = _.map(c4, (/*3a*/x, /*3b*/y) => { return y.foo() });
////var /*14*/r3b = _.map(c4, rf3);
////}
////var /*15*/r4a = _.map(c5, (/*4a*/x, /*4b*/y) => { return y.foo() });
////}
////var /*17*/r5a = _.map<number, string, Date>(c2, /*17error1*/(/*5a*/x, /*5b*/y) => { return x.toFixed() }/*17error2*/); 
////var rf1b = (x: number, y: string) => { return new Date() };
////var /*18*/r5b = _.map<number, string, Date>(c2, rf1b);
////
////var /*19*/r6a = _.map<Collection<number, number>, string, Date>(c3, (/*6a*/x,/*6b*/y) => { return new Date(); });
////var rf2b = (x: Collection<number, number>, y: string) => { return new Date(); };
////var /*20*/r6b = _.map<Collection<number, number>, string, Date>(c3, rf2b);
////
////var /*21*/r7a = _.map<number, A, string>(c4, /*21error1*/(/*7a*/x,/*7b*/y) => { return y.foo() }/*21error2*/);
////var /*22*/r7b = _.map<number, A, string>(c4, /*22error1*/rf3/*22error2*/);
////
////var /*23*/r8a = _.map<number, /*error1*/B/*error2*/, string>(c5, (/*8a*/x,/*8b*/y) => { return y.foo() }); 

verify.quickInfoAt("2a", "(parameter) x: Collection<number, number>");
verify.quickInfoAt("2b", "(parameter) y: string");
verify.quickInfoAt("3a", "(parameter) x: number");
verify.quickInfoAt("3b", "(parameter) y: A");
verify.quickInfoAt("4a", "(parameter) x: number");
verify.quickInfoAt("4b", "(parameter) y: B<any>");

verify.quickInfoAt("5a", "(parameter) x: number");
verify.quickInfoAt("5b", "(parameter) y: string");

verify.quickInfoAt("6a", "(parameter) x: Collection<number, number>");
verify.quickInfoAt("6b", "(parameter) y: string");

verify.quickInfoAt("7a", "(parameter) x: number");
verify.quickInfoAt("7b", "(parameter) y: A");

verify.quickInfoAt("8a", "(parameter) x: number");
verify.quickInfoAt("8b", "(parameter) y: any"); // Specialized to any because no type argument was specified

verify.quickInfoAt("9", "var r1a: Collection<number, string>");
verify.quickInfoAt("10", "var r1b: Collection<number, string>");
verify.quickInfoAt("11", "var r2a: Collection<Collection<number, number>, number>");
verify.quickInfoAt("12", "var r2b: Collection<Collection<number, number>, number>");
verify.quickInfoAt("13", "var r3a: Collection<number, {}>");
verify.quickInfoAt("14", "var r3b: Collection<number, {}>");
verify.quickInfoAt("15", "var r4a: Collection<number, any>");

verify.quickInfoAt("17", "var r5a: Collection<number, Date>");

verify.quickInfoAt("18", "var r5b: Collection<number, Date>");

verify.quickInfoAt("19", "var r6a: Collection<Collection<number, number>, Date>");

verify.quickInfoAt("20", "var r6b: Collection<Collection<number, number>, Date>");

verify.quickInfoAt("21", "var r7a: Collection<number, string>");

verify.quickInfoAt("22", "var r7b: Collection<number, string>");

verify.quickInfoAt("23", "var r8a: Collection<number, string>");

verify.errorExistsBetweenMarkers('error1', 'error2');
verify.errorExistsBetweenMarkers('17error1', '17error2');
verify.errorExistsBetweenMarkers('21error1', '21error2');
verify.errorExistsBetweenMarkers('22error1', '22error2');