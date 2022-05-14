<script>
  const sendHelloMessageToElectron = () => {
    const someData = {
      name: "Svelte",
    };

    window.api.send("hello", someData);
  };

  window.api.on("world", (e, data) => {
    // Handle "world" message from Electron
  });
</script>

<main>
  <h1>Svelte + Electron Desktop App</h1>

  <button type="button" on:click={sendHelloMessageToElectron}>
    Send "hello" message to Electron
  </button>

  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <p>
    Visit the
    <a
      href="https://www.electronjs.org/docs/tutorial/first-app#electron-development-in-a-nutshell"
    >
      Electron docs
    </a>
    to learn how to build Electron apps.
  </p>
</main>
