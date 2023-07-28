# Cracker Constructor
# [DEMO](https://sveta-kryukova.github.io/Cracker/) 

![img1](https://github.com/Sveta-Kryukova/Cracker/assets/116656921/b393f8f9-4766-45cc-aaff-89e33b204d2b)
![img2](https://github.com/Sveta-Kryukova/Cracker/assets/116656921/5919ac02-6f6b-43ab-85b0-3b86fd211450)
![img3](https://github.com/Sveta-Kryukova/Cracker/assets/116656921/ec55aad0-3e40-4c1c-92ac-f998f09a3ecf)

## Functionality
Cracker Constructor is a web application that allows users to create custom crackers by selecting the percentage of four different ingredients. The application provides a user-friendly interface where users can adjust the percentages using sliders and choose the desired pack size. Additionally, users can view and manage their cart, which contains the custom crackers they have created.

## Features
Adjust the percentage of four ingredients (value1, value2, value3, and value4) using sliders.
Choose from different pack sizes to package the custom crackers.
View the current value of the custom crackers based on the selected percentages and pack size.
Add the custom crackers to the cart and view the total price of all items in the cart.
Delete items from the cart if the user decides to remove them.
## Technologies Used
<ul>
<li>React Vite: The application is built using the React JavaScript library, providing a component-based architecture for creating a responsive and interactive user interface.</li>
<li>Redux-toolkit: Redux is used for state management, enabling the application to store and manage the user's cart items, total price, and package information efficiently.</li>
<li>TypeScript: The application uses TypeScript to add static typing, improving code reliability and providing better IDE support.</li>
<li>HTML & SCSS: The user interface is designed using HTML and SCSS, ensuring a visually appealing and consistent layout.</li>
<li> Pages: The application is deployed using GitHub Pages, making it accessible online and easy to share with others.</li>
</ul>

## Setup and Installation
To run the application locally, follow these steps:
Clone the repository to your local machine using the following command:

```
git clone https://github.com/your-username/cracker-constructor.git
```

Navigate to the project directory:

```
cd cracker-
```

Install the dependencies using npm or yarn:

```
npm install
or
yarn install
```

Start the development server:
```
npm start
or
yarn start
```

Open your browser and visit http://localhost:3000 to see the application running locally.

## Deployment
To deploy the application to GitHub Pages, follow these steps:

Make sure you have set up a GitHub repository for the project.

In the package.json file, modify the "homepage" field to match your GitHub Pages repository URL.

Build the project for production:

```
npm run build
or
yarn build
```

Commit and push the changes to the GitHub repository.

Navigate to the GitHub repository's settings and scroll down to the "GitHub Pages" section.

In the "Source" dropdown, select the gh-pages branch.

Click "Save," and your application will be deployed to GitHub Pages.
