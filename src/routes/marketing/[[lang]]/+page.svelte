<script>
  import {page} from '$app/stores'
  const greetings = {
    en: 'Hello!',
    es: "Hola!",
    fr: "Bonjour!"
  }

  const {lang = 'en'} = $page.params;
  const greeting = greetings[lang]
</script>

<h1>{greeting} User!</h1>
<!-- when routes/[lang] -->
<!-- http://localhost:5173/fr --> 
<!-- http://localhost:5173/en -->

<!-- when routes/marketing/[[lang]] -->

<!-- http://localhost:5173/marketing/en
http://localhost:5173/marketing/fr
http://localhost:5173/marketing/fr -->