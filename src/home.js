function createHomePage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant!';

  const para = document.createElement('p');
  para.textContent = 'Enjoy delicious food with a cozy ambiance.';

  const img = document.createElement('img');
  img.src = 'https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D';
  img.alt = 'Restaurant Image';

  homeDiv.appendChild(heading);
  homeDiv.appendChild(para);
  homeDiv.appendChild(img);

  content.appendChild(homeDiv);

}

export default createHomePage;