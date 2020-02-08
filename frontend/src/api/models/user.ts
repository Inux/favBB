class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static fromJson(json: string): User {
        const obj = JSON.parse(json);
        if(obj.id === undefined || obj.name === undefined) {
            throw TypeError("provided JSON does not contain id and/or name.");
        }
        return new User(obj.id, obj.name);
    }
}

export default User;