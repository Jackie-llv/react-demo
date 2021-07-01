import React from 'react';

const Welcome = React.lazy(() => import(/* webpackChunkName: "welcome" */ '../pages/Welcome'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "notFound" */ '../pages/NotFound'));
const PageA = React.lazy(() => import(/* webpackChunkName: "pageA" */ '../pages/PageA'));
const PageB = React.lazy(() => import(/* webpackChunkName: "pageB" */ '../pages/PageB'));
const PageC = React.lazy(() => import(/* webpackChunkName: "pageC" */ '../pages/PageC'));

const ROUTES = [
  {
    path: '/app/welcome',
    component: Welcome,
    name: 'Welcome'
  },
  {
    path: '/app/404',
    component: NotFound,
    name: 'NotFound'
  },
  {
    path: '/app/pageA',
    component: PageA,
    name: 'PageA'
  },
  {
    path: '/app/pageB',
    name: 'PageB',
    children: [
      {
        path: '/app/pageB/subPageB',
        component: PageB,
        name: 'subPageB',
      }
    ]
  },
  {
    path: '/app/pageC',
    component: PageC,
    name: 'PageC'
  }
];

export default ROUTES;