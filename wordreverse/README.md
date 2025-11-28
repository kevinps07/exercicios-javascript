# 🔄 Desafio: Inversão Total de String (Reverse String)

Este projeto demonstra três abordagens diferentes para inverter a ordem de todos os caracteres de uma string de entrada.

**Exemplo de Entrada:** `"Significados insiginficantes que resultam tudo com base em nada"`

**Exemplo de Saída Esperada:** `"adan me esab moc odut matluser euq setnacifnigisni sodacifingiS`

---

## 💻 Implementações

O código fornece três funções distintas para resolver o mesmo problema, explorando diferentes recursos do JavaScript.

### 1. `wordreverse(stringInput)` - O Método Nativo (Mais Curto)

Esta é a solução mais idiomática e eficiente do JavaScript, utilizando métodos nativos de `Array`.

* **Lógica:**
    1.  **`split('')`**: Converte a string de entrada em um **Array de caracteres**.
    2.  **`.reverse()`**: Inverte a ordem dos elementos no Array.
    3.  **`.join('')`**: Junta o Array invertido de volta em uma string.


### 2. `StringlogicalWordReverse(stringInput)` - Inversão com Loop e Concatenação

Esta função demonstra a lógica de inversão manual, construindo a string de saída caractere por caractere.

* **Lógica:**
    1.  A string é convertida em um Array (`chars`) para fácil acesso.
    2.  Usa-se um `loop for` que itera do **início ao fim** (de `index = 0` até o `chars.length - 1`).
    3.  Uma variável auxiliar (`last_chars`) é inicializada no **último índice** do array.
    4.  A cada iteração do loop, o caractere da posição `last_chars` é concatenado à `reversed_chars` e, em seguida, o `last_chars` é decrementado (`last_chars--`).
    5.  O resultado é uma nova string construída de trás para frente.



### 3. `ArrayLogicalWordReverse(stringInput)` - Inversão com Loop e Array Auxiliar

Esta função utiliza o conceito de **criar um novo Array** na ordem inversa e depois juntá-lo.

* **Lógica:**
    1.  A string original é convertida em um Array (`chars`).
    2.  Um `loop for` é usado (de forma similar à T2), mas em vez de concatenar a uma string, ele **atribui** o caractere da posição final (`last_chars`) à posição inicial (`index`) de um **novo Array** (`reversed_chars`).
    3.  Após o loop, o Array `reversed_chars` está na ordem inversa.
    4.  Um loop `forEach` é usado para juntar os elementos de `reversed_chars` na string `result`. (Alternativamente, o método `join('')` poderia ser usado no final).


---

## ▶️ Como Executar

Para rodar este script (assumindo que você tem o Node.js instalado):

```bash
node nome_do_seu_arquivo.js 
# Exemplo: node wordreverse.js
