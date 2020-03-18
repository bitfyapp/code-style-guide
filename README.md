# Bitfy - Padrões de desenvolvimento

## Convenções

### Nomenclaturas

### Pastas de projeto, repositórios de código, branches e tags
Letras minúsculas com hífen separando as palavras. Ex: **internal-components**

## GIT

### Branches
Além de seguir o padrão citado no tópico *Nomenclaturas*, os branches devem seguir a seguinte regra:

- Para melhorias, use **imp** (improvement), ex: **imp/componentização do botão padrão**
- Para correções, use **fix** (bugfix), ex: **fix/correção na conversão BTC - BRL**
- Para novas funcionalidades, use **feature**, ex: **feature/member get member**

*Seja curto e objetivo na descrição do branch*

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

Utilize o padrão camelcase para classes e construtores.

##### Classes

```javascript
class FooBar {
  construct(name) {
    this.name = name;
  }
};
```
