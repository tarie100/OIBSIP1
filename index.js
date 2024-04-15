document.getElementById("about-link").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "about.html", true);
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById("info").innerHTML = xhr.responseText;
        } else {
            console.error("Failed to load content");
        }
    };
    
    xhr.send();
});

document.addEventListener("DOMContentLoaded", function(){
    let dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("change", function(){
        dropdown.disabled = true;
    });
    document.addEventListener("click", function(){
        dropdown.disabled = false;
        dropdown.selectedIndex = 0;
    });
    });
    document.addEventListener("DOMContentLoaded", function(){
        let dropdown = document.getElementById("down");
        dropdown.addEventListener("change", function(){
            dropdown.disabled = true;
        });
        document.addEventListener("click", function(){
            dropdown.disabled = false;
            dropdown.selectedIndex = 0;
        });
        });
    // Step 1: Identify the "About" link
/*const aboutLink = document.querySelector('#about-link');

// Step 2: Add an event listener
aboutLink.addEventListener('click', showAboutPage);

// Step 3: Define the click event handler function
function showAboutPage(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  // Step 4: Modify the DOM to show the information
  // Example: Create a new element and append it to the main page
  const aboutPage = document.createElement('div');
  aboutPage.id = 'about-page';
  aboutPage.textContent = 'This is the About page.';

  const mainPage = document.querySelector('#main-page');
  mainPage.appendChild(aboutPage);

  // Optional: Scroll to the newly added element
  aboutPage.scrollIntoView({ behavior: 'smooth' });
}*/
document.getElementById('about-link').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'about.html', true);
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById('content').innerHTML = xhr.responseText;
        } else {
            console.error('Failed to load content');
        }
    };
    
    xhr.send();
});