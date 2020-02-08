import User from "./user";

test('should return valid User', () => {
    let user = new User(0, "name", "secret");
    expect(user.id).toBe(0);
    expect(user.name).toBe("name");
    expect(user.password).toBe("secret");
});

// fromJson Tests

test('should return valid User from JSON', () => {
    let user = User.fromJson('{"id":0,"name":"name","password":"secret"}');
    expect(user.id).toBe(0);
    expect(user.name).toBe("name");
    expect(user.password).toBe("secret");
});

test('should throw expection because of missing id in JSON', () => {
    const f = () => {
        User.fromJson('{"name":"name","password":"secret"}');
    };
    expect(f).toThrow(TypeError("provided JSON does not contain all fields (id, name, password)."));
});

test('should throw expection because of missing name in JSON', () => {
    const f = () => {
        User.fromJson('{"id":0,"password":"secret"}');
    };
    expect(f).toThrow(TypeError("provided JSON does not contain all fields (id, name, password)."));
});

test('should throw expection because of missing password in JSON', () => {
    const f = () => {
        User.fromJson('{"name":"name","id":0}');
    };
    expect(f).toThrow(TypeError("provided JSON does not contain all fields (id, name, password)."));
});
