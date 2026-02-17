import type { UserProfileProps, User } from "../types";

export const user: UserProfileProps = {
  username: 'Jane',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDICCyVRVweT6ND_ieZCgW52oEmw5FM7QP5h5rtctCAGjh7XeRnDSnc7GI9TefO_4HWLCoRMjT7ukosPgvZRm1wcgiBM8RRtBTKvCSD4P&s=10',
  info: 'Jane is a teacher',
  status: 'active',
};

export const usersArray: User[] = [
  { id: 1, username: 'milimili', email: 'mili@gmail.com', info: 'Whaterver...' },
  { id: 2, username: 'paul', email: 'paul@gmail.com', info: 'Whaterver...' },
];
