# Bank Match TS

Application React avec TypeScript pour la gestion bancaire.

## 🚀 Technologies utilisées

- **React 19** avec TypeScript
- **Vite.js** pour le développement et la build
- **Tailwind CSS** pour le styling utilitaire
- **ESLint 9** avec configuration moderne pour le linting
- **Prettier** pour le formatage du code
- **Jest** avec React Testing Library pour les tests unitaires

## 📦 Installation

```bash
npm install
```

## 🛠️ Scripts disponibles

### Développement

```bash
npm run dev          # Lance le serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualise la build
```

### Qualité du code

```bash
npm run lint         # Vérifie le code avec ESLint
npm run lint:fix     # Corrige automatiquement les erreurs ESLint
npm run format       # Formate le code avec Prettier
npm run format:check # Vérifie le formatage Prettier
```

### 🔒 Hooks Git (Husky)

Le projet utilise Husky pour exécuter automatiquement des vérifications avant chaque commit :

- **Pre-commit** : Exécute lint-staged pour vérifier et formater le code
- **Lint-staged** : Applique ESLint et Prettier uniquement sur les fichiers modifiés

### Tests

```bash
npm run test         # Lance les tests une fois
npm run test:watch   # Lance les tests en mode watch
npm run test:coverage # Lance les tests avec couverture
```

## 🏗️ Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Button.tsx      # Composant Button avec Tailwind
│   ├── Button.test.tsx # Tests du composant Button
│   ├── Card.tsx        # Composant Card avec Tailwind
│   └── Card.test.tsx   # Tests du composant Card
├── App.tsx             # Composant principal
├── main.tsx            # Point d'entrée
└── setupTests.ts       # Configuration des tests
```

## 🎨 Tailwind CSS

Le projet utilise Tailwind CSS pour le styling utilitaire. Tous les composants sont stylés avec des classes Tailwind, offrant :

- **Design responsive** avec des classes utilitaires
- **Système de couleurs** cohérent et personnalisable
- **Animations et transitions** fluides
- **Composants réutilisables** avec des variantes

### Composants disponibles :

- **Button** : Boutons avec variantes primary/secondary
- **Card** : Cartes avec variantes default/elevated/outlined

## 🧪 Tests

Le projet utilise Jest avec React Testing Library pour les tests unitaires. Les tests sont organisés dans des fichiers `.test.tsx` à côté des composants qu'ils testent.

## 📝 Configuration

- **ESLint** : `eslint.config.js` - Configuration moderne ESLint 9 avec TypeScript et React
- **Prettier** : `.prettierrc` - Règles de formatage
- **Jest** : `jest.config.cjs` - Configuration des tests
- **TypeScript** : `tsconfig.json` - Configuration TypeScript
- **Tailwind** : `tailwind.config.js` - Configuration Tailwind CSS

## 🚀 Démarrage rapide

1. Clonez le repository
2. Installez les dépendances : `npm install`
3. Lancez le serveur de développement : `npm run dev`
4. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur

## 📚 Ressources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
