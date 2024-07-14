export const homeFeed = [
    {
      id: 101,
      type: "tweet",
  
      user: "Rodney Diaz",
      userName: "@rodiaz",
      avatar: require("../assets/images/avatar/user1.jpg"),
  
      time: "1h",
      message:
        'Sometimes I see english words that make me smile - because they are clear "transpositions" of their latin/italian counterparts',
      comments: 1,
      retweets: 0,
      likes: 2
    },
    {
      id: 102,
      type: "retweet",
      from: "Wayne Spencer",
  
      user: "Tammy Warren",
      userName: "@tammy2",
      avatar: null,
  
      time: "2h",
      message:
        'Aqui les dejo el link a mi charla de ayer del #ReactWeekMedelin : "Some Video" youtube.com/watch?v=WC0Wkx #react #redux #RxJS',
      comments: 0,
      retweets: 3,
      likes: 6
    },
    {
      id: 103,
      type: "response",
      to: "@ryanflorence",
  
      user: "Jacqueline Hayes",
      userName: "@jacqyes68",
      avatar: require("../assets/images/avatar/user2.jpg"),
  
      time: "1h",
      message:
        "Hard work is all you need if you're a hunter gatherer, but you're not.\n\nYouneed to convince people around you that whatever thing it is that you want to happen is something that they want to happen too.",
      comments: 3,
      retweets: 6,
      likes: 55
    },
    {
      id: 104,
      type: "response",
      to: "@esablack58",
  
      user: "Wyatt Fleming",
      userName: "@attFleming",
      avatar: require("../assets/images/avatar/user3.jpg"),
  
      time: "32m",
      message: "How do you learn sales?",
      comments: 0,
      retweets: 0,
      likes: 0
    },
    {
      id: 105,
      type: "retweet",
      from: "Earl Baker",
  
      user: "Craig Griffin",
      userName: "@cgriffin",
      avatar: require("../assets/images/avatar/user4.jpg"),
  
      time: "22h",
      message: "I'm jumping on this AMA. Come keep me company.",
      comments: 2,
      retweets: 6,
      likes: 15
    },
    {
      id: 106,
      type: "responseTo",
  
      original: {
        type: null,
        user: "Josephine Gray",
        userName: null,
        avatar: require("../assets/images/avatar/user5.jpg"),
  
        time: "3h",
        message:
          "I need 7 more followers to get to 1000. If I get 1000 by end of day I will Venmo @Dandremonteiro $7.",
        comments: 5,
        retweets: 1,
        likes: 1
      },
  
      user: "Terry Davidson",
      userName: "@davidson",
      avatar: require("../assets/images/avatar/user6.jpg"),
  
      time: "1h",
      message: "I want @Dandremonteiro to pay you",
      comments: 1,
      retweets: 0,
      likes: 0
    }
  ];