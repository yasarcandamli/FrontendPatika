const name = 'John';
const surname = 'Doe';
const age = 27;

export const fullname = name + ' ' + surname; 

export function sayHi() {
    console.log('Merhaba ' + name);
}

export default {
    name,
    surname,
    age,
}
