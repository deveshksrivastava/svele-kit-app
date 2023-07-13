<script>
  import {page} from '$app/stores'
  const greetings = {
    en: 'Hello, world',
    es: "Hola!",
    fr: "Bonjour"
  }

  const {lang} = $page.params;
  const greeting = greetings[lang]
</script>

<h1>{greeting} User!</h1>
<!-- http://localhost:5173/fr -->
<!-- http://localhost:5173/en -->