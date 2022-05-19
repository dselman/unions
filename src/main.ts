import { IOfficial, IMonarch } from './org.acme.model';

interface Official extends IOfficial {
    $class: 'org.acme.model.Official';
}

interface Monarch extends IMonarch {
    $class: 'org.acme.model.Monarch';
}

type Boss = Official | Monarch;

export function assertExhaustive(
    value: never,
    message: string = 'Reached unexpected case in exhaustive switch'
): never {
    throw new Error(message);
}

const bossDescription = (boss: Boss): string => {
    switch (boss.$class) {
        case 'org.acme.model.Official':
            return `${boss.name}, ${boss.age} years old`;
        case 'org.acme.model.Monarch':
            return `${boss.title}, ${boss.name}`;
        default:
            assertExhaustive(boss);
    }
}

const monarch:Monarch = {
    $class: 'org.acme.model.Monarch',
    title: 'Queen Elizabeth II',
    name: 'Elizabeth Alexandra Mary Windsor',
}

const desc = bossDescription(monarch);
console.log(desc);

const official:Official = {
    $class: 'org.acme.model.Official',
    age: 49,
    name: 'Dan Selman',
}

const desc2 = bossDescription(official);
console.log(desc2);
