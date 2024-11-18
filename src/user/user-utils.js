"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMediaToUser = addMediaToUser;
exports.filterUsersByLocation = filterUsersByLocation;
exports.calculateTotalAge = calculateTotalAge;
// Add avatar to the user if not already present
function addMediaToUser(user, media) {
    if (!user.avatar) {
        user.avatar = media;
    }
    return user;
}
// Filter users by location
function filterUsersByLocation(users, location) {
    return users.filter((user) => user.profile.location === location);
}
// Calculate the total age of users
function calculateTotalAge(users) {
    return users.reduce((total, user) => total + user.age, 0);
}
