//import la librairie qu'on a téléchargé grâce a npm
import * as convert from "color-convert";

export const generatePalette = (hex) => {
	//crée un tableau vide
	const colors = [];

	// converti le hex d'entrée en tableau hsl. Ne récupérer que les
	// deux premières valeurs.
	const [h, s] = convert.hex.hsl(hex);

	// Itère entre 0 et 100 par intervalle de 10
	for (let l = 0; l <= 100; l += 10) {
		// À chaque itération, pousse un nouveau tableau dans colors contenant
		// la teinte (fixe), la saturation (fixe) et la luminosité déterminée par
		// l'index de la boucle.
		colors.push([h, s, l]);
	}

	// Retourne le tableau.
	return colors;
};

// Vérifie que la valeur soit bien un code hexadécimal
export const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

export const hexToCSSHSL = (hex) => {
	// tranforme le hex d'entrée en HSL.
	const hsl = convert.hex.hsl(hex);
	// Retourne une chaîne de caractère au format css.
	return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
};
