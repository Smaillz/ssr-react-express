import { List } from 'immutable';

export enum Gender {
    MALE='MALE',
    FEMALE='FEMALE'
}

export class User {
    private id: number;
    private login: string;
    private passwd: string;
    private gender: Gender;
    private firstName: string;
    private lastName: string;
    private age: string;

    constructor(user) {
        this.id = user.id;
        this.login= user.login;
        this.passwd = user.passwd;
        this.gender = user.gender;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
    }
}

const sampleUserList: User[] = [
    new User({
        id: 1,
        login: 'user',
        passwd: '123',
        gender: Gender.MALE,
        firstName: 'Egor',
        lastName: 'Anishchanka',
        age: "24"
    }),
    new User({
        id: 2,
        login: 'olol',
        passwd: 'olol',
        gender: Gender.FEMALE,
        firstName: 'Olga',
        lastName: 'Losenok',
        age: "23"
    })
];

export const userList = List<User>(sampleUserList);