function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // This scrolls smoothly to the section
    }
}