# Zelda Database (React + TypeScript + Vite)

O site "Zelda Database" é uma plataforma que consome uma API para fornecer informações sobre os jogos da famosa franquia "The Legend of Zelda". Os usuários podem explorar dados sobre diferentes jogos relacionados ao universo de Zelda.

O site utiliza a API pública "ZeldaAPI" para obter dados atualizados e precisos sobre os jogos. A documentação oficial da API pode ser encontrada em https://docs.zelda.fanapis.com/docs.

Recursos Principais:
a. Listagem de Jogos:

Endpoint: /games
Descrição: Retorna uma lista de todos os jogos da franquia Zelda.
b. Detalhes de um Jogo Específico:

Endpoint: /games/{id}
Descrição: Fornece informações detalhadas sobre um jogo específico com base no ID.
Exemplo: /games/1 retorna detalhes sobre o primeiro jogo da série.
Considerações de Segurança:
Todas as requisições à API devem ser feitas usando HTTPS. Os endpoints podem exigir autenticação para acessar determinadas funcionalidades.

Limitações:
A API pode ter limites de taxa para evitar abusos. Nem todos os recursos podem estar disponíveis para todos os jogos.
