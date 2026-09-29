// CONFIGURAÇÃO ÚNICA DO PROJETO
// Depois de criar/selecionar seu Web App no Firebase Console, cole aqui o firebaseConfig.
// Estes valores do SDK web não são segredos; a segurança real está nas regras e no backend.
export const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI.firebaseapp.com",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI.firebasestorage.app",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

// Quando o pagamento estiver configurado, a Function createCheckoutSession será usada.
export const REQUIRE_ACTIVE_SUBSCRIPTION = false; // mude para true após configurar checkout/webhook
