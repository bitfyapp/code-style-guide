# Bitfy - Padrões de desenvolvimento

## Convenções

### Nomenclaturas

### Pastas de projeto, repositórios de código, branches e tags
Letras minúsculas com hífen separando as palavras. Ex: **internal-components**

## GIT

### Branches
Além de seguir o padrão citado no tópico *Nomenclaturas*, os branches devem seguir a seguinte regra:

- Para melhorias, use **imp** (improvement), ex: **imp/default-button-component**
- Para correções, use **fix** (bugfix), ex: **fix/btc-conversion-correction**
- Para novas funcionalidades, use **feature**, ex: **feature/member-get-member**

*Para definir o nome do branch, utilize como base a ação a ser executada*

### Commits
Seja o mais claro possível na descrição do commit, de forma que fique fácil seu colega de trabalho (e você mesmo, futuramente) consiga entender a mudança/implementação que foi executada.

## Padrão de escrita de código

### Javascript

#### Nomenclaturas

Utilize o padrão snakecase para variáveis, objetos e funções.

##### Variáveis

```javascript
const variableName = 'foo';
```

##### Objetos

```javascript
const obf = {
  fooBar: 'foo'
};
```

Utilize o padrão camelcase para classes.

##### Classes

```javascript
class FooBar {
  construct(name) {
    this.name = name;
  }
};
```

#### Estrutura de Classes

*ES6 / Nodejs 12.x*

Classes devem ser estruturadas respeitando a convenção para métodos e propriedades, ou seja:

```javascript
class FooBar {
  // Propriedade
  foo = 'foo';

  // Método construtor
  constructor(foo) {
    this.foo = foo;
  }

  // Método de classe
  bar() {
    return 'bar';
  }

  // Métodos "privados"
  static helper() {
    return 'bar';
  }
};
```
