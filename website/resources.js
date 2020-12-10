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

    let resourceName = document.createElement('h3')
    resourceName.textContent = resource.name

    let description = document.createElement('p')
    description.textContent = resource.description

    let link = document.createElement('a')
    link.setAttribute('href', resource.link)
    link.textContent = resource.link

    let phone = document.createElement('a')
    phone.setAttribute('href', 'tel:' + resource.phone)
    phone.textContent = resource.phone

    resourceDiv.appendChild(resourceName)
    resourceDiv.appendChild(description)
    resourceDiv.appendChild(link)
    resourceDiv.appendChild(document.createElement('br'))
    resourceDiv.appendChild(phone)

    return resourceDiv
}


function goback() {
    window.location = "../Resources.html"
}
