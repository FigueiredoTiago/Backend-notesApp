# Pull Request

## Description

Tecnologias usadas:
Node.js, TypeScript, Express, MongoDb, Mongoose, Nodemoon.

###############################################################

Rotas da API:

GET /: Retorna todas as notas. Esta rota está associada à função getNotes.

GET /favorites: Retorna todas as notas marcadas como favoritas. Esta rota está associada à função findFavorites.

GET /search: Retorna uma nota com base em seu título. Esta rota está associada à função getNoteByTitle.

GET /:id: Retorna uma nota com base em seu ID. Antes de executar a função getNoteById, o middleware validateNoteId é chamado para verificar se o ID é válido.

POST /: Cria uma nova nota. Esta rota está associada à função createNote.

PATCH /:id: Atualiza uma nota com base em seu ID. Antes de executar a função updateNote, o middleware validateNoteId é chamado para verificar se o ID é válido.

DELETE /:id: Deleta uma nota com base em seu ID. Antes de executar a função deleteNote, o middleware validateNoteId é chamado para verificar se o ID é válido.

############################################################################################################################################################

Middleware para Verificação de ID:

O middleware validateNoteId é utilizado antes das operações de leitura, atualização e exclusão para garantir que o ID da nota seja válido. Ele pode verificar a validade do ID, se existe no banco de dados, ou se está no formato correto.
Como as Rotas Funcionam:

Cada rota corresponde a uma função específica no controlador (por exemplo, getNotes, findFavorites, etc.).
Os dados são enviados e recebidos em formato JSON.

###############################################################################################################################################################

Arquivo de Models:

Os modelos (Models) são representações dos documentos no banco de dados. Eles definem a estrutura dos dados, os tipos de campos, validações, e fornecem uma abstração para a interação com o banco de dados.
Cada modelo no Mongoose é associado a uma coleção no MongoDB. Os modelos são utilizados para realizar operações relacionadas ao banco de dados, como criar, recuperar, atualizar e excluir documentos. Além disso, eles permitem definir esquemas para garantir a consistência dos dados.

##############################################################################################################################################################
Arquivo de Crontroller da Api:

getNotes:

Descrição: Retorna todas as notas existentes.
Funcionalidade: Chama o serviço getAll para obter todas as notas do banco de dados. Se não houver notas, retorna uma mensagem indicando a ausência.

############
getNoteById:

Descrição: Retorna uma nota específica com base em seu ID.
Funcionalidade: Extrai o ID da requisição e utiliza o serviço getById para buscar a nota correspondente. Se a nota não for encontrada, retorna uma mensagem informando.

###########
createNote:

Descrição: Cria uma nova nota.
Funcionalidade: Recebe dados da requisição, como título, descrição, cor e favorito. Valida e atribui valores padrão, se necessário. Usa o serviço create para adicionar a nova nota ao banco de dados e retorna uma mensagem de sucesso junto com os detalhes da nota criada.

###########
updateNote:

Descrição: Atualiza uma nota existente com base em seu ID.
Funcionalidade: Extrai dados da requisição, como título, descrição, cor e favorito. Verifica se há alterações válidas e, em seguida, utiliza o serviço updateById para realizar a atualização. Retorna uma mensagem indicando o sucesso ou falha na operação.

##############
getNoteByTitle:

Descrição: Retorna notas com base em um título fornecido.
Funcionalidade: Extrai o título da requisição e utiliza o serviço getByTitle para buscar notas que correspondam ao título. Retorna uma mensagem se nenhum resultado for encontrado.

###########
deleteNote:

Descrição: Deleta uma nota com base em seu ID.
Funcionalidade: Extrai o ID da requisição e utiliza o serviço deleteById para remover a nota correspondente do banco de dados. Retorna uma mensagem indicando o sucesso ou falha na exclusão.
#############
findFavorites:

Descrição: Retorna todas as notas marcadas como favoritas.
Funcionalidade: Utiliza o serviço getFavorites para obter todas as notas marcadas como favoritas no banco de dados.

#############################################################################################################################################################

Arquivo de Services:

Os serviços (Services) encapsulam a lógica de negócios da aplicação. Eles interagem com os modelos para realizar operações no banco de dados e fornecem uma camada de abstração entre os modelos e os controladores.
Os serviços contêm funções que implementam operações específicas, como criar uma nova nota, buscar notas, atualizar uma nota, etc. Eles podem envolver lógica adicional, como validações de dados, antes de interagir com os modelos.

##############################################################################################################################################################

Banco de Dados no arquivo database.ts:

o código tem como objetivo estabelecer uma conexão com um banco de dados MongoDB utilizando a biblioteca Mongoose. A função connectDatabase é exportada e, ao ser chamada, tenta realizar a conexão com o banco de dados. A URL de conexão é definida na variável dburl, podendo ser configurada por meio da variável de ambiente DBURL ou assumindo um valor padrão EX: "mongodb://localhost:27017/mydatabase". O código também especifica opções de conexão, como um tempo limite de 5000 milissegundos para a seleção do servidor. Durante a tentativa de conexão, qualquer sucesso é refletido por uma mensagem indicando êxito no console, enquanto falhas resultam em mensagens de erro detalhadas. Para incorporar esta funcionalidade em um projeto, basta importar a função connectDatabase e chamá-la arquivo: "app.ts" . uma maneira eficaz de conectar-se ao MongoDB, sendo útil para inicializar a comunicação entre a aplicação e o banco de dados.

################################################################################################################################################################

Funcionalidade Geral:
Ao acessar uma rota, o Express encaminha a requisição para o controlador associado, que interage com o banco de dados usando o Mongoose para realizar as operações necessárias.
O middleware validateNoteId é chamado antes das operações que envolvem o ID da nota para garantir integridade.
a API fornece um conjunto de operações CRUD (Create, Read, Update, Delete) para manipular notas, seguindo os princípios RESTful.

################################################################################################################################################################

## Additional Information

Instruções para Utilização da API:

1- Instale as dependências necessárias utilizando:

npm install

2- Inicie a aplicação com o seguinte comando:

npm start

###########
como configurar o banco de dados MongoDb Atlas:
Crie um Arquivo .env e defina uma variavel de Ambiente semelhante a essa:
DBURL = "sua url do banco de dados MongoDb Atlas"

ex: DBURL = mongodb+srv://<usuario>:<senha>@seuprojeto.tn3p24e.mongodb.net/?retryWrites=true&w=majority"

########################
PARA O AVALIADOR:
Estou disponibilizando o Arquivo .env com Minha URL de Acesso ao Banco de Dados, por motivos de Agilidade para demonstrar a API.

## Checklist
O código segue um estilo de formatação consistente. [ x ]
As indentações e espaçamentos são aplicados de forma uniforme. [ x ]
Não há linhas de código excessivamente longas. [ x ]
Desempenho do Código: [ x ]
O código evita operações desnecessárias e otimizações estão presentes quando necessário.[ x ]
Os nomes de variáveis, funções e classes são descritivos e seguindo boas práticas de nomenclatura. [ x ]
Comentários são utilizados quando necessário para explicar partes do código. [ x ]
As responsabilidades do código são claramente definidas, seguindo os princípios de separação de interesses. [ x ]
Módulos, classes e componentes são específicos e não têm funcionalidades excessivas. [ x ]
Todas as funcionalidades listadas nos requisitos são implementadas corretamente. [ x ]
Todas as funcionalidades e requisitos do aplicativo são atendidos.[ x ]
O código está bem organizado em uma estrutura lógica e modular.[ x ]
A documentação está atualizada, explicando a estrutura e funcionamento do código.[ x ]

![Video Description](video_url)
