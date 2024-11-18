import {
  addMediaToUser,
  filterUsersByLocation,
  calculateTotalAge,
} from "../src/user/user-utils";
import { User, Media } from "../src/user/user-models";

describe("User Utilities", () => {
  const users: User[] = [
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
    const media: Media = {
      url: "avatar.jpg",
      mimeType: "image/jpeg",
      size: 500,
    };
    const updatedUser = addMediaToUser(users[0], media);
    expect(updatedUser.avatar).toEqual(media);
  });

  it("should filter users by location", () => {
    const berlinUsers = filterUsersByLocation(users, "Berlin");
    expect(berlinUsers.length).toBe(1);
    expect(berlinUsers[0].username).toBe("john_doe");
  });

  it("should calculate the total age of users", () => {
    const totalAge = calculateTotalAge(users);
    expect(totalAge).toBe(55);
  });
});
