function onClick(element) {
    var projectItem = element.closest('.project-item');
    var imgSrc = element.src;
    var title = projectItem.querySelector('.project-title').innerText;
    var description = projectItem.querySelector('.project-description').innerText;
    var liveUrl = projectItem.getAttribute('data-live');
    var codeUrl = projectItem.getAttribute('data-code');

    document.getElementById("img01").src = imgSrc;
    document.getElementById("modal01").style.display = "block";
    document.getElementById("caption").innerHTML = title;

    // Update project details
    document.getElementById("project-title").innerHTML = title;
    document.getElementById("project-description").innerHTML = description;
    document.getElementById("live-button").setAttribute('href', liveUrl);
    document.getElementById("code-button").setAttribute('href', codeUrl);

    var projectDetails = document.getElementById('project-details');
    projectDetails.classList.remove('w3-hide');
}

// Function to handle clicks on "Live" and "Code" buttons
document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('live-button')) {
        var liveUrl = target.getAttribute('href');
        window.open(liveUrl, '_blank');
    } else if (target.classList.contains('code-button')) {
        var codeUrl = target.getAttribute('href');
        window.open(codeUrl, '_blank');
    }
});

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}