import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBHHVzAplJVA9BY6JmR4tresBDTw8cIObg",
    authDomain: "master-engenharia.firebaseapp.com",
    projectId: "master-engenharia",
    storageBucket: "master-engenharia.firebasestorage.app",
    messagingSenderId: "555701072544",
    appId: "1:555701072544:web:788b260572f8529ac4cfc5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginBox = document.getElementById('loginBox');
const painel = document.getElementById('painel');
const listaDenuncias = document.getElementById('listaDenuncias');

window.login = async function () {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        await signInWithEmailAndPassword(auth, email, senha);
    } catch (error) {
        alert('Login inválido');
        console.error(error);
    }
}

window.logout = async function () {
    await signOut(auth);
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginBox.style.display = 'none';
        painel.style.display = 'block';

        carregarDenuncias();
    } else {
        loginBox.style.display = 'block';
        painel.style.display = 'none';
    }
});

async function carregarDenuncias() {
    listaDenuncias.innerHTML = '';

    const querySnapshot = await getDocs(collection(db, 'denuncias'));

    querySnapshot.forEach((doc) => {
        const denuncia = doc.data();

        listaDenuncias.innerHTML += `
      <div class="card-denuncia">
        <h3>${denuncia.nome || 'Anônimo'}</h3>
        <p>${denuncia.mensagem}</p>
      </div>
    `;
    });
}