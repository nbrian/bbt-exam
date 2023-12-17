import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NgIf, MatListModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  user?: User;
  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getUsers();
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    if(id) {
      this.getUser(id);
    } else {
      console.log('No user');
    }

  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe(user => this.user = user);
  }
  
  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  goToLandingPage() {
    this.router.navigateByUrl('/haven');
  }
}
