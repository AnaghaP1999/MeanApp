import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const router = inject(Router);
  if (token && role == 'admin') {
    return true;
  } else if(token && role == 'user') {
    router.navigate(['/employees']);
    return false;
  }
  else {
    router.navigate(['']);
    return false;
  }
};