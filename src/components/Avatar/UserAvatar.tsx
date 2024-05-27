import { Avatar, AvatarGroup } from 'flowbite-react';

export function UserAvatar() {
  return (
    <div className="flex flex-wrap gap-2">
      <AvatarGroup>
        <Avatar
          img="https://flowbite-react.com/images/people/profile-picture-1.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://flowbite-react.com/images/people/profile-picture-2.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://flowbite-react.com/images/people/profile-picture-3.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://flowbite-react.com/images/people/profile-picture-5.jpg"
          rounded
          stacked
        />
      </AvatarGroup>
    </div>
  );
}
