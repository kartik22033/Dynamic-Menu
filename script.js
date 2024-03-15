window.addEventListener('resize', adjustMenu);

function adjustMenu() {
  const mainMenu = document.getElementById('main-menu-list');
  const moreMenu = document.getElementById('more-menu-list');
  const menuItems = mainMenu.querySelectorAll('li');
  
  if (window.innerWidth < 768) {
    const lastItem = menuItems[menuItems.length - 1];
    const lastItemRect = lastItem.getBoundingClientRect();
    if (lastItemRect.right > window.innerWidth) {
      mainMenu.removeChild(lastItem);
      moreMenu.appendChild(lastItem);
      moreMenu.classList.remove('hidden');
    }
  } else {
    const moreItems = moreMenu.querySelectorAll('li');
    const firstHiddenItem = moreItems[0];
    if (firstHiddenItem) {
      mainMenu.appendChild(firstHiddenItem);
    }
    if (moreMenu.children.length === 0) {
      moreMenu.classList.add('hidden');
    }
  }
}

adjustMenu();