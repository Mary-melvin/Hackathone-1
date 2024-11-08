var toggleButton = document.getElementById('toggleButton');
var skillsSection = document.getElementById('skillsSection');
if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
