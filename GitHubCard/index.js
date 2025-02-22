import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/salvare736")
  .then(res => {
    console.log("RESPONSE \n \n", res);
    console.log("res.data \n \n", res.data);
    const userCard = cardMaker(res.data);
    cards.append(userCard);
  })
  .catch(err => {
    debugger;
  })
  .finally(() => {
    console.log('Done!');
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards');

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['jstewart0788', 'danjirosama', 'NWKendall', 'ahmedseragcodes', 'briabytes'];

followersArray.forEach(entry => {
  axios
  .get(`https://api.github.com/users/${entry}`)
  .then(res => {
    // console.log("RESPONSE \n \n", res);
    // console.log("res.data \n \n", res.data);
    const userCard = cardMaker(res.data);
    cards.append(userCard);
  })
  .catch(err => {
    debugger;
  })
  .finally(() => {
    console.log('Done!');
  });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(object){

  const card = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userRealName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userRealName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  userRealName.classList.add('name');
  userName.classList.add('username');

  cardImage.src = object.avatar_url;
  userRealName.textContent = object.name;
  userName.textContent = object.login;
  userLocation.textContent = `Location: ${object.location}`;
  userProfile.innerHTML = `Profile: <a href=${object.html_url}>${object.html_url}<a/>`;
  userFollowers.textContent = `Followers: ${object.followers}`;
  userFollowing.textContent = `Following: ${object.following}`;
  userBio.textContent = `Bio: ${object.bio}`;

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
