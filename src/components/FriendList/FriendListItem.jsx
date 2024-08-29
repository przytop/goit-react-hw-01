import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  avatar = "",
  name = "Unknown",
  isOnline = false,
}) {
  return (
    <div className={css.items}>
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={`${isOnline ? css["status-online"] : css["status-offline"]}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
