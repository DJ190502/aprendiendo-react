import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const addAt = (username) => `@${username}`
  return (
    <>
      <TwitterFollowCard
        addAt={addAt}
        username="DJ190502"
        name="Daniel Jesus Avila Aguiar"
        photo="DJ190502"
        isFollowing
      />
      <TwitterFollowCard
        addAt={addAt}
        username="Eduardo1306"
        name="Eduardo"
        photo="Eduardo1306"
        isFollowing={false}
      />
      <TwitterFollowCard
        addAt={addAt}
        username="Dubrocq"
        name="Dubrocq"
        photo="Dubrocq"
        isFollowing
      />
      
    </>
  );
}
