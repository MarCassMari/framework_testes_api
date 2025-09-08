Feature: Testes API de Gerenciamento de tarefas 

Background:
   Given a API esta online

Scenario: GET todas as tarefas
   When O usuario manda uma requisicao GET para ver todas as tarefas
   Then A resposta do status deve ser 200
   And A resposta deve conter uma lista de tarefas 
