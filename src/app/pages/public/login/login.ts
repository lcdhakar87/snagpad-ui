import { Component, inject, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private auth: Auth, private router: Router){}
  
  errorMsg:String= "";
  private fb = inject(FormBuilder);
   private role:string = '';
  // 2. MatDialogRef inject karein taaki popup ko close kar sakein
  private dialogRef = inject(MatDialogRef<Login>);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', [Validators.required]]
  });

  onSubmit(): void {   this.router.navigate(['/admin']);
    if (this.loginForm.valid) {  
      this.errorMsg = ""; 
      
       this.auth.login(this.loginForm.value).subscribe({
          next: (response) => {    

             this.role =  response.role;
           if(this.role=="ADMIN"){
              this.router.navigate(['/admin']);
            }else if(this.role=='AGENCY'){ 
              this.router.navigate(['/agency']);
            }else if(this.role=='COACH'){
              this.router.navigate(['/coach']);
            }else if(this.role=='CLIENT'){
              this.router.navigate(['/client']);
            }else if(this.role=='SUPERUSER'){
              this.router.navigate(['/superuser']);
            }

              this.dialogRef.close({ success: true, user: response });
          },
          error: (err) => { 
              console.log('response Err: ',err);
              this.errorMsg = err.message;
          }
        }); 
       
      
    }

    if(this.loginForm.invalid){
       console.log('Error:', this.loginForm);  
       this.errorMsg = "Please enter required value.";
    }

  }

  // Cancel button ke liye helper method
  onCancel(): void {
    this.dialogRef.close({ success: false });
  }

  logOut(): void{
     
    this.auth.logout();
     this.router.navigate(['/app/dashboard']);

  }
  
}
