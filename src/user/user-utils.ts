import { User, Media } from "./user-models";

// Add avatar to the user if not already present
export function addMediaToUser(user: User, media: Media): User {
  if (!user.avatar) {
    user.avatar = media;
  }
  return user;
}

// Filter users by location
export function filterUsersByLocation(users: User[], location: string): User[] {
  return users.filter((user) => user.profile.location === location);
}

// Calculate the total age of users
export function calculateTotalAge(users: User[]): number {
  return users.reduce((total, user) => total + user.age, 0);
}
