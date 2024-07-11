export interface Login {
    employeeId?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    designation?: string;
    roles?:Role[];
    state?: string;
    country?: string;
    phoneNumber?: number;
    username: string;
    password: string;
    employeeCreatedDate?: number;
}

export interface Role {
  roleId: number;
  roleName: string;
  roleDescription: string;
}
