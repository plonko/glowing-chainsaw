# Checkout Baskout Example
Checkout basket with multiple currency options available

## Principle Technologies Used
React, Redux, Webpack, SASS

### Contributors
Paul Kiernan
---

## Brief
Write a client-side web application in Javascript, React and Redux that can price a basket of goods in a number of different currencies.

The goods that can be purchased are all priced in GBP.
This should be consumed from a JSON file that is served via a mock-server that you implement via the json-server package.
The data should include the name, price and description of the product.
e.g.

* Peas: 95p, Fresh organic peas. Give peas a chance!
* Eggs: £2.10, Eggscelent eggs from Chicken Farm
* Milk: £1.30, Them bones them bones need calcium!
* Beans: 73p, Eat them now or they'll have bean and gone

The program should allow the user to add or remove items in a basket. The user can click on a checkout button which will 
then display the total price for the basket with the option to display the amount in different currencies. 

For example, if the basket contained Milk and the currency selected was USD with an exchange rate of 1.5, 
the total would be $1.95 USD.

The list of currencies should be consumed from any api you can find online.

There will be two main navigational 'pages' within a single page app, and you serve a different 'page' via a router.

---

## UI
The UI can be to whatever style you feel fits.
Thyere should be a header which includes
* Shop 
* Basket // if there are items in the basket you should include the number of items, e.g. Basket (2)
* Change Currency  // a drop down where you can change between USD and GBP, defaulting to GDP

### /Shop
A table which includes the name, description, price, and a CTA to add/remove product
A CTA to go to basket.

### /Basket
A table showing items added to the basket, which includes the name, description, price, quantity, and a CTA to remove the product
A CTA to 'order' the items
Upon click of the "Order" CTA, the basket should be rendered in a 'receipt' view where the data is now read only and this CTA is not visible

