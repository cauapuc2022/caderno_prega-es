# Caderno de Pregações — versão Firebase / comercial

## O que já está pronto
- Login com Google via Firebase Authentication.
- Criação automática do perfil em `users/{uid}`.
- Pregações em `users/{uid}/sermons/{id}`.
- Rascunho automático em `users/{uid}/private/draft`.
- Regras do Firestore: cada usuário só acessa o próprio UID.
- Tela de assinatura e integração preparada com Firebase Functions.
- GitHub Pages compatível no front-end.

## Para ativar Firebase
1. Em Firebase > Authentication > Sign-in method, habilite Google.
2. Em Authentication > Settings > Authorized domains, adicione seu domínio `usuario.github.io` e o domínio próprio quando houver.
3. Copie o `firebaseConfig` do Web App para `js/config.js`.
4. Publique `firestore.rules` (`firebase deploy --only firestore:rules`).
5. Para Functions: copie `.firebaserc.example` para `.firebaserc`, coloque o project ID, rode `cd functions && npm install`, depois `firebase deploy --only functions`.

## Pagamento
A interface e o contrato da Function `createCheckoutSession` já estão prontos. O provedor ainda precisa ser escolhido/configurado. Segredos e webhook ficam em Functions, nunca no GitHub Pages. Quando o webhook confirmar pagamento, ele deve gravar `subscriptionStatus: active` no usuário. Depois altere `REQUIRE_ACTIVE_SUBSCRIPTION` para `true` em `js/config.js`.

## Importante
Não é possível entregar checkout real sem as credenciais e a definição do provedor de pagamento. O projeto foi preparado para adicioná-los sem refazer o front-end.
