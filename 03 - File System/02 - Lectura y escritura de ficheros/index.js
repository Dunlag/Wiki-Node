const fs = require("fs/promises");

async function accionFicheros() {
  try {
    await fs.appendFile("blog.md", "\n\nAutor: Fernando");

    const data = await fs.readFile("blog.md", "utf-8");

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

accionFicheros();
