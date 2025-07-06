     const projects = [
        {
            image: "images/library_robot.jpg",
            title: "Library Robot"
        },
        {
            image: "images/combat_robot.jpg",
            title: "Combat Robot"
        },
        {
            image: "images/web_gentles.png",
            title: "Gentles Website"
        }
    ];

    let currentProjectIndex = 0;

    function updateProjects() {
        const total = projects.length;
        const main = document.getElementById("main_project");
        const left = document.getElementById("left_project");
        const right = document.getElementById("right_project");
        const title = document.getElementById("project_title");

        main.src = projects[currentProjectIndex].image;
        title.textContent = projects[currentProjectIndex].title;

        left.src = projects[(currentProjectIndex - 1 + total) % total].image;
        right.src = projects[(currentProjectIndex + 1) % total].image;
    }

    updateProjects();

   const hpLevels = [
        "images/hp_0.svg",
        "images/hp_33.svg",
        "images/hp_66.svg",
        "images/hp_full.svg"
    ];
    let hpIndex = 0;

    function updateHP() {
        const hpBar = document.getElementById("project_hp_image");
        hpBar.src = hpLevels[hpIndex];
    }

    function nextProject() {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        updateProjects();
        if (hpIndex < hpLevels.length - 1) hpIndex++;
        updateHP();
        createPopup("+10", true);
    }

    function prevProject() {
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        updateProjects();
        if (hpIndex > 0) hpIndex--;
        updateHP();
        createPopup("-10", false);
    }


    function createPopup(text, isPositive) {
        const popup = document.createElement("div");
        popup.classList.add("stat_popup");
        if (!isPositive) popup.classList.add("negative");
        popup.textContent = text;

        document.getElementById("projects").appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 1500);
    }