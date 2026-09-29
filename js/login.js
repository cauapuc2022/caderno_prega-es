import { auth, db, functions } from './firebase.js';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { doc,getDoc,setDoc,serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { httpsCallable } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js";
import { REQUIRE_ACTIVE_SUBSCRIPTION } from './config.js';
const msg=document.querySelector('#msg'), btn=document.querySelector('#googleBtn'); let routing=false;
async function route(user){ if(routing)return; routing=true; try{ const ref=doc(db,'users',user.uid); let snap=await getDoc(ref); if(!snap.exists()){await setDoc(ref,{email:user.email||'',displayName:user.displayName||'',photoURL:user.photoURL||'',plan:'free',subscriptionStatus:'inactive',createdAt:serverTimestamp(),updatedAt:serverTimestamp()}); snap=await getDoc(ref)} const d=snap.data()||{}; if(!REQUIRE_ACTIVE_SUBSCRIPTION || d.subscriptionStatus==='active' || d.plan==='admin'){location.replace('pregacoes.html');return} location.replace('assinar.html'); }catch(e){routing=false;msg.textContent='Não foi possível validar sua conta. Confira a configuração do Firebase.';console.error(e)}}
onAuthStateChanged(auth,u=>{if(u)route(u)});
btn.onclick=async()=>{msg.textContent='';try{await signInWithPopup(auth,new GoogleAuthProvider())}catch(e){msg.textContent=e.code==='auth/popup-closed-by-user'?'Login cancelado.':'Não foi possível entrar com Google.';console.error(e)}};
