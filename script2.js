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
  ,


  "usuario-perfil": `<h1>Gerenciar Perfil</h1><p>Aqui o usuário pode editar suas informações pessoais.</p>`,

  "coordenacao-visualizacao": `
  <h1>Coordenação - Visualização de Dados pela Equipe Pedagógica</h1>
  <p>A coordenação tem acesso somente aos dados, podendo visualizá-los da seguinte forma:</p>

  <p>
    Através do link 
      Pasta no Google Drive
    </a> 
    que contém as planilhas de todas as turmas. A coordenação pode procurar a turma através do nome que fica no final, já que todas as planilhas estão sendo salvas como 
    <em>“Respostas - Turma e nº da turma”</em>.
  </p>
  <img src="imgs/imagem1-coordencao.png" alt="Coordenacao">

  <p>Ao entrar na planilha a equipe pedagógica poderá visualizar os seguintes dados:</p>
  <ul>
    <li>Carimbo de data e hora – dia e a hora exata em que o representante respondeu ao formulário:</li>
    <img src="imgs/unnamed.png" alt="coordenaçao">

    <li>Endereço de e-mail que o representante utilizou para responder ao formulário:</li>
    <img src="imgs/imagem2-coordenacao.png" alt="Coordenacao">

    <li>Nome completo (sem apelidos ou abreviações) do representante da turma:</li>
    <img src="imgs/imagem3-coordenacao.png" alt="Coordenacao">

    <li>Turma do Representante: Sabemos que ao abrir a planilha, a equipe pedagógica já tem conhecimento de que turma o representante é, mas é esta pergunta que faz com que sejam separadas as planilhas por turma:</li>
    <img src="imgs/imagem4-coordenacao.png" alt="Coordenacao">

    <li>O nome do professor que estava lecionando:</li>
    <img src="imgs/imagem5-coordenacao.png" alt="Coordenacao">

    <li>A unidade curricular que o professor estava lecionando no período:</li>
    <img src="imgs/imagem6-coordenacao.png" alt="Coordenacao">

    <li>Os alunos que estavam presentes e os que não estavam presentes:</li>
    <img src="imgs/imagem7-coordenacao.png" alt="Coordenacao">
    <img src="imgs/imagem7.1-coordenacao.png" alt="Coordenacao">
    <img src="imgs/imagem7.2-coordenacao.png" alt="Coordenacao">

    <li>A data em que a aula ocorreu:</li>
    <img src="imgs/imagem8-coordenacao.png" alt="Coordenacao">

    <li>Horário que a aula começou:</li>
    <img src="imgs/imagem9-coordenacao.png" alt="Coordenacao">
    <li>Horário em que a aula terminou:</li>
    <img src="imgs/imagem10-coordenacao[.png" alt="Coordenacao">

    <li>Se a aula realmente aconteceu com o professor presente e conteúdo aplicado:</li>
    <img src="imgs/imagem11-coordenacao.png" alt="Coordenacao">

    <li>Se a aula realmente aconteceu, o que foi feito nela:</li>
    <img src="imgs/imagem12-coordenacao.png" alt="Coordenacao">

    <li>Observações adicionais (opcional):</li>
    <img src="imgs/imagem13-coordenacao.png" alt="Coordenacao">
  </ul>
`,

  "representantes-form": `
<h1>Representantes - Preenchimento do Formulário</h1>

<h2>Abrir o Formulário</h2>
<p>
  Podem abrir pelo link 
  <a href="https://forms.gle/tL9ERwWjQWZ3u2k48" target="_blank">
    Clique aqui
  </a> 
  ou também escaneando o QR Code.
</p>
<img src="imgs/representantes1.png" alt="Acesso ao formulário">

<h2>Preencher o Formulário</h2>
<p>
  Na primeira seção, o aluno deve selecionar o ícone destacado e aceitar o registro utilizando seu endereço de e-mail.
</p>
<img src="imgs/representantes2.png" alt="Login com e-mail">

<p>
  Após selecionar o ícone, em seguida, clicar em <strong>Avançar</strong> para prosseguir para a próxima seção.
</p>
<img src="imgs/representantes3.png" alt="Avançar seção inicial">

<p>
  Na seção seguinte, o representante deve preencher seu <strong>nome completo</strong> na área destacada.
</p>
<img src="imgs/representantes4.png" alt="Nome completo">

<p>
  Selecionar a <strong>turma</strong> clicando na área destacada correspondente. 
  Uma lista suspensa será aberta; o aluno deve procurar e selecionar sua turma.
</p>
<img src="imgs/representantes5.png" alt="Seleção de turma">
<img src="imgs/representantes6.png" alt="Avançar após turma">

<p>
  Após selecionar a turma, clicar em <strong>Avançar</strong> para continuar.
</p>
<img src="imgs/representantes7.png" alt="Seleção de professor">

<p>
  Na nova seção, o representante deve clicar em <strong>“Selecione o nome do professor”</strong> para abrir a lista suspensa e selecionar o professor responsável pela aula.
</p>
<img src="imgs/representantes8.png" alt="Seleção de disciplina">
<img src="imgs/representantes9.png" alt="Avançar após seleção de professor e disciplina">

<p>
  Em seguida, clicar em <strong>“Selecione a unidade curricular”</strong> e escolher a disciplina lecionada, utilizando o mesmo procedimento de lista suspensa.
</p>
<img src="imgs/representantes10.png" alt="Registro de presença">
<img src="imgs/representantes11.png" alt="Avançar após presença">

<p>
  Após selecionar os dois campos, os representantes devem clicar em <strong>Avançar</strong> para a próxima seção.
</p>

<p>
  Nesta seção, o representante deve registrar a <strong>presença e ausência</strong> dos alunos da turma.
</p>
<img src="imgs/representantes12.png" alt="Data da aula">

<p>
  Após preencher corretamente, clicar em <strong>Avançar</strong>.
</p>
<img src="imgs/representantes13.png" alt="Horário de início">

<h2>Cadastro da Aula</h2>
<p>
  O primeiro card que os representantes devem preencher é o de <strong>data da aula</strong>, clicando no ícone de calendário e selecionando o dia correspondente.
</p>
<img src="imgs/representantes14.png" alt="Horário de término">
<img src="imgs/representantes15.png" alt="Ocorrência da aula">

<p>
  Seguindo para o próximo tópico, vamos preencher o <strong>horário da aula</strong>, clicando na área destacada e informando a hora e os minutos em que a aula começou.
</p>
<img src="imgs/representantes16.png" alt="Descrição da aula">

<p>
  Seguindo o mesmo processo, preencher da mesma forma o <strong>horário de encerramento</strong> da aula.
</p>
<img src="imgs/representantes17.png" alt="Enviar formulário">

<p>
  Agora, o representante deve selecionar dentre as <strong>três opções</strong> aquela que melhor descreve a ocorrência da aula durante o período.
</p>
<img src="imgs/representantes18.png" alt="Ocorrência da aula">

<p>
  Agora, o aluno deve informar detalhadamente <strong>o que foi realizado na aula</strong>, incluindo conteúdos ensinados, atividades realizadas e avaliações aplicadas, se houver.
</p>
<img src="imgs/representantes19.png" alt="Descrição do que foi feito">

<p>
  Após preencher todas as seções, o representante deve clicar em <strong>Enviar</strong> para finalizar o registro.
</p>
<img src="imgs/representantes20.png" alt="Enviar formulário">

<p>
Durante todo o formulário, o representante vai ter três opções na parte inferior do formulário, que são elas:
</p>

<p>
1- Voltar: Serve para caso o representante queira voltar para a seção anterior:
</p>
<img src="imgs/representantes21.png" alt="Opçoes formulário">

<p>
2- Avançar: Serve para o representante avançar para a próxima seção após preencher todas as informações necessárias daquela seção.
</p>
<img src="imgs/representantes22.png" alt="Opçoes formulário">

<p>
3- Limpar formulário: Serve para que o representante possa limpar todas as informações que ele já preencheu no formulário.
</p>
<img src="imgs/representantes23.png" alt="Opçoes formulário">


`


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

