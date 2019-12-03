import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import {HomeComponent} from '../app/components/home/home.component';

const routes: Routes = [
    { path: 'routePath', component: Component },
    { path: 'app-home', component: HomeComponent}
];

export const appRouting = RouterModule.forRoot(routes);