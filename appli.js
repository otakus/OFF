function searchProduct() {
    async function getData() {
        const url = "https://world.openfoodfacts.org/api/v0/product/"+document.getElementById("barcodeInput").value;
        try {
            const reponse = await fetch(url);
            if (!reponse.ok) {
                throw new Error(`Statut de réponse : ${reponse.status}`);
            }

            const resultat = await reponse.json();
            console.log(resultat);
            document.getElementById("productInfo").textContent = resultat.product.product_name;
        } catch (erreur) {
            console.error(erreur.message);
        }
    }
    getData(); // Call the function to fetch and display product information
}

// 1. Configuration du scanner de la caméra
        function onScanSuccess(decodedText, decodedResult) {
            // Remplit le champ input avec le code scanné
            document.getElementById('barcodeInput').value = decodedText;
            
            // Lance automatiquement la recherche vers l'API
            chercherProduit();
        }

        function onScanFailure(error) {
            // Ignorer les erreurs de scan continu (la caméra cherche en boucle)
        }

        // Initialisation de la caméra (cherche les codes barres et QR)
        let html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            { fps: 10, qrbox: {width: 250, height: 150} },
            /* verbose= */ false);
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);