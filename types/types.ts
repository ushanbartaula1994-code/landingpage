
export interface Guest{
    name:string;
    role:string;
    image:string;
}
export interface RegisterFormData{
  fullName: string;
  email: string;
  phoneNumber: string;
  department: string;
  graduationYear: string;
  attendance: string;
  password: string;
  confirmPassword: string;
};