let category = [
    'depression',
    'anxiety',
    'stress',
    'mindfulness',
    'substanceuse',
    'trauma',
    'chronicpain',
    'loneliness',
    'eatingdisorders',
    'suicide'
]

function filterResources() {
    let selection = document.getElementById("resourceDropDown");
    let resources = document.getElementsByClassName("resource");
    for (element of resources) {
        if (element.id !== selection.value && selection.value !== "all") {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    }
}
// Self-Management, Cognitive Modification, Skills Training, Illness Management, Passive-Symptom Tracking

function fetchResources() {
    fetch('/api/resources')
        .then(response => response.json())
        .then(resources => {
            console.log(resources);
            for (x = 0; x < resources.length; x++) {
                buildResources(resources[x], category[x])
            }
        })
}

function buildResources(resources, category) {
    let resourceList = document.getElementById(category)
    for (resource = 0; resource < resources.length; resource++) {
        let resourceChild = makeResource(resources[resource])
        resourceList.appendChild(resourceChild)
    }
}

function makeResource(resource) {
    let resourceDiv = document.createElement('div')
    resourceDiv.classList.add('card');

    let resourceDivBody= document.createElement('div');
    resourceDivBody.classList.add('card-body')

    let resourceName = document.createElement('h3')
    resourceName.textContent = resource.name
    resourceName.classList.add('card-title')

    let description = document.createElement('p')
    description.textContent = resource.description
    description.classList.add('card-text')

    let link = document.createElement('a')
    link.setAttribute('href', resource.link)
    link.textContent = resource.link
    link.classList.add('card-link')

    let phone = document.createElement('a')
    phone.setAttribute('href', 'tel:' + resource.phone)
    phone.textContent = resource.phone
    phone.classList.add('card-link')

    
    resourceDivBody.appendChild(resourceName)
    resourceDivBody.appendChild(description)
    resourceDivBody.appendChild(link)
    resourceDivBody.appendChild(phone)

    resourceDiv.appendChild(resourceDivBody)
    
    return resourceDiv
}


function goback() {
    window.location = "../Resources.html"
}
