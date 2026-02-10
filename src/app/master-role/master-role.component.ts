import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterRoleService, MasterRole } from '../services/master-role.service';

@Component({
  selector: 'app-master-role',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './master-role.component.html'
})
export class MasterRoleComponent implements OnInit {

  roles: MasterRole[] = [];
  newRole: MasterRole = { roleName: '', permission: '' };

  constructor(private roleService: MasterRoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  addRole() {
    this.roleService.addRole(this.newRole).subscribe(() => {
      this.newRole = { roleName: '', permission: '' };
      this.loadRoles();
    });
  }
}
