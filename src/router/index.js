import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ContactList.vue'
import ContactList from '../views/ContactList.vue'
import ContactProfile from '../views/ContactProfile.vue'
import EditContact from '../views/EditContact.vue'
import PageNotFound from '../views/PageNotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/contacts',
    component: HomeView
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'editcontact',
    component: EditContact
  },
  {
    path: '/contacts',
    name: 'contactList',
    component: ContactList
  },
  {
    path: '/contacts/profile/:contactId',
    name: 'contactProfile',
    component: ContactProfile
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
