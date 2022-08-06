// @flow
declare module "@benchristel/taste" {
    declare type Predicate = (...args: Array<any>) => boolean
    declare opaque type Tests
    declare opaque type TestResults

    declare export function test(
        title: string,
        scenarios: {[string]: () => mixed},
    ): mixed

    declare export function expect(
        actual: any,
        Predicate,
        ...expected: Array<any>
    ): mixed

    declare export function is(any): (any) => boolean
    declare export function is(any, any): boolean
    declare export function equals(any): (any) => boolean
    declare export function equals(any, any): boolean
    declare export function which(Predicate): any

    declare export function getAllTests(): Tests
    declare export function runTests(Tests): Promise<TestResults>
    declare export function formatTestResultsAsText(TestResults): string
}
