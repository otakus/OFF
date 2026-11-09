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