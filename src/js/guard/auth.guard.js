export class AuthGuard {
  check(currentPage){
   // Get token
   const token = localStorage.getItem("social_user_token");
   // Get user id
   const id = localStorage.getItem("social_user_id");

   if ((!token || !id) && currentPage !== 'login') return window.location = './login.html';

   if (token && id && currentPage === 'login')  return window.location = './index.html';
  }
}