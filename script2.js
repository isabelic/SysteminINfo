const conteudo = document.getElementById('conteudo');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

const conteudos = {
  navbar: `
    <h1>Componente NavBar</h1>
    <p>A <strong>NavBar</strong> é a barra de navegação superior do sistema AulaSys. Ela serve para:</p>
    <ul>
      <li>Navegar entre as principais páginas (ex: Dashboard, Alunos, Turmas, Relatórios)</li>
      <li>Exibir atalhos úteis e botões de ação rápida</li>
      <li>Indicar qual o perfil logado no sistema (Administrador, Editor, etc.)</li>
    </ul>
    <p>Ela é exibida em todas as telas protegidas por autenticação e se adapta para dispositivos móveis.</p>
    <div class="img-container">
      <img src="unnamed.png" alt="Exemplo de NavBar">
    </div>
  `,

  forms: `
    <h1>Funcionalidades do Forms</h1>
    <p>O Forms permite criar e gerenciar formulários no sistema. Ele suporta:</p>
    <ul>
      <li>Validação de campos</li>
      <li>Envio de dados para o backend</li>
      <li>Estilização responsiva e personalizada</li>
    </ul>
  `,

  "turma-cadastrar": `<h1>Cadastrar Turma</h1><p>Permite registrar novas turmas associadas a professores e horários.</p>`,
  "turma-remover": `<h1>Remover Turma</h1><p>Remove permanentemente uma turma do banco de dados.</p>`,
  "turma-atualizar": `<h1>Atualizar Turma</h1><p>Edita dados existentes de uma turma.</p>`,

  "perfil-editor": `<h1>Adicionar outro perfil como editor</h1><p>Permite promover um usuário existente para o perfil de editor, com permissões de edição.</p>`,
  "perfil-visu": `<h1>Adicionar visualizador de planilhas</h1><p>Concede acesso somente leitura a determinados relatórios e planilhas.</p>`
};

document.querySelectorAll('.sub-item').forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    conteudo.innerHTML = conteudos[id] || `<h1>Conteúdo não encontrado</h1><p>Este tópico ainda não foi preenchido.</p>`;
  });
});

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
