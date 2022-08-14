const username: string = 'Juanlu';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 3);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const juanlu = new Person(30, 'Fragoso');
