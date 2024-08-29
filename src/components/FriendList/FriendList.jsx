import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends = [] }) {
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
