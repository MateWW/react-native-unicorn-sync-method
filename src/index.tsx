const Unicorn = require('./NativeUnicorn').default

export function multiply(a: number, b: number): Promise<number> {
  return Unicorn.multiply(a, b);
}
