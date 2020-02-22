<script>
  const dir = __dirname;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Svelte + Electron Desktop App</h1>
  <p>
    We can use Node/Electron code within our Svelte files. The current directory
    is
    <b>{dir}</b>
  </p>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <p>
    Visit the
    <a
      href="https://www.electronjs.org/docs/tutorial/first-app#electron-development-in-a-nutshell">
      Electron docs
    </a>
    to learn how to build Electron apps.
  </p>

</main>
