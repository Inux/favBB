import Connection from "./connection";

test('should return valid Connection', () => {
    let conn = new Connection(0, "lucerne", "zurich");
    expect(conn.id).toBe(0);
    expect(conn.from).toBe("lucerne");
    expect(conn.to).toBe("zurich");
});

// fromJson Tests

test('should return valid User from JSON', () => {
    let conn = Connection.fromJson('{"id":0,"from":"lucerne","to":"zurich"}');
    expect(conn.id).toBe(0);
    expect(conn.from).toBe("lucerne");
    expect(conn.to).toBe("zurich");
});

test('should throw expection because of missing id in JSON', () => {
    const f = () => {
        Connection.fromJson('{"from":"lucerne","to":"zurich"}');
    };
    expect(f).toThrow(TypeError("provided JSON does not contain all fields (id, from, to)."));
});

test('should throw expection because of missing from in JSON', () => {
    const f = () => {
        Connection.fromJson('{"id":0,"to":"zurich"}');
    };
    expect(f).toThrow(TypeError("provided JSON does not contain all fields (id, from, to)."));
});

test('should throw expection because of missing to in JSON', () => {
    const f = () => {
        Connection.fromJson('{"from":"lucerne","id":0}');
    };
    expect(f).toThrow(TypeError("provided JSON does not contain all fields (id, from, to)."));
});
