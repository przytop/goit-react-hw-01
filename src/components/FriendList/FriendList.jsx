import css from "./FriendList.module.css"
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li className={css.card} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
