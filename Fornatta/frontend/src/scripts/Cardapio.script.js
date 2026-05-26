document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            
            const targetCategory = button.getAttribute('data-category');
            
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-item-category');

                if (targetCategory === 'todos' || itemCategory === targetCategory) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});