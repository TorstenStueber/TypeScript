// @target: ES6
declare function dec(): <T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T>;

class C {
    @dec ["1"]() { }
    @dec ["b"]() { }
}