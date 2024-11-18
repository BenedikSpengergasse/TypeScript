"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_utils_1 = require("./user/user-utils");
const utils_1 = require("./utils");
(0, utils_1.greet)("World");
const users = [
    {
        id: "1",
        username: "Benedik",
        age: 19,
        createdAt: new Date(),
        profile: { interests: ["coding", "music"], location: "Vienna" },
        account: { status: "active", verification: true },
    },
    {
        id: "2",
        username: "user2",
        age: 22,
        createdAt: new Date(),
        profile: { interests: ["art", "sport"], location: "Barcelona" },
        account: { status: "inactive", verification: false },
    },
];
const media = { url: "avatar.jpg", mimeType: "image/jpeg", size: 500 };
users[0] = (0, user_utils_1.addMediaToUser)(users[0], media);
console.log("User in Berlin:", (0, user_utils_1.filterUsersByLocation)(users, "Vienna"));
console.log("Summe Alter:", (0, user_utils_1.calculateTotalAge)(users));
