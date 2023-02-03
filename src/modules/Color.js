//import la librairie qu'on a téléchargé grâce a npm
import * as convert from "color-convert";

export class Color {
	// Crée un champ privé #hsl
	#hsl;
	// Crée un champ privé #hex
	#hex;
	// Crée un champ privé #element
	#element;

	constructor(hsl) {
		this.#hsl = hsl;

		// Converti la valeur hsl en hexadécimal
		//pas oublier le #
		this.#hex = `#${convert.hsl.hex(hsl)}`;

		// Crée l'élément
		this.#element = this.#generateElement();
	}

	//crée un object DOM qui sera stocké dans this.#element
	#generateElement() {
		//manipulation DOM de service

		// Crée un élément <div>
		const colorElement = document.createElement("div");
		// Lui ajoute une class "color"
		colorElement.classList.add("color");
		// Ajoute l'attribut de donnée "data-color"
		colorElement.dataset.color = this.#hex;
		// Change la couleur de fond de l'élément
		colorElement.style.backgroundColor = this.#hex;

		//Crée un élément <p>
		const textElement = document.createElement("p");
		// Lui ajoute comme texte la valeur hexadécimale
		textElement.textContent = this.#hex;
		// Change la couleur du texte selon la luminosité de la couleur de fond
		textElement.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";
		// Ajoute l'élément <p> comme enfant du <div>
		colorElement.appendChild(textElement);

		// Retourne le <div>
		return colorElement;
	}

	//il va prendre l'élément créé par #generateElement et l'afficher
	display(parentElement) {
		// Ajoute this.#element comme enfant d'un élément parent passé en argument.
		// au lieu de document.querySelector("main").appendChild(this.#element)
		// appendChild() ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié.
		parentElement.appendChild(this.#element);
	}
}
