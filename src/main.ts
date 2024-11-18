import { User } from "./user/user-models";
import {
  addMediaToUser,
  filterUsersByLocation,
  calculateTotalAge,
} from "./user/user-utils";
import { greet } from "./utils";

greet("World");

const users: User[] = [
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
users[0] = addMediaToUser(users[0], media);
console.log("User in Berlin:", filterUsersByLocation(users, "Vienna"));
console.log("Summe Alter:", calculateTotalAge(users));
