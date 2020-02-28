const sectionOneData = {
    id: "section1",
    dataNav: "Section 1",
    class: "your-active-class",
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

// const sectionOne = Object.entries(sectionOneData);
// const sectionTwo = Object.entries(sectionTwoData);
// const sectionThree = Object.entries(sectionThreeData);

let sectionContents = [sectionOneData, sectionTwoData, sectionThreeData];

/* .createDocumentFragment? bejárni aztán a sectionContentet és az elemeit
nested for looppal, és ifekkel vizsgálni, hogy mik a value-k, és annak megfelelően hozzáadogatni
a DocumentFragmenthez őket? .setAttribute vagy .classList és .add() etc. is jó lehet */

let buffer = document.createDocumentFragment();
const pageNavbar = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");

for (section of sectionContents) {
    const navElement = document.createElement("li");
    // navElement.setAttribute("class", "nav-element");
    const navLink = document.createElement("a");
    navLink.setAttribute("class", ".menu__link");
    navLink.href = `#${section.id}`;
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

pageNavbar.appendChild(navList);
const sectionsDiv = document.querySelector('#sections');
sectionsDiv.appendChild(buffer);