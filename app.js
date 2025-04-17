

let Username = document.getElementById("Username")
let div = document.getElementById("div")


function fatch() {
    axios(`https://api.github.com/users/${Username.value}`)
    .then((res) => {
        let data = res.data;
        div.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar" width="100" /> <br>
        <h3>${data.name || data.login}</h3> <br> 
          <p><strong>Username:</strong> ${data.login}</p> <br> 
          <p><strong>Bio:</strong> ${data.bio || 'N/A'}</p> <br> 
          <p><strong>Location:</strong> ${data.location || 'N/A'}</p> <br>
          <p><strong>Public Repos:</strong> ${data.public_repos}</p> <br>
          <p><a href="${data.html_url}" class="view-profile-btn" target="_blank">View Profile</a></p>
          `;
          
        })
        .catch((err) => {
            div.innerHTML = `<p style="color: red;">User not found or error occurred.</p>`;
        });
        
        Username.value =""
    }
    