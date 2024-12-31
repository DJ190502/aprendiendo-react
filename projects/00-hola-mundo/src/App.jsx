import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const formatedUserName = (username) => <span>{`@${username}`}</span>
  return (
    <section className="App">
      <TwitterFollowCard
        formatedUserName={formatedUserName("DJ190502")}
        name="Daniel Jesus Avila Aguiar"
        photo="DJ190502"
        isFollowing
      />
      <TwitterFollowCard
        formatedUserName={formatedUserName("Eduardo1306")}
        name="Eduardo"
        photo="Eduardo1306"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatedUserName={formatedUserName("Dubrocq")}
        name="Dubrocq"
        photo="Dubrocq"
        isFollowing
      />
      
    </section>
  )
}
