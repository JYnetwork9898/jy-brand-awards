document.addEventListener("DOMContentLoaded", function () {
    // 1. Define the Header HTML
    // Note: myFunction() is defined in header.js which should be loaded separately or we can rely on it being global.
    const headerHTML = `
        <div class="hd_wrap">
            <div class="topnav" id="myTopnav">
                <a href="index.html" class="logo-link active"><img src="/marketing/images/logo.png"></a>
                <a href="about.html" class="menu_min menu_TM" id="menu-about">ABOUT US</a>
                <a href="referance.html" class="menu_TM" id="menu-ref">REFERANCE</a>
                <a href="index.html#contact" class="menu_TM" id="menu-contact">CONTACT</a>
                <a href="file/jynetwork_company.pdf" target="_blank" class="menu_TM menu_cp">회사소개서</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()"><img src="/marketing/images/menu.png"></a>
            </div>
        </div>
    `;

    // 2. Insert Header into Placeholder
    const placeholder = document.querySelector('#header-placeholder');
    if (placeholder) {
        placeholder.innerHTML = headerHTML;
    } else {
        console.warn('ID "header-placeholder" not found. Header not injected.');
        return;
    }

    // 3. Highlight Logic
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Helper to set active style
    const setActive = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.style.setProperty('color', '#3695d3', 'important');
        }
    };

    if (filename === 'about.html') {
        setActive('menu-about');
    } else if (filename === 'referance.html' || filename.startsWith('rf_')) {
        setActive('menu-ref');
    }
    // index.html usually doesn't highlight text menu, implies logo is home
});
