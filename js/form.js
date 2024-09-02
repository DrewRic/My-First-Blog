const blogForm = document.querySelector('#blogForm');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function(event) {
    event.preventDefault();
    const username = blogForm.querySelector('#username').value;
    const title = blogForm.querySelector('#title').value;
    const content = blogForm.querySelector('#content').value;

    if (username === '' || title === '' || content === '') {
                alert("Why won't you fill out the forms?"); 
                return;
    };

    const formData = {
        username: username,
        title: title,
        content: content
    };
    
    const formDataString = JSON.stringify(formData);

    localStorage.setItem('formData', formDataString);
    console.log('Form data has been saved to local storage.');

    var url = "./blog.html"
    window.location = url;

});

