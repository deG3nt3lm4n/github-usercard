import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
    `https://api.github.com/users/${githubName}`

*/

const url = 'https://api.github.com/users/'

axios.get(`${url}deG3nt3lm4n`)
  .then(res => {
    document.querySelector('.cards').appendChild(cardContent(res.data))
  })
  .catch(err => {
    console.log(err)

  })

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

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(friend => {
  axios.get(`${url}${friend}`)
    .then(res =>{
      document.querySelector('.cards').appendChild(cardContent(res.data))
    })
    .catch(err => {
      console.log(err)
    })
})

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

function cardContent(object){

  const card = document.createElement('div')
  const imageUser = document.createElement('img')

  const cardInfo = document.createElement('div')

  const userNameName = document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')

  const userProfile = document.createElement('p')
  const userProfileLink = document.createElement('a')

  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')


  card.classList.add('card')
  imageUser.src = object.avatar_url
  card.appendChild(imageUser)

  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)

  userNameName.classList.add('name')
  userNameName.textContent = object.name
  cardInfo.appendChild(userNameName)

  userName.classList.add('username')
  userName.textContent = object.login
  cardInfo.appendChild(userName)

  userLocation.textContent = `Location: ${object.location}`
  cardInfo.appendChild(userLocation)

  userProfile.textContent = 'Profile: '
  userProfileLink.textContent = object.html_url
  userProfileLink.setAttribute('href', object.html_url)
  userProfile.appendChild(userProfileLink)
  cardInfo.appendChild(userProfile)

  userFollowers.textContent = `Followers: ${object.followers}`
  cardInfo.appendChild(userFollowers)

  userFollowing.textContent = `Following: ${object.following}`
  cardInfo.appendChild(userFollowing)

  userBio.textContent = `Bio: ${object.bio}`
  cardInfo.appendChild(userBio)

  return card
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
