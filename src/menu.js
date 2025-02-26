function createMenuPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';


  const item1 = document.createElement('p');
    item1.textContent = '🍕 Pizza - $12';

    const item2 = document.createElement('p');
    item2.textContent = '🍔 Burger - $8';

    menuDiv.appendChild(heading);
    menuDiv.appendChild(item1);
    menuDiv.appendChild(item2);
    
    content.appendChild(menuDiv);
}

export default createMenuPage;