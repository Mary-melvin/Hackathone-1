const toggleButton = document.getElementById('toggleButton');
const skillsSection = document.getElementById('skillsSection');

if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', () => {
        // Example effect: change the background color of the skills section instead of hiding it
        if (skillsSection.style.backgroundColor === 'lightblue') {
            skillsSection.style.backgroundColor = '#f9f9f9';
        } else {
            skillsSection.style.backgroundColor = 'lightblue';
        }
    });
}
