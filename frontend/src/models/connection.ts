class Connection {
    id: number;
    from: string;
    to: string;

    constructor(id: number, from: string, to: string) {
        this.id = id;
        this.from = from;
        this.to = to;
    }

    static fromJson(json: string): Connection {
        const obj = JSON.parse(json);
        if(obj.id === undefined || obj.from === undefined || obj.to === undefined) {
            throw TypeError("provided JSON does not contain all fields (id, from, to).");
        }
        return new Connection(obj.id, obj.from, obj.to);
    }
}

export default Connection;
