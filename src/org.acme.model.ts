/* eslint-disable @typescript-eslint/no-empty-interface */
// Generated code for namespace: org.acme.model

// imports
import {IConcept} from './concerto';

// interfaces
export interface IPerson extends IConcept {
   name: string;
}

export interface IOfficial extends IPerson {
   age: number;
}

export interface IMonarch extends IPerson {
   title: string;
}

