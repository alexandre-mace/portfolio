window.onload = function() {
    let mediaQuery = window.matchMedia("(max-width: 970px)");

    // CURRENT PROJECT NOTIFIER
    const projects = document.getElementsByClassName('project');
    if (!mediaQuery.matches) {

        Array.from(projects).forEach(function (project) {
                project.addEventListener("mouseover", function (event) {
                    if (this.classList.contains('project') && !event.target.classList.contains('project-label')) {

                        // display the displayed project info
                        document.getElementById('displayed-project-description').replaceChild(this.querySelector('.project-details').cloneNode(true), document.getElementById('displayed-project-description').children[0]);

                        // remove all existing displayed project notifier and all active labels
                        Array.from(document.getElementsByClassName('displayed-project-notifier')).forEach(function (displayedProjectNotifier) {
                            displayedProjectNotifier.remove();
                        });
                        Array.from(document.getElementsByClassName('project-label')).forEach(function (label) {
                            label.classList.remove('project-label-active');
                        });
                        // display the displayed project notifier
                        this.getElementsByClassName('project-label')[0].classList.add('project-label-active');

                        const displayedProjectNotifier = document.createElement('span');
                        displayedProjectNotifier.innerHTML = '';
                        displayedProjectNotifier.classList.add('displayed-project-notifier');
                        this.getElementsByClassName('project-title')[0].prepend(displayedProjectNotifier);
                    }
                });
        })

        // DISPLAY 1ST PROJECT BY DEFAULT
        const firstProject = document.getElementsByClassName('project')[0];
        const mouseoverEvent = new Event('mouseover');
        firstProject.dispatchEvent(mouseoverEvent);
    }
    // RANDOM SKILL DISPLAY
    // const skills = ['symfony', 'api platform', 'react', 'vuejs', 'javascript', 'mysql', 'UML', 'testing', 'travis'];
    // window.setInterval(function(){
    //     let displayedSkill = skills[Math.floor(Math.random()*skills.length)];
    //     while (displayedSkill === document.getElementById("displayed-skill").innerHTML) {
    //         displayedSkill = skills[Math.floor(Math.random()*skills.length)];
    //     }
    //     document.getElementById("displayed-skill").innerHTML = displayedSkill;
    // }, 800);

    // SHOW PROJECTS SECTION TITLE ON SCROLL
    let projectsSectionPosition = document.getElementById("projects").offsetTop;
    // let skillsSectionPosition = document.getElementById("skills").offsetTop;
    let displayedScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    function checkIfNeedsToDisplayProjectSectionTitle() {
        // if(displayedScrollPosition >= (projectsSectionPosition - 200) && displayedScrollPosition < (skillsSectionPosition - 300))
        if (displayedScrollPosition >= (projectsSectionPosition - 200))
            document.getElementById("projects-section-title").className = "";
        else
            document.getElementById("projects-section-title").className = "hidden";
    }

    checkIfNeedsToDisplayProjectSectionTitle();
    window.onscroll = function () {
        displayedScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        checkIfNeedsToDisplayProjectSectionTitle();
    };

    // MOBILE PROJECTS DESCRIPTIONS
    function showMobileDescription(mediaQuery) {
        if (mediaQuery.matches) {
            Array.from(document.getElementsByClassName('project')).forEach(function (project) {
                const mobileProjectDescription = project.getElementsByClassName('mobile-project-description')[0];
                if (mobileProjectDescription.children.length > 0) {
                    mobileProjectDescription.replaceChild(mobileProjectDescription.parentNode.querySelector('.project-details').cloneNode(true), mobileProjectDescription.children[0]);
                }
            });
            Array.from(document.getElementsByClassName('displayed-project-notifier')).forEach( function (displayedProjectNotifier) {
                displayedProjectNotifier.remove();
            });
        } else {
            Array.from(document.getElementsByClassName('project')).forEach(function (project) {
                const mobileProjectDescription = project.getElementsByClassName('mobile-project-description')[0];
                mobileProjectDescription.innerHTML = '';
            })
        }
    }

    showMobileDescription(mediaQuery)
    mediaQuery.addListener(showMobileDescription)
};
