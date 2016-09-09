/// <reference path='fourslash.ts'/>

////interface I {
////    x: number;
////}
////
////var anInterface: I;
////interface IG<T> {
////    x: T;
////}
////var aGenericInterface: IG<number>;
////
////class C<T> implements IG<T> {
////    x: T;
////}
////
////interface Foo<T> {
////    prim1: number;
////    prim2: string;
////    ofT: T;
////    ofFooNum: Foo<number>;
////    ofInterface: I;
////    ofIG4: { x: number }; 
////    ofIG6: { x: T };
////    ofC2: C<number>;
////    ofC4: C<{ x: T }>
////}
////
////var f: Foo<any>;
////var f2: Foo<number>;
////var f3: Foo<I>;
////var f4: Foo<{ x: number }>;
////var f5: Foo<Foo<number>>;
////
////// T is any
////var f_/*a1*/r1  = f.prim1;
////var f_/*a2*/r2  = f.prim2;
////var f_/*a3*/r3  = f.ofT; 
////var f_/*a4*/r5  = f.ofFooNum;
////var f_/*a5*/r8  = f.ofInterface;
////var f_/*a6*/r12 = f.ofIG4;
////var f_/*a7*/r14 = f.ofIG6; 
////var f_/*a8*/r18 = f.ofC2;
////var f_/*a9*/r20 = f.ofC4; 
////
////// T is number
////var f2_/*b1*/r1  = f2.prim1;
////var f2_/*b2*/r2  = f2.prim2;
////var f2_/*b3*/r3  = f2.ofT; 
////var f2_/*b4*/r5  = f2.ofFooNum; 
////var f2_/*b5*/r8  = f2.ofInterface;
////var f2_/*b6*/r12 = f2.ofIG4;
////var f2_/*b7*/r14 = f2.ofIG6; 
////var f2_/*b8*/r18 = f2.ofC2;
////var f2_/*b9*/r20 = f2.ofC4; 
////
////// T is I
////var f3_/*c1*/r1  = f3.prim1;
////var f3_/*c2*/r2  = f3.prim2;
////var f3_/*c3*/r3  = f3.ofT; 
////var f3_/*c4*/r5  = f3.ofFooNum;
////var f3_/*c5*/r8  = f3.ofInterface;
////var f3_/*c6*/r12 = f3.ofIG4;
////var f3_/*c7*/r14 = f3.ofIG6; 
////var f3_/*c8*/r18 = f3.ofC2;
////var f3_/*c9*/r20 = f3.ofC4;
////
////// T is {x: number}
////var f4_/*d1*/r1 =  f4.prim1;
////var f4_/*d2*/r2 =  f4.prim2;
////var f4_/*d3*/r3 =  f4.ofT;
////var f4_/*d4*/r5 =  f4.ofFooNum;
////var f4_/*d5*/r8 =  f4.ofInterface;
////var f4_/*d6*/r12 = f4.ofIG4;
////var f4_/*d7*/r14 = f4.ofIG6;
////var f4_/*d8*/r18 = f4.ofC2;
////var f4_/*d9*/r20 = f4.ofC4; 
////
////// T is Foo<number>
////var f5_/*e1*/r1  = f5.prim1;
////var f5_/*e2*/r2  = f5.prim2;
////var f5_/*e3*/r3  = f5.ofT; 
////var f5_/*e4*/r5  = f5.ofFooNum;
////var f5_/*e5*/r8  = f5.ofInterface;
////var f5_/*e6*/r12 = f5.ofIG4;
////var f5_/*e7*/r14 = f5.ofIG6; 
////var f5_/*e8*/r18 = f5.ofC2;
////var f5_/*e9*/r20 = f5.ofC4;

verify.numberOfErrorsInCurrentFile(0);

verify.quickInfoAt("a1", "var f_r1: number");
verify.quickInfoAt("a2", "var f_r2: string");
verify.quickInfoAt("a3", "var f_r3: any");
verify.quickInfoAt("a4", "var f_r5: Foo<number>");
verify.quickInfoAt("a5", "var f_r8: I");
verify.quickInfoAt("a6", "var f_r12: {\n    x: number;\n}");
verify.quickInfoAt("a7", "var f_r14: {\n    x: any;\n}");
verify.quickInfoAt("a8", "var f_r18: C<number>");
verify.quickInfoAt("a9", "var f_r20: C<{\n    x: any;\n}>");

verify.quickInfoAt("b1", "var f2_r1: number");
verify.quickInfoAt("b2", "var f2_r2: string");
verify.quickInfoAt("b3", "var f2_r3: number");
verify.quickInfoAt("b4", "var f2_r5: Foo<number>"); 
verify.quickInfoAt("b5", "var f2_r8: I");
verify.quickInfoAt("b6", "var f2_r12: {\n    x: number;\n}");
verify.quickInfoAt("b7", "var f2_r14: {\n    x: number;\n}");
verify.quickInfoAt("b8", "var f2_r18: C<number>");
verify.quickInfoAt("b9", "var f2_r20: C<{\n    x: number;\n}>");

verify.quickInfoAt("c1", "var f3_r1: number");
verify.quickInfoAt("c2", "var f3_r2: string");
verify.quickInfoAt("c3", "var f3_r3: I");
verify.quickInfoAt("c4", "var f3_r5: Foo<number>");
verify.quickInfoAt("c5", "var f3_r8: I");
verify.quickInfoAt("c6", "var f3_r12: {\n    x: number;\n}");
verify.quickInfoAt("c7", "var f3_r14: {\n    x: I;\n}");
verify.quickInfoAt("c8", "var f3_r18: C<number>");
verify.quickInfoAt("c9", "var f3_r20: C<{\n    x: I;\n}>");

verify.quickInfoAt("d1", "var f4_r1: number");
verify.quickInfoAt("d2", "var f4_r2: string");
verify.quickInfoAt("d3", "var f4_r3: {\n    x: number;\n}");
verify.quickInfoAt("d4", "var f4_r5: Foo<number>");
verify.quickInfoAt("d5", "var f4_r8: I");
verify.quickInfoAt("d6", "var f4_r12: {\n    x: number;\n}");
verify.quickInfoAt("d7", "var f4_r14: {\n    x: {\n        x: number;\n    };\n}");
verify.quickInfoAt("d8", "var f4_r18: C<number>");
verify.quickInfoAt("d9", "var f4_r20: C<{\n    x: {\n        x: number;\n    };\n}>");

verify.quickInfoAt("e1", "var f5_r1: number");
verify.quickInfoAt("e2", "var f5_r2: string");
verify.quickInfoAt("e3", "var f5_r3: Foo<number>");
verify.quickInfoAt("e4", "var f5_r5: Foo<number>");
verify.quickInfoAt("e5", "var f5_r8: I");
verify.quickInfoAt("e6", "var f5_r12: {\n    x: number;\n}");
verify.quickInfoAt("e7", "var f5_r14: {\n    x: Foo<number>;\n}");
verify.quickInfoAt("e8", "var f5_r18: C<number>");
verify.quickInfoAt("e9", "var f5_r20: C<{\n    x: Foo<number>;\n}>");
