import User from "../entities/User";

const BASE_URL = 'https://randomuser.me/api/?results=15';

export class UserService {
    search() {
        return fetch(BASE_URL)
            .then(res => res.json())
            .then(({ results }) => results.map(user => new User(user)))
    }
}
