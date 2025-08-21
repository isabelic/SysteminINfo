
const conteudo = document.getElementById('conteudo');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

const conteudos = {

  "navbar": `
<h1>Componente NavBar</h1>
<p>A <strong>NavBar</strong> é a barra de navegação superior do sistema AulaSys. Ela serve para:</p>
<ul>
  <li>Navegar entre as principais páginas (ex: Dashboard, Alunos, Turmas, Relatórios)</li>
  <li>Exibir atalhos úteis e botões de ação rápida</li>
  <li>Indicar qual o perfil logado no sistema (Administrador, Editor, etc.)</li>
</ul>
<p>Ela é exibida em todas as telas protegidas por autenticação e se adapta para dispositivos móveis.</p>
<img src="imgs/navBar1.png" alt="Exemplo de NavBar">

<h2>Detalhes da NavBar no Formulário</h2>
<p>Abaixo, uma explicação sobre cada item da navbar do formulário:</p>

<p>Ao clicar no link, o usuário volta para a página inicial do Google Formulário.</p>
<img src="imgs/navBar1.png" alt="Página inicial do Google Formulário">

<p>A área destacada corresponde ao <strong>título do formulário</strong>. Clique duas vezes para editar.</p>
<img src="imgs/navBar2.png" alt="Título do formulário">

<p>Card referente à <strong>localização do formulário</strong>. É possível selecionar a pasta do Google Drive onde deseja armazená-lo.</p>
<img src="imgs/navBar3.png" alt="Localização do formulário">

<p>Card exibido ao clicar no link anterior, mostrando opções e informações relacionadas.</p>
<img src="imgs/navBar4.png" alt="Card de opções do formulário">

<p>Exibe a <strong>pasta onde o formulário está alocado</strong>. Se não houver nome, significa que está apenas salvo no Google Drive.</p>
<img src="imgs/navBar5.png" alt="Pasta atual do formulário">

<p>Seção <strong>Sugestões</strong> apresenta indicações de pastas do Google Drive.</p>
<img src="imgs/navBar6.png" alt="Sugestões de pastas">

<p>A seção <strong>Com estrela</strong> exibe pastas favoritas do Google Drive.</p>
<img src="imgs/navBar7.png" alt="Pastas com estrela">

<p>Seção <strong>Todos os locais</strong> apresenta lista completa para alocação.</p>
<img src="imgs/navBar8.png" alt="Todos os locais disponíveis">

<p>Clicando em <strong>Meu Drive</strong>, exibe todas as pastas do usuário.</p>
<img src="imgs/navBar9.png" alt="Meu Drive">

<p>Em <strong>Drives compartilhados</strong>, aparecem pastas compartilhadas com outros usuários.</p>
<img src="imgs/navBar10.png" alt="Drives compartilhados">

<p>Em <strong>Computadores</strong>, são exibidos dispositivos sincronizados com a conta.</p>
<img src="imgs/navBar11.png" alt="Computadores sincronizados">

<p>Em <strong>Compartilhados comigo</strong>, aparecem pastas compartilhadas por outros usuários.</p>
<img src="imgs/navBar12.png" alt="Compartilhados comigo">

<p>Após selecionar a pasta desejada, clique no botão azul para confirmar a alocação do formulário.</p>
<img src="imgs/navBar13.png" alt="Confirmação da alocação">

<p>O ícone de <strong>estrela</strong> adiciona o formulário aos favoritos.</p>
<img src="imgs/navBar14.png" alt="Adicionar formulário aos favoritos">

<p>O ícone de <strong>paleta de cores</strong> permite personalizar o tema do formulário.</p>
<img src="imgs/navBar15.png" alt="Personalização do tema">

<p>Exibe as opções de cores, fundos e elementos visuais para personalização.</p>
<img src="imgs/navBar16.png" alt="Opções de personalização do formulário">
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

  "turma-cadastrar": `
<h3>2.1.1 Adicionar novas turmas</h3>

<p>Na <strong>Seção 2</strong>, na parte intitulada <strong>“Dados do Representante”</strong>, localize o card <strong>“Selecione a sua turma”</strong> e clique <strong>duas vezes</strong> sobre ele com o mouse para abrir a lista de opções disponíveis.</p>
<img src="imgs/turma1.png" alt="Selecione a sua turma">

<p>Desça até o final do card e clique em <strong>“Adicionar opção”</strong>, inserindo o <strong>nome da turma</strong> que deseja adicionar.</p>
<img src="imgs/turma2.png" alt="Adicionar opção">

<p>Após incluir a nova turma, prossiga para <strong>criar uma nova seção</strong> no formulário.</p>
<img src="imgs/turma3.png" alt="Criar nova seção">

<p>Clicando no botão destacado, será criada uma <strong>nova seção</strong>, que deve ser nomeada como <strong>“Professores e Unidades Curriculares – (Nome da turma recém-criada)”</strong>.</p>
<img src="imgs/turma4.png" alt="Nova seção criada">

<p>Adicione a <strong>descrição padrão</strong> de todas as seções.</p>
<img src="imgs/turma5.png" alt="Descrição padrão das seções">

<p>Volte ao card <strong>“Selecione a sua turma”</strong>, clique duas vezes sobre ele e, em seguida, clique em <strong>“Continuar para a próxima seção”</strong> para prosseguir com a configuração do formulário.</p>
<img src="imgs/turma6.png" alt="Continuar para próxima seção">

<p>Selecione a seção recém-criada para a turma nova; no exemplo, será <strong>“Ir para a seção 3 (Professores e Unidades Curriculares – MI77)”</strong>. Essa configuração fará com que o representante seja direcionado automaticamente para a seção correspondente à sua turma ao selecioná-la no formulário.</p>
<img src="imgs/turma7.png" alt="Selecionar seção correspondente">

<p>Em seguida, edite a seção <strong>“Professores e Unidades Curriculares”</strong> da turma recém-criada, assegurando que todas as informações estejam <strong>corretas e completas</strong>.</p>
<img src="imgs/turma8.png" alt="Editar seção Professores e Unidades Curriculares">

<p>Clicando no <strong>símbolo de adicionar pergunta</strong>, crie um novo card que permitirá ao representante <strong>selecionar o professor</strong> que ministrou a aula para a turma.</p>
<img src="imgs/turma9.png" alt="Adicionar pergunta">

<p>Na área destacada, insira a pergunta <strong>“Selecione o nome do professor:”</strong>, que será utilizada pelo representante para indicar o docente responsável pela aula.</p>
<img src="imgs/turma10.png" alt="Pergunta selecionar professor">

<p>Em seguida, na área destacada, insira os <strong>nomes dos professores</strong>, listando-os <strong>um abaixo do outro</strong>, para que o representante possa selecionar corretamente.</p>
<img src="imgs/turma11.png" alt="Inserir nomes dos professores">

<p>Após concluir esta etapa, <strong>duplique o card “Selecione o nome do professor”</strong> para criar o card <strong>“Selecione a unidade curricular”</strong>, mantendo o mesmo formato de seleção.</p>
<img src="imgs/turma12.png" alt="Duplicar card">

<p>Clique no botão de duplicar pergunta.</p>
<img src="imgs/turma13.png" alt="Botão duplicar pergunta">

<p>Troque o título do card para <strong>“Selecione a unidade curricular”</strong>.</p>
<img src="imgs/turma14.png" alt="Alterar título do card">

<p>Deixando o card nesse formato, procedemos à <strong>edição dos tópicos</strong>, substituindo-os pelos <strong>nomes das unidades curriculares</strong> que a turma possui ao longo do curso.</p>
<img src="imgs/turma15.png" alt="Editar tópicos do card">

<p>Em seguida, criaremos a <strong>seção de Frequência dos Alunos</strong>. Para isso, adicione uma <strong>nova seção</strong> ao formulário e nomeie-a como <strong>“Frequência dos Alunos – (nome da turma recém-criada)”</strong>.</p>
<img src="imgs/turma16.png" alt="Nova seção Frequência dos Alunos">

<p>Criamos a seção, agora vamos nomear e fazer as devidas alterações.</p>
<img src="imgs/turma17.png" alt="Nomear seção">

<p>Insira o <strong>título da seção</strong>, que seguirá o formato <strong>“Frequência dos Alunos – [nome da turma]”</strong>. No exemplo utilizado, será <strong>“Frequência dos Alunos – MI77”</strong>.</p>
<img src="imgs/turma18.png" alt="Título da seção">

<p>No <strong>campo de descrição</strong>, adicione uma breve instrução para orientar o representante sobre o preenchimento da seção. Ex.: <strong>“Selecione os alunos presentes na aula e os faltantes:”</strong>.</p>
<img src="imgs/turma19.png" alt="Descrição da seção">

<p>Adicione uma nova pergunta, defina o título e selecione o tópico <strong>grade de múltipla escolha</strong> para registrar presença e ausência dos alunos.</p>
<img src="imgs/turma20.png" alt="Adicionar pergunta de frequência">

<p>Configure duas colunas: <strong>Presente</strong> e <strong>Faltante</strong>, e adicione os nomes dos alunos da turma em cada linha.</p>
<img src="imgs/turma21.png" alt="Configurar colunas e adicionar alunos">

<p>Ao final da seção, clique no <strong>botão “Continuar para a próxima seção”</strong> para prosseguir com a configuração do formulário. Selecione a próxima seção correspondente à etapa de cadastro da aula.</p>
<img src="imgs/turma22.png" alt="Continuar para próxima seção">
`,


  "turma-remover": `
  <h1>Remover Turma</h1>
  <p>Remover uma turma no sistema é um processo <strong>simples, rápido e direto</strong>, que pode ser necessário, por exemplo, quando a turma já se formou ou por outros motivos. A seguir, apresenta-se o <strong>passo a passo</strong> para realizar essa ação:</p>

  <p>Primeiramente, acesse a <strong>Seção 1 (topo do formulário)</strong> e remova a turma da <strong>lista de turmas disponíveis</strong> para seleção pelos representantes.</p>
  <img src="imagens/remover1.png" alt="Remover turma da lista">

  <p>Em seguida, clique sobre o card <strong>“Selecione a sua turma”</strong> e, na opção correspondente, clique no <strong>“X”</strong> localizado ao lado para excluir a turma do formulário.</p>
  <img src="imagens/remover2.png" alt="Excluir turma do card">

  <p>Para remover completamente a turma do sistema, é necessário também <strong>excluir suas demais seções</strong>. Para isso, acesse a seção <strong>“Professores e Unidades Curriculares”</strong> correspondente à turma e clique nos <strong>três pontinhos destacados</strong> para acessar as opções de exclusão.</p>
  <img src="imagens/remover3.png" alt="Menu de opções de exclusão">

  <p>Clique em <strong>excluir seção</strong>.</p>
  <img src="imagens/remover4.png" alt="Botão excluir seção">

  <p>Em seguida, será exibida uma <strong>janela de confirmação</strong>, informando que, ao excluir a seção, <strong>todos os cards contidos nela serão removidos</strong>. Como o objetivo é excluir a turma, basta clicar em <strong>OK</strong> para confirmar a ação.</p>
  <img src="imagens/remover5.png" alt="Confirmação de exclusão">

  <p>Por fim, acesse a seção <strong>“Frequência dos Alunos”</strong> da turma que deseja excluir e repita o mesmo procedimento, garantindo que a turma seja <strong>removida completamente do formulário</strong>.</p>
`
,


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




// ====== Função para mudar conteúdo com fade ======
function trocarConteudo(id) {
  conteudo.classList.add("fade-out");

  setTimeout(() => {
    conteudo.innerHTML = conteudos[id] || 
    conteudo.classList.remove("fade-out");
    conteudo.classList.add("fade-in");

    ativarZoom(); // reativa o zoom nas imagens
  }, 300); // mesmo tempo da transição no CSS
}

// Eventos nos menus
document.querySelectorAll('.sub-item').forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    trocarConteudo(id);
  });
});

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// ====== Modal Zoom nas imagens ======
function ativarZoom() {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll("#conteudo img").forEach(img => {
    img.classList.add("zoomable");
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";
  modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }
}

