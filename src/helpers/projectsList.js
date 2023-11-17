import project01 from "./../img/projects/1.png";
import project02 from  "./../img/projects/2.png";
import project03 from  "./../img/projects/3.png";
import project04 from  "./../img/projects/4.png";


const projects = [
    {
        title: 'Image Processing API',
        skills: ' JavaScript, Node.js, Typescript, Jasmine',
        img: project01,
        gitHubLink: 'https://github.com/Ksummmer/Project_Image_processing_API'
    },
    {
        title: 'MyStore Application',
        skills: ' AngularCLI, Typescript, JavaScript, CSS, HTML',
        img: project02,
        gitHubLink: 'https://github.com/Ksummmer/Project_MyStore'
    },
    {
        title: 'Storefront Backend',
        skills: ' Databases /PostgreSQL, migrations/, testing /Jasmine, Supertest/, server /Express/, authorization and jwt /bcrypt, jsonwebtoken/, dotenv for env variables',
        img: project03,
        gitHubLink: 'https://github.com/Ksummmer/Project_Storefront_Backend'
    },
    {
        title: 'Udagram Application Deployment',
        skills: ' AWS Services, CircleCI, Angular, Node.js, Express',
        img: project04,
        gitHubLink: 'https://github.com/Ksummmer/Udagram_Application_Deployment'
    }
];

export {projects};