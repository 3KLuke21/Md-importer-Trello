
function importMarkdown() {
  const fileInput = document.getElementById('fileInput');
  const output = document.getElementById('output');
  const file = fileInput.files[0];

  if (!file) {
    alert('Selecione um arquivo .md');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const content = e.target.result;
    output.textContent = content;

    // Aqui você conectaria à API do Trello para criar cartões
    // usando a chave e token previamente configurados
  };
  reader.readAsText(file);
}
