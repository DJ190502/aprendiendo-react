import { useState } from "react";
import "./App.css";
//Podemos poner parametros para cuando no se pasa ningun parametro
export function TwitterFollowCard({ formatedUserName, photo, username, name}) {
  const [isFollowing, setIsFollowing] = useState(false)

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
          <strong className="name-tw-followCard">{name}</strong>
          <span className="user-tw-followCard">{formatedUserName}</span>
        </div>
      </header>
      <aside className="aside-tw-followCard">
       <button className={buttonClassName} onClick={handleClick}>
        <span className="tw">{follow}</span>
        <span>Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
