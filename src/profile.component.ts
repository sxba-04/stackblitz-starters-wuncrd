// profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  currentUser = {
    name: '',
    email: '',
    nickname: '',
  };

  // Hier kannst du weitere Funktionen für die Profil-Komponente hinzufügen
}
