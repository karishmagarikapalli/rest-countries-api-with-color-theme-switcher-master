var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Handle the data returned from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error(error);
  });

// Get the theme switcher button element
const themeSwitcher = document.getElementById('theme-switcher');

// Add click event listener to the theme switcher button
themeSwitcher.addEventListener('click', toggleTheme);

// Function to toggle between light and dark themes
function toggleTheme() {
  // Get the body element
  const body = document.body;

  // Toggle the 'dark-theme' class on the body element
  body.classList.toggle('dark-theme');
}

Vue.component('country-card', {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="card">
      <img :src="country.flag" alt="Country Flag" class="card__flag">
      <div class="card__details">
        <h2 class="card__name">{{ country.name }}</h2>
        <p class="card__population">
          <strong>Population: </strong>{{ country.population }}
        </p>
        <p class="card__region">
          <strong>Region: </strong>{{ country.region }}
        </p>
        <p class="card__capital">
          <strong>Capital: </strong>{{ country.capital }}
        </p>
      </div>
    </div>
  `,
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
    }
  }
});
