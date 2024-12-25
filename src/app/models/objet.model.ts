export class ObjetModel {
  id: number;
  nom: string;
  photo: string;
  prix: string;
  type: string;

  constructor(id: number, nom: string, photo: string, prix: string, type: string) {
    this.id = id;
    this.nom = nom;
    this.photo = photo;
    this.prix = prix;
    this.type = type;
  }
}
