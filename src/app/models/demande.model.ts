export class DemandeModel {
  id: number;
  pseudo: string;
  commentaire:string;

  constructor(id: number, pseudo: string, commentaire: string) {
    this.id = id;
    this.pseudo = pseudo;
    this.commentaire = commentaire;
  }

}
