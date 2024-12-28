import "./App.css";
export function TwitterFollowCard({ photo, username, name, isFollowing }) {
  const addAt = (username) => `@${username}`
  return (
    <article className="tw-followCard">
      <header className="hd-tw-followCard">
        <img
          className="avatar-tw-followCard"
          alt="Avatar"
          src={`https://unavatar.io/github/${photo}`}
        />
        <div className="div-tw-followCard">
          <strong className="name-tw-followCard">{name}</strong>
          <span className="user-tw-followCard">{addAt(username)}</span>
        </div>
      </header>
      <aside className="aside-tw-followCard">
        {isFollowing ? <button className="lk-btn-tw-followCard">Seguido</button> 
        : <button className="lk-btn-tw-followCard">Seguir</button>}
      </aside>
    </article>
  );
}
