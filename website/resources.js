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
    
    let resourceTypes = ['depression', 'anxiety', 'mindfulness']
    let selection1 = document.getElementById("resourceDropDown1");
    let selection2 = document.getElementById("resourceDropDown2");
    let resourceData = { mindfulness: 'mindfullness data' ,depression: 'depressionData' , anxiety: 'anxietyInformation' }
    let container = document.getElementById('container')
    container.innerHTML=''
    let filteredResources = resourceTypes.filter((type) =>  {
        return type === selection1.value || type === selection2.value || selection1.value==='all'
    })

    for (resource of filteredResources) {
        let resourceDiv = document.createElement('div')
        resourceDiv.classList.add('resource')
        resourceDiv.innerText = resource
        container.appendChild(resourceDiv)
        let innerDiv = document.createElement('div')
        innerDiv.classList.add('desc')
        innerDiv.innerText = resourceData[resource]
        resourceDiv.appendChild(innerDiv)
    }

    
}
function clearFilter() {
    let dropDownOption = document.getElementById('all')
    dropDownOption.selected = "selected"
    filterResources()
    
}

function loadPage() {
    let resourceTypes = ['depression', 'anxiety', 'mindfulness']
    let selection1 = document.getElementById("resourceDropDown1");
    let selection2 = document.getElementById("resourceDropDown2");

    resourceTypes.forEach((resource) => {
        let option1 = document.createElement('option')
        option1.value=resource
        option1.innerHTML = resource[0].toUpperCase() + resource.substr(1)
        let option2 = document.createElement('option')
        option2.value=resource
        option2.innerHTML=resource[0].toUpperCase()+resource.substr(1)
        selection1.appendChild(option1)
        selection2.appendChild(option2)
        filterResources()
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
