import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    username: 'DJ190502',
    name: 'Daniel Jesus Avila Aguiar',
    isFollowing: true
  },
  {
    username: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false,
  },
  {
    username: 'pheralb',
    name: 'Pablo H.',
    isFollowing: true,
  },
  {
    username: 'TMChein',
    name: 'Tomas',
    isFollowing: false,
  }
];
export function App() {
  const formatedUserName = (username) => <span>{`@${username}`}</span>;
  return (
    <section className="App">
      {
        users.map(({username, name, isFollowing}) => (
            <TwitterFollowCard 
            key={username}
            username={formatedUserName(username)} 
            initialIsFollowing={isFollowing} 
            photo={username}>
            <strong>{name}</strong>
            </TwitterFollowCard>
          ))
      }
    </section>
  );
}
