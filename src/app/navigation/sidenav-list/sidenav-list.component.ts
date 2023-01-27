import { AuthService } from 'src/app/auth/auth.service';
import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavSelected = new EventEmitter<void>();
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
      this.authSubscription = (this.authService.authChange.subscribe(authStatus => {
        this.isAuth = authStatus;
      }));
  }

  ngOnDestroy(): void {
    if (this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  onClose(){
    this.sidenavSelected.emit();
  }

  onLogout(){
    this.onClose();
    this.authService.logout();
  }
}
