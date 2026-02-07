import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { AdmingPage } from "@/admin/pages/AdmingPage";
import { HeroesLayout } from "@/admin/pages/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/admin/pages/heroes/pages/hero/HeroPage";
import { HomePage } from "@/admin/pages/heroes/pages/home/HomePage";
import { lazy } from "react";
// import { SearchPage } from "@/admin/pages/heroes/pages/search/SearchPage";
import { createBrowserRouter, Navigate } from "react-router";

const SearchPage= lazy(()=> import('@/admin/pages/heroes/pages/search/SearchPage'))

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },

            {
                path: 'heroes/:idSlug',
                element: <HeroPage />
            },

            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path:'*',
                element:<Navigate to={'/'}/>
            }
        ]
    },

    {
        path: '/admin',
        element: <AdminLayout />,
        children:[
            {
                index: true,
                element: <AdmingPage />
            }

        ]
    },
])