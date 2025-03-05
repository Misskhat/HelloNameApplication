const btn = document.getElementsByTagName('button');
const updateContent = document.getElementById('updateContent');

const updateName = () => {
  const yourName = prompt("Please Enter your name");
  updateContent.textContent = yourName;
}