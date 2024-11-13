import { teamMembers } from "/db/script.js";

const submitButton = document.getElementById("submit");
if (submitButton) {
  submitButton.addEventListener("click", onClickSubmit);
}

const teamMembersContainer = document.getElementById("members");
if (teamMembersContainer) {
  teamMembersContainer.innerHTML = createTemplate(teamMembers);
}

function onClickSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("inpName").value;
  const role = document.getElementById("inpRole").value;
  const email = document.getElementById("inpEmail").value;
  const img = document.getElementById("inpImg").value;

  teamMembers.push({ name, role, email, img });
  teamMembersContainer.innerHTML = createTemplate(teamMembers);
}
function createTemplate(teamList) {
  let template = "";
  for (let value of teamList) {
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
  return template;
}
