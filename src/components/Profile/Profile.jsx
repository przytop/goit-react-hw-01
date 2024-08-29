import PropTypes from "prop-types";
import css from "./Profile.module.css";

export default function Profile({
  name = "Unknown",
  tag = "Unknown",
  location = "Unknown",
  image = "",
  stats = { followers: 0, views: 0, likes: 0 },
}) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <img className={css.avatar} src={image} alt={`${name} avatar`} />
        <p className={css["text-bold"]}>{name}</p>
        <p className={css["text-grey"]}>@{tag}</p>
        <p className={css["text-grey"]}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css["stat-border"]}>
          <span className={css.text}>Followers</span>
          <span className={css["text-bold"]}>{stats.followers}</span>
        </li>
        <li className={css["stat-border"]}>
          <span className={css.text}>Views</span>
          <span className={css["text-bold"]}>{stats.views}</span>
        </li>
        <li className={css.stat}>
          <span className={css.text}>Likes</span>
          <span className={css["text-bold"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
