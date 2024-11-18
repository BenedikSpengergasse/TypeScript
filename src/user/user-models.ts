export interface Media {
  url: string;
  mimeType: string;
  size: number;
}

export interface Profile {
  interests: string[];
  location: string;
}

export interface Account {
  status: string;
  verification: boolean;
}

export interface User {
  id: string;
  username: string;
  age: number;
  createdAt: Date;
  avatar?: Media;
  profile: Profile;
  account: Account;
}
