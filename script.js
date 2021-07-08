// De active class veranderen zodat een ander afbeelding groter wordt. 
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener ('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
});

function removeActiveClasses(){
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}