function createContactPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';  // Clears previous content

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const para = document.createElement('p');
  para.textContent = '📍 Address: 123 Food Street, Delicious Town';

  contactDiv.appendChild(heading);
  contactDiv.appendChild(para);
  
  content.appendChild(contactDiv);
}

export default createContactPage;
