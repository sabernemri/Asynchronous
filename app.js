//Tâche 01: Itérer avec Async/Await

async function iterateWithAsyncAwait(values) {
  for (let i = 0; i < values.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // délai de 1 seconde
    console.log(values[i]); // enregistrement de chaque valeur
  }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5]);




//Tâche 02: Attendre un appel

async function awaitCall() {
  try {
    // Simule l'appel d'une API avec une promesse résolue après 2 secondes
    const data = await new Promise((resolve) => 
      setTimeout(() => resolve("Données récupérées de l'API"), 2000)
    );
    console.log(data); // Enregistrement des données une fois l'appel terminé
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API:", error);
  }
}

awaitCall();

//Tâche 03: Gérer les erreurs avec Async/Await

async function awaitCall() {
  try {
    // Simule une erreur aléatoire dans l'appel API
    const data = await new Promise((resolve, reject) => 
      setTimeout(() => Math.random() > 0.5 ? resolve("Données récupérées") : reject("Échec de l'API"), 2000)
    );
    console.log(data); // Enregistrement des données si la promesse est résolue
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API:", error); // Gestion de l'erreur
  }
}

awaitCall();

//Tâche 03: Chaîner Async/Await

async function functionOne() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Message de la fonction 1");
}

async function functionTwo() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Message de la fonction 2");
}

async function functionThree() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Message de la fonction 3");
}

async function chainedAsyncFunctions() {
  await functionOne();
  await functionTwo();
  await functionThree();
}

chainedAsyncFunctions();

//Tâche 04: Attente de requêtes simultanées avec Promise.all()

async function concurrentRequests() {
  try {
    const requests = [
      new Promise(resolve => setTimeout(() => resolve("Réponse de la requête 1"), 2000)),
      new Promise(resolve => setTimeout(() => resolve("Réponse de la requête 2"), 3000))
    ];
    
    const results = await Promise.all(requests); // Attente simultanée des deux requêtes
    console.log(results); // Enregistrement des résultats combinés
  } catch (error) {
    console.error("Erreur lors des requêtes simultanées:", error);
  }
}

concurrentRequests();

//Tâche 05: Attente des appels parallèles avec Promise.all()

async function parallelCalls(urls) {
  try {
    const requests = urls.map(url => 
      new Promise(resolve => setTimeout(() => resolve(`Données de ${url}`), 2000))
    );
    
    const results = await Promise.all(requests); // Attente des réponses simultanées de toutes les URLs
    console.log(results); // Enregistrement des réponses
  } catch (error) {
    console.error("Erreur lors des appels parallèles:", error);
  }
}

parallelCalls(["https://api.example1.com", "https://api.example2.com", "https://api.example3.com"]);
