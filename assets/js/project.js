// Load projects based on json file and html template.
const projectGroupContainer = document.getElementById('project-group-container');
const projectTemplate = document.querySelector('.project')

function appendProjects(projectJson) {
    projectDict = projectJson['projects'];
    projectDict.forEach(dict => {
        let projectHTML = projectTemplate.cloneNode(true);

        let title = projectHTML.querySelector('.title span');
        title.innerHTML = dict['title'];

        // Surround tags with a span of class tag.
        let tags = projectHTML.querySelector('.tags');
        tags.innerHTML = '';
        dict['tags'].forEach(tag => {
            let span = document.createElement('span');
            span.innerText = tag;
            if(tag === 'c#')
                // c# causes troubles as a variable name.
                span.classList.add('tag', 'csharp' ,'unselected');
            else
                span.classList.add('tag', tag, 'unselected');
            tags.append(span);
        });

        let link = projectHTML.querySelector('.link a');
        link.href = dict['link'];

        // Empty description then, append each description with a dash
        // and a <br> tag.
        let description = projectHTML.querySelector('.description span');
        description.innerHTML = '';
        dict['description'].forEach(desc => {
            description.innerHTML += ('- ' + desc);
            description.append(document.createElement('br'));
        });

        // Empty images then, foreach image link, append.
        let images = projectHTML.querySelector('.image-list');
        images.innerHTML = '';
        let count = 0;
        dict['images'].forEach(link => {
            let div = document.createElement('div');
            let img = document.createElement('img');
            img.src = link;
            div.append(img);
            images.append(div);

            // Every image after the 1st is hidden.
            if(count == 0){
                count += 1;
            }
            else {
                div.classList.add('hidden');
            }
        });

        projectGroupContainer.append(projectHTML);
    });
}

var projectJson = {
    "projects": [
        {
            "project": "Tools ReAmped",
            "images": [
                "assets/images/project-tools-reamped01.png",
                "assets/images/project-tools-reamped02.png"
            ],
            "title": "Minecraft Mod: Tools ReAmped (2015)",
            "tags": [
                "java"
            ],
            "description": [
                "This mod adds new versions of Diamond Tools that are intended to create an easier or more fun experience for minecrafters.",
                "Each Full version Tool, when holding, will give the user a specific boost such as speed boost, strength boost, resistance, etc.",
                "Amped Tools are even more powerful versions but with some drawbacks(debuffs) to make it not so easy and switching tools a necessary strategy."
            ],
            "link": "https://www.curseforge.com/minecraft/mc-mods/tools-reamped"
        },
        {
            "project": "Laser Defender",
            "images": [
                "assets/images/project-laser-defender01.png",
                "assets/images/project-laser-defender02.png"
            ],
            "title": "Laser Defender (2018)",
            "tags": [
                "c#"
            ],
            "description": [
                "Controls:WASD(Move) Space(Shoot)",
                "Blast through endless waves of enemies with your trusty spaceship.",
                "The enemies come in one group at a time and increases difficulty over time.",
                "The boss in this game is no joke either, once you beat it, you unlock endless waves mode."
            ],
            "link": "https://lazyjayz.itch.io/laser-defender?secret=qeZKlj6PjzDpb92V0fJJSgnSc"
        },
        {
            "project": "Glitch Garden",
            "images": [
                "assets/images/project-glitch-garden01.png",
                "assets/images/project-glitch-garden02.png"
            ],
            "title": "Glitch Garden (2018)",
            "tags": [
                "c#"
            ],
            "description": [
                "Controls:Mouse(Select)",
                "Fight through waves of angry crocodiles and sneaky foxes with plants and garden gnomes.",
                "Defend yourself at all costs in this Plants Vs Zombies like game!"
            ],
            "link": "https://lazyjayz.itch.io/glitch-garden?secret=8nsliNGa4IdUhNis6gtH4W5943Q"
        },
        {
            "project": "3D TD",
            "images": [
                "assets/images/project-td01.png",
                "assets/images/project-td02.png"
            ],
            "title": "3D TD (2019)",
            "tags": [
                "c#"
            ],
            "description": [
                "Controls:Mouse(Select)",
                "In this 3D tower defense game, you choose from 3 upgradable turrets to help you defend the enemy.",
                "The enemies come in 3 different varieties: tanky; speedy; normal.",
                "Can you manage your defense?"
            ],
            "link": "https://lazyjayz.itch.io/td?secret=zGzTTIfybMIEy4AmtV437n0o"
        },
        {
            "project": "Portal Physics",
            "images": [
                "assets/images/project-portal-physics01.png",
                "assets/images/project-portal-physics02.png"
            ],
            "title": "Portal Physics (2020)",
            "tags": [
                "c#"
            ],
            "description": [
                "Controls:WASD(Move) Space(Jump) Mouse(Look)",
                "Have a look at portals work in a game engine.",
                "This is not a game, but more of an experiment for educational purposes."
            ],
            "link": "https://lazyjayz.itch.io/portal-physics?secret=fqo0stir4ZDX019nW5EcA4Mpc"
        },
        {
            "project": "GitHub Portfolio",
            "images": [
                "assets/images/project-website01.png",
                "assets/images/project-website02.png"
            ],
            "title": "GitHub Portfolio: This Website! (2020)",
            "tags": [
                "html",
                "css",
                "javascript"
            ],
            "description": [
                "This this the website you are currently browsing!",
                "The website is a showcase of my coding ability in many different coding languages."
            ],
            "link": "https://github.com/johnly55/johnly55.github.io"
        },
        {
            "project": "Python Snake Game",
            "images": [
                "assets/images/project-snake-game01.png",
                "assets/images/project-snake-game02.png"
            ],
            "title": "Python Snake Game (2020)",
            "tags": [
                "python"
            ],
            "description": [
                "Controls:WASD or arrow keys(Move)",
                "Classic snake game. Eat red blocks(apples) to grow.",
                "Beat the game by growing to max size without hitting the map border or your own body."
            ],
            "link": "https://github.com/johnly55/pygame-snake-game"
        }
    ]
}

// Initiate appending of projects.
appendProjects(projectJson);
// Hide template.
projectTemplate.classList.add('invisible', 'hidden');