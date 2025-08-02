const conteudo = document.getElementById('conteudo');

const textos = {
  'navbar': `
    <h1>NavBar</h1>
    <p>A NavBar permite acesso rápido a todas as seções do sistema AulaSys, com botões configuráveis para diferentes perfis de usuário.</p>
  `,
  'forms': `
    <h1>Funcionalidades do Forms</h1>
    <p>O formulário permite registrar dados das aulas, presença dos alunos, e observações feitas pelo representante.</p>
  `,
  'turma-cadastrar': `
    <h1>Cadastrar Turma</h1>
    <p>Permite adicionar uma nova turma ao sistema, vinculando-a ao curso, turno e sala correspondente.</p>
  `,
  'turma-remover': `
    <h1>Remover Turma</h1>
    <p>Remove permanentemente uma turma e seus registros associados após confirmação de um administrador.</p>
  `,
  'turma-atualizar': `
    <h1>Atualizar Turma</h1>
    <p>Permite editar dados de uma turma existente, como horário, professor responsável e sala.</p>
  `,
  'perfil-editor': `
    <h1>Adicionar outro perfil como editor</h1>
    <p>Um administrador pode atribuir privilégios de edição a outro usuário específico para colaborar nas tarefas administrativas.</p>
  `,
  'perfil-visu': `
    <h1>Add outra pessoa para visu as planilhas</h1>
    <p>Permite adicionar usuários com permissão somente leitura para visualizar relatórios e registros do sistema.</p>
  `,
};

document.querySelectorAll('.sub-item').forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    conteudo.innerHTML = textos[id] || `<h1>Conteúdo não encontrado</h1><p>Este tópico ainda não foi preenchido.</p>`;
  });
});
