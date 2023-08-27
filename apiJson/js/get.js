const userData = "https://jsonplaceholder.typicode.com/users";
function displayData() {
  fetch(userData)
    .then((res) => res.json())
    .then((data) => displayUser(data));
}
function displayUser(users) {
  const ul = document.getElementById("user-list");

  // display by for of loop
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.username;
    ul.appendChild(li);
  }

  /* // display by mapping
  users.map((user) => {
    const li = document.createElement("li");
    li.innerText = user.username;
    ul.appendChild(li);
  }); */
}

const postData = "https://jsonplaceholder.typicode.com/posts";
function getPostData() {
  fetch(postData)
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
function displayPost(posts) {
  const div = document.getElementById("post-list");

  /* // display by for of loop
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `
        <h3>User: ${post.id}</h3>
        <p>Title:${post.title}</p>
        <p>Description:${post.body}</p>
    `;
    div.appendChild(postDiv);
  } */

  // display by mapping
  posts.map((post) => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `
        <h3>User: ${post.id}</h3>
        <p>Title:${post.title}</p>
        <p>Description:${post.body}</p>
    `;
    div.appendChild(postDiv);
  });
}
