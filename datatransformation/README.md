## ⚙️ Desafio: Transformação e Cálculo de Dados (`DataTransformation`)

Este projeto demonstra o uso fundamental do método **`Array.map()`** em JavaScript para realizar a **transformação de *arrays* de objetos**. O objetivo é pegar um conjunto de dados brutos e reestruturá-lo em um novo formato com novos campos calculados e regras de formatação aplicadas.

-----

### 🎯 Requisitos de Transformação

A função `transformRecords(records)` recebe um *array* de registros de usuários e retorna um **novo *array*** onde cada objeto foi transformado, contendo as seguintes propriedades:

1.  **`name`**: O `nome` original, formatado em **letras maiúsculas** (`UPPERCASE`).
2.  **`statusAge`**: A `idade` formatada como *string* (Ex: `"30 anos"`).
3.  **`isElite`**: Um campo booleano calculado. É `true` se o `score` for **maior ou igual a 88**, e `false` caso contrário.

### 💻 Dados de Entrada

```javascript
const userRecords = [
  { id: 1, nome: "Calango", active: true, score: 85, idade: 30 },
  { id: 2, nome: "zero", active: false, score: 92, idade: 22 },
  { id: 3, nome: "Mount", active: true, score: 78, idade: 28 },
  { id: 4, nome: "Zig", active: true, score: 95, idade: 20 },
  { id: 5, nome: "nextage", active: true, score: 88, idade: 35 }
];
```

-----

### ✨ Lógica e Implementação

A solução utiliza o método **`Array.map()`** para garantir a **imutabilidade** (o *array* original não é modificado) e criar o novo formato de dados de forma concisa.

#### Código da Função `transformRecords`

```javascript
function transformRecords(records){
  
   let data = records.map( record => {
      return { 
        name: record.nome.toUpperCase(),
        statusAge: `${record.idade} anos`,
        isElite: (record.score >= 88)? true : false
      }    
    })
  
    return data;
}
```

#### 💡 Pontos Chave

  * **Transformação de Nome:** `record.nome.toUpperCase()` aplica a formatação de capitalização.
  * **Formatação de Idade:** O uso de **Template Literals** (`${record.idade} anos`) permite criar *strings* de forma limpa, incorporando variáveis.
  * **Cálculo Booleano:** A **Expressão Ternária** (`? true : false`) calcula instantaneamente o novo valor `isElite` com base no `score`.

### 🧪 Saída Resultante

```javascript
[
  { name: 'CALANGO', statusAge: '30 anos', isElite: false },
  { name: 'ZERO', statusAge: '22 anos', isElite: true },
  { name: 'MOUNT', statusAge: '28 anos', isElite: false },
  { name: 'ZIG', statusAge: '20 anos', isElite: true },
  { name: 'NEXTAGE', statusAge: '35 anos', isElite: true }
]
```

-----

### ▶️ Como Executar

Para testar a função:

```bash
node dat_transform.js
```
