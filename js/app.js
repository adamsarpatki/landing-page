// Create a list of objects
let sectionContents = [
    {
        id: "section1",
        dataNav: "Section 1",
        title: "Section 1",
        textContentOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        textContentTwo: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    },
    {
        id: "section2",
        dataNav: "Section 2",
        title: "Section 2",
        textContentOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        textContentTwo: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    },
    {
        id: "section3",
        dataNav: "Section 3",
        title: "Section 3",
        textContentOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        textContentTwo: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    },
    {
        id: "section4",
        dataNav: "Section 4",
        title: "Section 4",
        textContentOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        textContentTwo: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    },];

// Function to generate navigation elements
function generateNavigation(section) {
    const navElement = document.createElement("li");
    navElement.setAttribute("id", `nav-${section.id}`)
    navElement.setAttribute("class", "menu__link");
    const navLink = document.createElement("a");
    navLink.href = `#${section.id}`;
    navLink.textContent = section.title;
    navElement.appendChild(navLink);
    return navElement;
}

//Function to generate contents of section elements
function generateSectionContainerContent(section) {
    const containerContent = document.createElement('div');
    containerContent.setAttribute("class", "landing__container");
    const heading = document.createElement('h2');
    heading.textContent = section.title;
    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = section.textContentOne;
    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = section.textContentTwo;
    containerContent.appendChild(heading);
    containerContent.appendChild(paragraphOne);
    containerContent.appendChild(paragraphTwo);
    return containerContent;
}

//Function to generate HTML section elements
function generateSectionContainer(section) {
    const container = document.createElement('section');
    container.setAttribute("id", section.id);
    container.setAttribute("data-nav", section.dataNav);
    container.appendChild(generateSectionContainerContent(section));
    return container;
}

function generateSections() {
    // Create DocumentFragment
    let buffer = document.createDocumentFragment();

    // Select navigation elements by attributes
    const pageNavbar = document.querySelector(".navbar__menu");
    const navList = document.querySelector("#navbar__list");

    // Loop through list of objects and dynamically create HTML content
    for (let section of sectionContents) {
        navList.appendChild(generateNavigation(section));
        buffer.appendChild(generateSectionContainer(section));
    }

    // Append nav elements to navigation
    pageNavbar.appendChild(navList);

    // Append sections to div
    const sectionsDiv = document.querySelector('#sections');
    sectionsDiv.appendChild(buffer);
    makeActive();
}

generateSections();

function makeActive() {
    const allSections = document.querySelectorAll("section");
    for (const section of allSections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 500 && box.bottom >= 500) {
            section.setAttribute("class", "your-active-class");
            document.getElementById(`nav-${section.id}`).classList.add("highlighted");
            // Apply active state on the current section and the corresponding Nav link.
        } else {
            section.removeAttribute("class", "your-active-class");
            document.getElementById(`nav-${section.id}`).classList.remove("highlighted");
            // Remove active state from other section and corresponding Nav link.
        }
    }
}

document.addEventListener("scroll", function () {
    makeActive();
});