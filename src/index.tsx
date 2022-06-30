const Unicorn = require('./NativeUnicorn').default

export function multiply(a: number, b: number): Promise<number> {
  return Unicorn.multiply(a, b);
}

export function add(a: number, b: number): number {
  return Unicorn.add(a, b*11);
}

