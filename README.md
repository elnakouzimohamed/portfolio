# Mohamed El Nakouzi Portfolio

This is a fully static Next.js portfolio configured for GitHub Pages.

Deployed URL:

`https://elnakouzimohamed.github.io/portfolio/`

## Run Locally

```powershell
cd "c:\Users\MAKOUZI\Desktop\All pdfs\Mechatronics Engineering\Extra\Portfolio"
npm install
npm run dev
```

Open:

`http://localhost:3000`

## Build The Static Version

```powershell
npm run build
```

This generates the static export in:

`out/`

## Deploy With GitHub Pages

1. Push the repository to GitHub under:
   `elnakouzimohamed/portfolio`
2. In the GitHub repository, open:
   `Settings > Pages`
3. Set the source to:
   `GitHub Actions`
4. Push to the `main` branch.
5. GitHub Actions will build the site and deploy the contents of `./out`.

Workflow file:

`.github/workflows/deploy.yml`

## Notes

- The site uses Next.js static export with `output: "export"`.
- The project is configured for the repo path `/portfolio`.
- `basePath` and `assetPrefix` are set so images, CSS, and static assets work correctly on GitHub Pages.
- Images are stored in `public/`.
- No server-only Next.js features are used.
