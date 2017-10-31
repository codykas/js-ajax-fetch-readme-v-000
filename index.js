const app = "I don't do much.";
const token = '321b5d12c038bfd474eedd60f496075bca6aebd7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
