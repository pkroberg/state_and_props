import React from "react";
//Import Components
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    { name: "Parker-", tweet: "This is a tweet" },
    { name: "David-", tweet: "This is a tweet" },
    { name: "John-", tweet: "This is a tweet" },
  ];
  return (
    <section>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </section>
  );
};

export default Tweets;
