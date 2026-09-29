const {onCall,HttpsError}=require("firebase-functions/v2/https"); const {onRequest}=require("firebase-functions/v2/https"); const admin=require("firebase-admin"); admin.initializeApp();
// PAGAMENTO: conecte aqui Stripe, Mercado Pago ou outro provedor. Nunca coloque secret key no front-end.
exports.createCheckoutSession=onCall({region:"southamerica-east1"},async(req)=>{if(!req.auth)throw new HttpsError("unauthenticated","Faça login."); throw new HttpsError("failed-precondition","Provedor de pagamento ainda não configurado.");});
// O webhook do provedor deverá validar a assinatura e atualizar users/{uid}: {subscriptionStatus:'active', plan:'premium'}.
exports.paymentWebhook=onRequest({region:"southamerica-east1"},async(req,res)=>{res.status(501).send("Configure o provedor e a validação de assinatura do webhook.");});
