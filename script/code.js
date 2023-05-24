// About Section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    'Hi, im Maarij Camroodien im 19 years old .'
]
// Loop through the contents
aboutContents.forEach( (content) =>{
    about.innerHTML += `<p class='lead'>${content}</p>`
})

let education = [
    {
        id: 1,
        year: 2023,
        description: 'Currently studing coding to become a full stack developer',
        place: 'Life Choices Boot Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2022,
        description: 'Got my matric certificate with a batchelors pass',
        place: 'Rylands High School',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2021,
        description: 'Grade 11',
        place: 'Rylands High School',
        type: 'certificate',
        certificate: ''
    },
    // {
    //     id: 4,
    //     year: 2015,
    //     description: 'I got my certificate on Intro to Android Developer',
    //     place: 'Study Jams',
    //     type: 'certificate',
    //     certificate: ''
    // },
    // {
    //     id: 5,
    //     year: 2014,
    //     description: 'I got my diploma on Software Engineering',
    //     place: 'Tshwane University of Technology',
    //     type: 'Diploma',
    //     certificate: ''
    // },
    // {
    //     id: 6,
    //     year: 2005,
    //     description: 'Completed my course on PC Engineering',
    //     place: 'Havatech',
    //     type: 'Certificate',
    //     certificate: ''
    // },
    // {
    //     id: 7,
    //     year: 2000,
    //     description: 'Grade 12',
    //     place: '',
    //     type: 'Certificate',
    //     certificate: ''
    // },
]

let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})