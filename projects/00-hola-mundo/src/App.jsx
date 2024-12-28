import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <>
      <TwitterFollowCard
        username="DJ190502"
        name="Daniel Jesus Avila Aguiar"
        photo="DJ190502"
        isFollowing
      />
      <TwitterFollowCard
        username="Eduardo1306"
        name="Eduardo"
        photo="Eduardo1306"
        isFollowing={false}
      />
      <TwitterFollowCard
        username="Dubrocq"
        name="Dubrocq"
        photo="Dubrocq"
        isFollowing
      />
      
    </>
  );
}
