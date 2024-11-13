import { teamMembers } from "/db/script.js";

let template = "";

const teamMembersContainer = document.getElementById("members");
for (let value of teamMembers) {
  template += `
            <div class="col">
                <div class="card">
                    <img src="/${value.img}" alt="" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">${value.name}</h5>
                        <p class="card-text">${value.role}</p>
                        <p class="card-text">${value.email}</p>
                    </div>
                </div>
            </div>

`;
}
teamMembersContainer.innerHTML = template;
