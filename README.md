# Neo-Vue ![Javascript](https://img.shields.io/badge/-Javascript-F7DF1E?style=rounded&logo=javascript&logoColor=black) ![Typescript](https://img.shields.io/badge/-Typescript-2e86de?style=rounded&logo=typescript&logoColor=black) ![Vue.js](https://img.shields.io/badge/-Vue.js-4FC08D?style=rounded&logo=vue.js&logoColor=white)

> 🎨 **Bibliothèque d'interface utilisateur neobrutalism pour Vue.js 3**

Neo-Vue est une bibliothèque de composants Vue.js moderne avec un style neobrutalism distinctif. Elle propose des composants pré-construits et entièrement personnalisables pour créer des interfaces utilisateur audacieuses et expressives.

## ✨ Caractéristiques

- 🎯 **19 composants Vue 3** prêts à l'emploi
- 🎨 **Style neobrutalism** moderne et distinctif
- 📱 **Responsive** et adaptatif
- 🔧 **Entièrement personnalisable** avec des props flexibles
- 📝 **TypeScript** pour une meilleure expérience développeur
- 🚀 **Léger** et performant
- 🎭 **Thèmes** configurables
- 📦 **Tree-shaking** supporté

## 📦 Installation

### NPM
```bash
npm install neo-vue
```

### Yarn
```bash
yarn add neo-vue
```

### PNPM
```bash
pnpm add neo-vue
```

## 🚀 Configuration

### Installation basique

```javascript
// main.js ou main.ts
import { createApp } from 'vue'
import NeoVue from 'neo-vue'
import 'neo-vue/lib/neo-vue.css'
import App from './App.vue'

const app = createApp(App)
app.use(NeoVue)
app.mount('#app')
```

### Configuration avec thème personnalisé

```javascript
import { createApp } from 'vue'
import NeoVue from 'neo-vue'
import 'neo-vue/lib/neo-vue.css'
import App from './App.vue'

const app = createApp(App)

app.use(NeoVue, {
  theme: {
    primary: '#3366cc',
    secondary: '#6699ff',
    accent: '#ff6b35',
    info: '#17a2b8',
    warning: '#ffc107',
    error: '#dc3545',
    success: '#28a745',
    borderColor: '#000000',
    shadowColor: '#000000'
  }
})

app.mount('#app')
```

## 📋 Composants disponibles

### 🔘 Éléments de base
- **`<neo-button>`** - Boutons stylisés avec différentes variantes
- **`<neo-badge>`** - Badges pour afficher des informations
- **`<neo-alert>`** - Messages d'alerte et notifications
- **`<neo-icon>`** - Icônes vectorielles (Boxicons)

### 📦 Conteneurs
- **`<neo-card>`** - Cartes avec bordures et ombres
- **`<neo-dialog>`** - Fenêtres modales et popups
- **`<neo-drawer>`** - Tiroirs latéraux
- **`<neo-tabs>`** - Système d'onglets

### 📝 Formulaires
- **`<neo-textfield>`** - Champs de saisie de texte
- **`<neo-checkbox>`** - Cases à cocher
- **`<neo-radio>`** - Boutons radio
- **`<neo-select>`** - Listes déroulantes
- **`<neo-dropdown>`** - Menus déroulants

### 🧭 Navigation
- **`<neo-navbar>`** - Barres de navigation
- **`<neo-nav-item>`** - Éléments de navigation
- **`<neo-sidebar>`** - Barres latérales
- **`<neo-step>`** - Indicateurs d'étapes

### 📊 Affichage de données
- **`<neo-table>`** - Tableaux de données
- **`<neo-profile>`** - Composants de profil utilisateur

## 💡 Utilisation

Tous les composants sont préfixés par `neo-` pour éviter les conflits avec d'autres bibliothèques.

### Exemple basique

```vue
<template>
  <div>
    <!-- Bouton simple -->
    <neo-button>Cliquez-moi</neo-button>
    
    <!-- Carte avec contenu -->
    <neo-card title="Ma carte" rounded="high" shadow="bold">
      <p>Contenu de la carte</p>
    </neo-card>
    
    <!-- Champ de saisie -->
    <neo-textfield 
      label="Nom d'utilisateur" 
      placeholder="Entrez votre nom"
      rounded
    />
    
    <!-- Alerte -->
    <neo-alert level="success" icon>
      Opération réussie !
    </neo-alert>
  </div>
</template>
```

### Exemple avancé avec navigation

```vue
<template>
  <div>
    <!-- Barre de navigation -->
    <neo-navbar 
      title="Mon App" 
      :items="navItems"
      shadow="bold"
    >
      <template #left-items>
        <neo-nav-item to="/accueil" label="Accueil" />
        <neo-nav-item to="/produits" label="Produits" />
      </template>
      
      <template #right-items>
        <neo-button rounded="high" backgroundColor="primary">
          Connexion
        </neo-button>
      </template>
    </neo-navbar>
    
    <!-- Contenu principal -->
    <neo-card class="ma-4" padding="20px">
      <neo-tabs :items="tabItems" />
    </neo-card>
  </div>
</template>

<script setup>
const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/about' }
]

const tabItems = [
  { label: 'Onglet 1', content: 'Contenu 1' },
  { label: 'Onglet 2', content: 'Contenu 2' }
]
</script>
```

## 🎨 Personnalisation

### Props communes

La plupart des composants supportent ces props communes :

- **`rounded`** : `"none" | "low" | "medium" | "high" | "round"`
- **`shadow`** : `"none" | "low" | "medium" | "high" | "bold"`
- **`border`** : `"none" | "low" | "medium" | "high"`
- **`backgroundColor`** : Couleur d'arrière-plan
- **`color`** : Couleur du texte
- **`padding`** : Espacement interne
- **`margin`** : Espacement externe

### Exemple de personnalisation

```vue
<template>
  <neo-button 
    rounded="high"
    shadow="bold"
    border="medium"
    backgroundColor="#ff6b35"
    color="white"
    padding="15px 30px"
  >
    Bouton personnalisé
  </neo-button>
</template>
```

## 📖 Documentation complète

Pour une documentation détaillée avec des exemples interactifs, visitez :

🔗 **[Documentation officielle](https://neo-vue.thomas-leconte.fr)**

## 🛠️ Développement

### Prérequis

- Node.js 16+
- NPM, Yarn ou PNPM

### Installation des dépendances

```bash
npm install
```

### Construire la bibliothèque

```bash
npm run build
```

### Serveur de test

Un serveur de test est disponible pour développer et tester les composants :

```bash
# D'abord, construire la bibliothèque
npm run build

# Puis lancer le serveur de test
npm run test-server
```

Le serveur sera accessible à l'adresse `http://localhost:3000`.

### Scripts disponibles

- `npm run build` - Construit la bibliothèque
- `npm run format` - Formate le code avec Prettier
- `npm run lint` - Vérifie la qualité du code avec TSLint
- `npm run test-server` - Lance le serveur de développement

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour les changements majeurs, veuillez d'abord ouvrir une issue pour discuter de ce que vous souhaitez modifier.

### Processus de contribution

1. **Fork** le projet
2. **Créez** votre branche de fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Committez** vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. **Poussez** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrez** une Pull Request

### Développement local

1. Clonez le dépôt
2. Installez les dépendances avec `npm install`
3. Construisez le projet avec `npm run build`
4. Lancez le serveur de test avec `npm run test-server`
5. Faites vos modifications dans le dossier `src/`
6. Testez vos changements dans le serveur de test

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- **Boxicons** pour les icônes

---

<div align="center">
  <p>Créé avec ❤️ par <a href="https://github.com/ThomasLeconte">Thomas Leconte</a></p>
  <p>Donnez une ⭐ si ce projet vous a aidé !</p>
</div>
