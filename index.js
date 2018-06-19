let main = () => {
  //  Event
  onEvent();
}
let onEvent = () =>{
  //  Compose Tweet
  let composedTweet = composeTweet();
  //  Post Tweet
  tweetIt(composedTweet);
}
let composeTweet = () =>{
  let fullStatus = "I'm a tweet!";
  let tweet = {
    status: fullStatus
  }
  return {tweet}
}
let tweetIt = (tweet) => {
  console.log(">  Tweeting");
  console.log(tweet);
}

main();