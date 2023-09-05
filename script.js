const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#Messages-notifications');
const messages = document.querySelector('.messages');

//remove active class

const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}
//NOtification

menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='Notifications'){
            document.querySelector('.notifications-popup').
            style.display='none';
        }else{
            document.querySelector('.notifications-popup').
            style.display='block';
            document.querySelector('#Notifications .notification-count').style.display='none';

        }
    })
})

//messages
messagesNotification.addEventListener('click',() => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display ='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);

})
