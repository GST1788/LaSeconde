# Horologio — Guide de mise en ligne

Suis ces étapes dans l'ordre. Ça prend environ 20 minutes.

---

## Étape 1 — Créer le projet Firebase

1. Va sur **https://console.firebase.google.com**
2. Clique **"Ajouter un projet"**
3. Nomme-le `horologio` (ou ce que tu veux)
4. Désactive Google Analytics (pas utile ici) → **Créer le projet**

---

## Étape 2 — Activer la base de données

1. Dans le menu gauche → **Realtime Database** → **Créer une base de données**
2. Choisis **Europe (europe-west1)**
3. Démarre en **mode test** (on sécurisera après)

---

## Étape 3 — Activer l'authentification

1. Menu gauche → **Authentication** → **Commencer**
2. Onglet **Sign-in method** → active **Email/Mot de passe**
3. Onglet **Users** → **Ajouter un utilisateur** → crée les 3 comptes :
   - guillaume@tonemail.com / mot_de_passe
   - arthur@tonemail.com / mot_de_passe
   - kim@tonemail.com / mot_de_passe

---

## Étape 4 — Récupérer la config Firebase

1. Icône engrenage → **Paramètres du projet**
2. Descends jusqu'à **Vos applications** → clique **</>** (Web)
3. Nomme l'app `horologio-web` → **Enregistrer**
4. Copie le bloc `firebaseConfig` qui apparaît

5. Ouvre le fichier **`firebase-config.js`** et remplace tout le contenu par :

```js
const firebaseConfig = {
  apiKey: "...",           // ← colle tes vraies valeurs ici
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

---

## Étape 5 — Sécuriser la base de données

Dans Firebase Console → **Realtime Database** → **Règles**, remplace par :

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

→ **Publier**

Seuls les utilisateurs connectés pourront lire/écrire.

---

## Étape 6 — Mettre en ligne avec Vercel

1. Crée un compte gratuit sur **https://vercel.com** (connecte-toi avec GitHub)
2. Sur GitHub, crée un nouveau repository et upload les 3 fichiers :
   - `index.html`
   - `app.html`
   - `firebase-config.js`
3. Sur Vercel → **Add New Project** → importe ton repo GitHub
4. Clique **Deploy** — c'est tout !

Vercel te donnera une URL du type `horologio.vercel.app`.
Tu pourras aussi connecter ton propre nom de domaine plus tard.

---

## Fichiers du projet

```
horologio/
├── index.html          ← Page de connexion
├── app.html            ← Calendrier partagé
├── firebase-config.js  ← Config Firebase (à remplir)
└── README.md           ← Ce guide
```

---

## Questions fréquentes

**Est-ce que c'est gratuit ?**
Oui. Firebase Spark (gratuit) supporte jusqu'à 1 Go de données et 100 connexions simultanées. Largement suffisant pour 3-5 personnes.

**Comment changer un mot de passe ?**
Firebase Console → Authentication → Users → cliquer sur l'utilisateur → Reset password.

**Comment ajouter un associé plus tard ?**
Firebase Console → Authentication → Users → Ajouter un utilisateur.
Puis dans `app.html`, ajoute son entrée dans `MEMBER_META`.
