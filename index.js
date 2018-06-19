let main = () => {
  //  Event
  onEvent();
}

async function onEvent() {
  //  This will wait until a tweet is composed
  await composeTweet().then(tweet => {
    tweetIt(tweet);
  }).catch(err => {
    //  Some Error 
    console.log(err);
  });

  console.log("onEvent Finished.");
}

async function composeTweet() {
  console.log(">  Composing Tweet");
  //  Get all data to create a finished Status message
  let finishedStatus = "I'm a tweet!";

  //  Compose Tweet
  let tweet = {
    status: finishedStatus
  }
  return await tweet;
}

let tweetIt = (tweet) => {
  console.log(">  Tweeting");
  console.log(tweet);
}

main();