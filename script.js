function toggleMenu() { document.getElementById('menu').classList.toggle('active') }
function scrollContato() { document.getElementById('contato').scrollIntoView({ behavior: 'smooth' }) }
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBHHVzAplJVA9BY6JmR4tresBDTw8cIObg",
    authDomain: "master-engenharia.firebaseapp.com",
    projectId: "master-engenharia",
    storageBucket: "master-engenharia.firebasestorage.app",
    messagingSenderId: "555701072544",
    appId: "1:555701072544:web:788b260572f8529ac4cfc5"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.enviarDenuncia = async function(e) {
    e.preventDefault();

    const nome = e.target[0].value;
    const mensagem = e.target[1].value;

    try {
      await addDoc(collection(db, "denuncias"), {
        nome: nome || "Anônimo",
        mensagem: mensagem,
        data: new Date()
      });

      alert("Denúncia enviada com sucesso!");
      e.target.reset();

    } catch (error) {
      alert("Erro ao enviar denúncia");
      console.error(error);
    }
  }