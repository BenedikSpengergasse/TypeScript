export function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

export function add(a: number, b: number) {
  if (a < 0 && b < 0) {
    console.log("Parameters can't be negative");
  }
  return a + b;
}
