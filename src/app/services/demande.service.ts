import {Injectable} from '@angular/core';
import {DemandeModel} from "../models/demande.model";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  demandes: DemandeModel[] = [
    {
      id: 1,
      pseudo: "L4veLapiins",
      commentaire: "Bonjour, j'ai actuellement un lapin, mais j'en voudrais un deuxième pour tenir compagnie à mn petit Fifou. Je voudrais un éleveur ou un particuliers dans le centre de Paris qui pourrait me proposer un lapin. Je n'ai pas d'envie particulière sauf peut-être qu'il ait au moins 2 ans pour avoir le même âge que Fifou ! Merci beaucoup !",
    },
    {
      id: 2,
      pseudo: "Gerard67Lapin",
      commentaire: "Salut les jeunes ! Mon petit fils a demandé un lapin au Père Noël et je voudrais vraiment lui en offrir un. Il a toujours dit qu'il adorait les noirs, donc ça serait bien si vous en aviez un. Pas trop âgé non plus, qu'il puisse rester le plus longtemps possible avec mon petit-fils. J'habite dans le 53, si vous êtes proches, contactez moi s'il vous plaît.",
    },
    {
      id: 3,
      pseudo: "Steph&Kiki",
      commentaire: "Ici Stephanie ! Avec Kiki mon bélier on réflechissait et on se disait qu'on voulait un nouveau compagnon ! On n'a pas de préférence de sexe, d'âge ou de couleur.. On souhaite juste donner un foyer à un petit lapin qui en a besoin ! N'hésitez pas à me contacter, je peux aller n'importe où en France ! Merci, on est impatients !",
    },
    {
      id: 4,
      pseudo: "Sissi98",
      commentaire: "Mon mari et moi voulons vraiment un petit compagnon et on s'est mis d'accord pour un lapin. Mais je ne trouve pas d'éleveur dans nos environs, et on voudrait un lapin d'éleveur. On n'a pas de préférence pour le lapin, on les aime tous. Si vous êtes proche de Marseille s'il vous plaît contactez moi !",
    },
  ];

  getAllDemande(): DemandeModel[] {
    return this.demandes;
  }

  rajouterDemande(formValue: { pseudo: string, commentaire: string }) {
    const demande: DemandeModel = {
      ...formValue,
      id: this.demandes[this.demandes.length - 1].id + 1
    };
    this.demandes.push(demande);
  }
}
