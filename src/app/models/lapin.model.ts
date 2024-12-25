export class LapinModel {
  id: number;
  nom: string;
  photo: string;
  sexe: string;
  dateNaissance: string;
  couleur: string;
  caractere: string;

  constructor(id: number, nom: string, photo: string, sexe: string, dateNaissance: string, couleur: string, caractere: string) {
    this.id = id;
    this.nom = nom;
    this.photo = photo;
    this.sexe = sexe;
    this.dateNaissance = dateNaissance;
    this.couleur = couleur;
    this.caractere = caractere;
  }
}
