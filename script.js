/* eslint-disable no-unused-vars */
const onClick = (element, isViewMore = false) => {
  let projectItem;
  if (isViewMore) {
    projectItem = element.closest('.project-item');
  } else {
    projectItem = element.closest('.project-item');
  }

  const imgSrc = projectItem.querySelector('img').src;
  const title = projectItem.querySelector('.project-title').innerText;
  const description = projectItem.querySelector('.project-description').innerText;
  const liveUrl = projectItem.getAttribute('data-live');
  const codeUrl = projectItem.getAttribute('data-code');

  document.getElementById('img01').src = imgSrc;
  document.getElementById('modal01').style.display = 'block';
  document.getElementById('caption').innerHTML = title;

  // Update project details
  document.getElementById('project-title').innerHTML = title;
  document.getElementById('project-description').innerHTML = description;
  document.getElementById('live-button').setAttribute('href', liveUrl);
  document.getElementById('code-button').setAttribute('href', codeUrl);

  const projectDetails = document.getElementById('project-details');
  projectDetails.classList.remove('w3-hide');
};

// For clicking on images
document.querySelectorAll('.w3-card.project-item img').forEach((img) => {
  img.addEventListener('click', () => {
    onClick(img);
  });
});

/* // For clicking on "View More" buttons
document.getElementById('viewMoreBtn').addEventListener('click', () => {
  const projectItems = document.querySelectorAll('.w3-card.project-item');
  projectItems.forEach((projectItem) => {
    if (projectItem.classList.contains('w3-hide')) {
      projectItem.classList.remove('w3-hide');
      onClick(projectItem, true);
    }
  });
}); */

// Function to handle clicks on "Live" and "Code" buttons
document.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('live-button')) {
    const liveUrl = target.getAttribute('href');
    window.open(liveUrl, '_blank');
    event.preventDefault(); // Prevents the default action of the link
  } else if (target.classList.contains('code-button')) {
    const codeUrl = target.getAttribute('href');
    window.open(codeUrl, '_blank');
    event.preventDefault(); // Prevents the default action of the link
  }
});

// Toggle between showing and hiding the sidebar when clicking the menu icon
const mySidebar = document.getElementById('mySidebar');

const w3Open = () => {
  mySidebar.style.display = (mySidebar.style.display === 'block') ? 'none' : 'block';
};

// Close the sidebar with the close button
const w3Close = () => {
  mySidebar.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  // Function to toggle visibility of additional projects
  const toggleAdditionalProjects = () => {
    const additionalProjects = document.querySelectorAll('.project-item:nth-child(n+5)');
    for (let i = 0; i < additionalProjects.length; i += 1) {
      additionalProjects[i].classList.toggle('w3-hide');
    }

    // Change button text based on visibility state
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    if (additionalProjects[0].classList.contains('w3-hide')) {
      viewMoreBtn.textContent = 'View More Projects';
    } else {
      viewMoreBtn.textContent = 'View Less Projects';
    }
  };

  // Event listener for the "View More Projects" button
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  viewMoreBtn.addEventListener('click', toggleAdditionalProjects);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function scr(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const resumeButton = document.getElementById('resume-button');

  resumeButton.addEventListener('click', (event) => {
    event.preventDefault();
    const resumeUrl = 'https://example.com/your_resume.pdf'; // Replace 'https://example.com/your_resume.pdf' with the URL of your resume
    window.open(resumeUrl, '_blank');
  });
});