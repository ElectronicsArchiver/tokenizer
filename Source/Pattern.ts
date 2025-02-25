
/**
 *  Tokenizer Pattern
 */


export type PatternTester =
    ( text : string ) => string | undefined;


export type Pattern =
    | PatternTester [] | PatternTester
    | RegExp [] | RegExp
    | string [] | string ;
