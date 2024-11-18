"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_utils_1 = require("../src/user/user-utils");
describe("User Utilities", () => {
    const users = [
        {
            id: "1",
            username: "john_doe",
            age: 30,
            createdAt: new Date(),
            profile: { interests: ["coding", "music"], location: "Berlin" },
            account: { status: "active", verification: true },
        },
        {
            id: "2",
            username: "jane_doe",
            age: 25,
            createdAt: new Date(),
            profile: { interests: ["art", "travel"], location: "Paris" },
            account: { status: "inactive", verification: false },
        },
    ];
    it("should add media to user if not already present", () => {
        const media = {
            url: "avatar.jpg",
            mimeType: "image/jpeg",
            size: 500,
        };
        const updatedUser = (0, user_utils_1.addMediaToUser)(users[0], media);
        expect(updatedUser.avatar).toEqual(media);
    });
    it("should filter users by location", () => {
        const berlinUsers = (0, user_utils_1.filterUsersByLocation)(users, "Berlin");
        expect(berlinUsers.length).toBe(1);
        expect(berlinUsers[0].username).toBe("john_doe");
    });
    it("should calculate the total age of users", () => {
        const totalAge = (0, user_utils_1.calculateTotalAge)(users);
        expect(totalAge).toBe(55);
    });
});
