class User {
    id: number;
    name: string;
    password: string;

    constructor(id: number, name: string, password: string) {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    static fromJson(json: string): User {
        const obj = JSON.parse(json);
        if(obj.id === undefined || obj.name === undefined || obj.password === undefined) {
            throw TypeError("provided JSON does not contain all fields (id, name, password).");
        }
        return new User(obj.id, obj.name, obj.password);
    }
}

export default User;
