import { Route } from '@angular/router';
import { mylib1Routes } from '@acme/mylib1';
import { mylib2Routes } from '@acme/mylib2';
import { mylib3Routes } from '@acme/mylib3';
import { mylib4Routes } from '@acme/mylib4';
import { mylib5Routes } from '@acme/mylib5';

export const appRoutes: Route[] = [
  { path: 'mylib5', children: mylib5Routes },
  { path: 'mylib4', children: mylib4Routes },
  { path: 'mylib3', children: mylib3Routes },
  { path: 'mylib2', children: mylib2Routes },
  { path: 'mylib1', children: mylib1Routes },
];
