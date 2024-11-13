import { teamMembers } from "/db/script.js";

const template = `
  <div class="">
    <div class="">
        <img src="img/male1.png" alt="Marco Bianchi"/>
    </div>
    <div class="">
        <h3>Marco Bianchi</h3>
        <p>Designer</p>
        <p>marcobianchi@team.com</p>
    </div>
    </div>
`;
const prova = document.getElementById("members");
prova.innerHTML = template;
