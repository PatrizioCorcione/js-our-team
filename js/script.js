const team = [
{
  nome: "Wayne",
  cognome: "Barnett",
  role: "Founder & CEO",			
  img: "wayne-barnett-founder-ceo.jpg",
},
{
  nome: "Angela ",
  cognome: "Caroll",
  role: "Chief Editor",			
  img: "angela-caroll-chief-editor.jpg",
},
{
  nome: "Walter",
  cognome: "Gordon	",
  role: "Office Manager",			
  img: "walter-gordon-office-manager.jpg",
},
{
  nome: "Angela",
  cognome: "Lopez",
  role: "Social Media Manager",			
  img: "angela-lopez-social-media-manager.jpg",
},
{
  nome: "Scott",
  cognome: "Estrada",
  role: "Developer",			
  img: "scott-estrada-developer.jpg",
},
{
  nome: "Barbara",
  cognome: "Ramos",
  role: "Graphic Designer",			
  img: "barbara-ramos-graphic-designer.jpg",
}
]

const rowJs = document.getElementById ("row");

for (const member of team) {
  rowJs.innerHTML += `
  <div class="col">
    <div class="card rounded-0 my-5">
      <img class="card-img-top rounded-0 " src = "assets/img/${member.img}" alt="${member.nome} ${member.cognome}">
      <div class="card-body text-center text-secondary">
      <h2>${member.nome} ${member.cognome}</h2>
      <p>${member.role}</p>
      </div>
    </div>
  </div>
  `;
}
