# Fudo 
![image](https://user-images.githubusercontent.com/96056167/230718648-53a3147e-f191-45b2-848a-9be58e27fa41.png)

-<b> A Pizza ordering web app created using next js.</b>
-
-<b> Sanity content-platform is used instead of mongodb database which is used to fetch data from which i stored in it. Just like a rest api but with a easier admin panel which can be easily deployed. </b>
-
- <b>Zustaand package is used for storing cache of user's cart. used useStore() for it. </b>
-  <b>Stripe is used for online payment mode.</b>
-  <b> Modal was used from Mantine.dev </b>
-  <b>Icons was used from  @iconscout/react-unicons which was installed using npm</b>
# Link to Deployed Project - https://food-ordering-vercel.vercel.app/
# Working of the project 
- <b>Components folder contains</b>
- Footer.jsx 
- Header.jsx
- Layout.jsx - <b> which is used for the whole layout of the project and header and footer is above and below the {children} which is every page content</b>
- Hero.jsx -<b> the first part of the main page</b>
- Menu.jsx - <b>Contains the menu where all the images and details of the pizzas are given which we can order</b>
![image](https://user-images.githubusercontent.com/96056167/230720619-11eb2b67-cd4b-4b4d-87bf-6f26cca970bc.png)

- OrderModal.jsx - <b>Where the modal i used from mantine.dev will display and to fill out the details and order from the cart</b>
- Services.jsx - <b> this is the middle part of the main page </b>
   ![image](https://user-images.githubusercontent.com/96056167/230720676-e90d579e-e6e5-4120-b5a0-10b28d650d20.png)

- <b>pages folder contains</b>
- index.js - <b>which is our main page</b>
- cart.js - <b>Which is our cart page where every selected pizzas are present and we can place order by either clicking pay on delivery or pay now buttons</b> <i>I used a toast and Toaster from react-hot-toast npm package for showing successful ordering and stuff </i>
![image](https://user-images.githubusercontent.com/96056167/230720532-47f432ce-c00f-46c1-984f-55982d32d3d2.png)

- success.js - <b> This page is created as the modal page for succesful online payment to place the order</b>
![image](https://user-images.githubusercontent.com/96056167/230720568-06e7b5a8-4765-40a8-a938-86c6c1e37fa7.png)

- <b> api folder inside pages folder contains</b>
- order.js - <b>Which contains the post method to place the order in the sanity platform from the form filled inside the cart or success page</b>
- stripe.js - <b>The stripe payment integration</b>
- <b> order folder inside pages folder contains</b>
- [id].js - which shows the order summary and its current status which will be updated directly from sanity studio.
![image](https://user-images.githubusercontent.com/96056167/230720595-f2217ffa-bc03-426f-b2d3-86c46582c6b0.png)

- <b>pizza folder inside pages folder contains</b>
- [slug].js - which is used to show the page of the pizza we selected so we can add it to the cart based on details we select. slug is used based on the sanity docs.
     ![image](https://user-images.githubusercontent.com/96056167/230720511-47fe09e3-3b1b-478b-9902-935b5ccb34a5.png)

- <b>Store folder contains</b>
- store.js - which uses zustand to store the user cache for the selected pizza details to display in cart page.

-<b>lib folder contains</b>
- client.js - <b>Which is used to create the sanity client</b>
- orderHandler.js - <b>Which is used to create order by fetching from api/order.js </b>
- <b>Sanity folder contains the schemas for pizzas and order</b>
