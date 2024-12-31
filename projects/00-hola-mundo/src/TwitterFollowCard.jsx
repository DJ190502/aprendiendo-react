import { useState } from "react";
import "./App.css";
//Podemos poner parametros para cuando no se pasa ningun parametro
export function TwitterFollowCard({ children, photo, username, name, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const follow = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'btn-tw-followCard is-following' : 'btn-tw-followCard'

  const handleClick = () => {setIsFollowing(!isFollowing)} //Cambia el valor del boton
  return (
    <article className="tw-followCard">
      <header className="hd-tw-followCard">
        <img
          className="avatar-tw-followCard"
          alt="Avatar"
          src={`https://unavatar.io/github/${photo}`}
        />
        <div className="div-tw-followCard">
          {children}
          <span className="user-tw-followCard">{username}</span>
        </div>
      </header>
      <aside className="aside-tw-followCard">
       <button className={buttonClassName} onClick={handleClick}>
        <span className="tw-followCard-follow">{follow}</span>
        <span className="tw-followCard-stopfollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
