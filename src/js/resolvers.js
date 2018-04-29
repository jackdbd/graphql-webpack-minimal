import fetch from "node-fetch";

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

async function getMessage() {
  try {
    const response = await fetch(
      "http://fortunecookieapi.herokuapp.com/v1/cookie"
    );
    // console.log(`RESPONSE: ${response}`)
    const body = await response.json();
    return body[0].fortune.message;
  } catch (err) {
    console.log(err);
  }
}

const resolvers = {
  Query: {
    books: () => books,

    // promises
    // getFortuneCookie: () => {
    //   const promise = fetch("http://fortunecookieapi.herokuapp.com/v1/cookie");
    //   return promise
    //     .then(response => {
    //       // another promise
    //       const prom = response.json()
    //       return prom;
    //     })
    //     .then(response => {
    //       // console.log(response);
    //       return response[0].fortune.message;
    //     });
    // }

    // async/await
    getFortuneCookie: () => {
      const message = getMessage();
      return message;
    }
  }
};

export default resolvers;
