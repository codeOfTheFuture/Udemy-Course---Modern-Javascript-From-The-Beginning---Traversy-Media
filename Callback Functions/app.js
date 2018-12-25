const posts = [
  {title: 'Post One', Body: 'This is post one'},
  {title: 'Post Two', Body: 'This is post two'}
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';

//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//       document.body.innerHTML = output;
//     });
//   }, 1000);
// }

// createPost({title: 'Post Three', Body: 'This is post three'});

// getPosts();


/////////////////////////////////////////////////


function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';

    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
      document.body.innerHTML = output;
    });
  }, 1000);
}

createPost({title: 'Post Three', Body: 'This is post three'}, getPosts);