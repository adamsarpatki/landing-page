const sectionOneData = {
    id: "section1",
    dataNav: "Section 1",
    title: "Section 1",
    textContentOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    textContentTwo: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
};

const sectionTwoData = {
    id: "section2",
    dataNav: "Section 2",
    title: "Section 2",
    textContentOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    textContentTwo: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
};

const sectionThreeData = {
    id: "section3",
    dataNav: "Section 3",
    title: "Section 3",
    textContentOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    textContentTwo: "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
};

// Create a list of objects
let sectionContents = [sectionOneData, sectionTwoData, sectionThreeData];

// Create DocumentFragment
let buffer = document.createDocumentFragment();

// Select navigation elements by attributes
const pageNavbar = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");

// Function to add "your-active-class" class to sections after click event on nav
function addActiveClass (event) {
    const allSections = document.querySelectorAll("section");
    for (section of allSections) {
        if (section.className != null) {
            section.classList.remove("your-active-class");
        }
    }
    document.querySelector(event.target.hash).setAttribute("class", "your-active-class");
}

// Loop through list of objects and dynamically create HTML content
for (section of sectionContents) {
    const navElement = document.createElement("li");
    navElement.setAttribute("class", "menu__link");
    const navLink = document.createElement("a");
    navLink.setAttribute("class", ".menu__link");
    navLink.href = `#${section.id}`;
    navLink.addEventListener("click", addActiveClass);
    navLink.textContent = section.title;
    navElement.appendChild(navLink);
    navList.appendChild(navElement);

    const container = document.createElement('section');
    container.setAttribute("id", section.id);
    container.setAttribute("data-nav", section.dataNav);
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
    container.appendChild(containerContent);
    buffer.appendChild(container);
}

// Append nav elements to navigation
pageNavbar.appendChild(navList);

// Append sections to div
const sectionsDiv = document.querySelector('#sections');
sectionsDiv.appendChild(buffer);

