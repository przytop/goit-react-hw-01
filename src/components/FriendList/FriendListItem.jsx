import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
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
