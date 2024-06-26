import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faStar, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, farStar, faMagnifyingGlass)

const app = createApp(App);

app.component('font-awesome-icon',FontAwesomeIcon);
app.mount('#app');