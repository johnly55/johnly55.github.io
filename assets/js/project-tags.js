const projectEls = document.getElementsByClassName('project');
const projectTagMap = new Map();
const filterTagEls = document.getElementById('project-filter').getElementsByClassName('tag');
let filteringTags = [];

// Loop through all projects and link them to their tags.
for(let project of projectEls){
    // If this is the project template, ignore.
    if(project.classList.contains('invisible'))
        continue;

    let tags = [];
    let tagList = project.getElementsByClassName('tag');
    for(let tagInfo of tagList){
        tags.push(tagInfo.innerText);
    }
    projectTagMap.set(project, tags);
}

/**
 * Filter the list of visible projects by what tags are clicked.
 */
function filterProjects() {
    for(let dict of projectTagMap){
        let project = dict[0];
        let projectTags = dict[1];
        let keepVisible = false;

        // If filter is empty, include all projects.
        if(filteringTags.length === 0){
            project.classList.remove('invisible', 'hidden');
        }
        else{
            // Check each project's tags to make visible or not.
            projectTags.forEach(element => {
                if(filteringTags.includes(element)){
                    keepVisible = true;
                }
            });
            if(!keepVisible)
                project.classList.add('invisible', 'hidden');
            else
                project.classList.remove('invisible', 'hidden');
        }
    }
}

/** 
 * Allows selecting and unselecting of the filter tag.
 * Shows visual cue that a tag has been clicked.
 * Tag is toggled to/from the current filtering tags.
 * 
 * @param {*} event HTML element with tag class.
 */
function onTagClick(event) {
    // This tag is already being filter, unselect it.
    let tag = event['target'];
    if(filteringTags.includes(tag.innerText)){
        // Removing just this tag from the list.
        filteringTags = filteringTags.filter(
            (filter) => filter!==tag.innerText
        );
        tag.classList.remove('selected');
        tag.classList.add('unselected');
    }
    // Start filtering projects for this tag.
    else{
        filteringTags.push(tag.innerText);
        tag.classList.remove('unselected');
        tag.classList.add('selected');
    }

    filterProjects();
}

// Add click event listener to all filter tags.
for(let tag of filterTagEls){
    tag.addEventListener('click', onTagClick);
}