# E-commerce Seller Dashboard

A SaaS dashboard for e-commerce sellers to manage orders, products, and payments, inspired by platforms like Meesho.

This project was generated with Angular CLI.

## Running the Project Locally

To run this project on your local machine, you'll need to set up a standard Angular workspace and copy the provided source files into it.

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`

### Setup Instructions

1.  **Create a New Angular Workspace**:
    Open your terminal and run the following commands. Replace `my-dashboard-app` with your preferred project name.

    ```bash
    ng new my-dashboard-app --standalone --style=css --routing=false
    cd my-dashboard-app
    ```
    *This command creates a new Angular project with all the necessary configuration files like `angular.json` and `tsconfig.json`.*

2.  **Replace Source Files**:
    - Delete the `src/app` directory from the newly created project.
    - Copy the `src` directory (containing `app.component.ts`, `components`, `services`, etc.) from this project into the `my-dashboard-app` directory, replacing the existing `src` folder.
    - Copy the `package.json` file from this project into the root of `my-dashboard-app`, replacing the existing one.

3.  **Install Dependencies**:
    Run the following command in your project's root directory to install the dependencies listed in `package.json`.

    ```bash
    npm install
    ```

4.  **Run the Development Server**:
    
    ```bash
    ng serve -o
    ```
    This will compile the application and open it in your default web browser at `http://localhost:4200`.

## Deploying to GitHub Pages

Once your project is set up locally and you have pushed it to a GitHub repository, you can deploy it for free using GitHub Pages.

1.  **Install `angular-cli-ghpages`**:
    This is a community tool that greatly simplifies the deployment process.

    ```bash
    npm install angular-cli-ghpages --save-dev
    ```

2.  **Build the Application for GitHub Pages**:
    You must build the application with a specific `base-href` that matches your repository's name on GitHub.

    **Important**: Replace `<YOUR_REPO_NAME>` in the command below with the actual name of your GitHub repository.

    ```bash
    ng build --base-href /<YOUR_REPO_NAME>/
    ```
    For example, if your repository URL is `https://github.com/my-username/seller-dashboard`, the command would be: `ng build --base-href /seller-dashboard/`

3.  **Deploy the Built Application**:
    This command will take the output from the build step and push it to a special `gh-pages` branch in your repository, which is used to host the live site.

    **Note**: The project name in the `dist` path (`my-dashboard-app`) must match the project name from step 1. Check your `dist` folder to confirm the path.
    ```bash
    npx angular-cli-ghpages --dir=dist/my-dashboard-app/browser
    ```

4.  **Configure Repository Settings**:
    - Go to your repository's page on GitHub.
    - Click on the **Settings** tab.
    - In the left sidebar, click on **Pages**.
    - Under "Build and deployment", set the **Source** to **Deploy from a branch**.
    - In the **Branch** section that appears, select `gh-pages` and keep the folder as `/ (root)`.
    - Click **Save**.

After a few minutes, your dashboard will be live at: `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`
