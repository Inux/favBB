import User from "./user";

test('should return valid User', () => {
    let user = new User(0, "test");
    expect(user.id).toBe(0);
    expect(user.name).toBe("test");
});

test('should return valid User from JSON', () => {
    let user = User.fromJson('{"id":0,"name":"test"}');
    expect(user.id).toBe(0);
    expect(user.name).toBe("test");
});
