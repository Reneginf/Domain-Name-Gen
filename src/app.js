import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = DomainGen();
  console.log(DomainGen);
};

let DomainGen = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);

  return pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com";
};
