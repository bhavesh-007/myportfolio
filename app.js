const link=document.querySelector('.link');
link.array.forEach(link => {
    link.addEventListner('click', () => {
        link.forEach(ele = ele.classList.remove('active'));
        link.classList.add('active');
    })
    
});