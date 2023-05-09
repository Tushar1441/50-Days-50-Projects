# Expanding Cards

### Made 5 responsive cards using simple Html and CSS 

Gave two types of class/preview to the cards ->
1. Panel - the normal preview of a card
2. Active - preview of a card when clicked

***
### JavaScript Part ->

- Selected all the panel class to a const variable panel.
- For each panel , we added a function so that when we click a card it includes class 'panel' to its classList and remove the class 'active' from all other cards.
- To select each card , we use panels.forEach( function )
- To remove the existing 'active' class, we made another function in the global scope.
   -this function also takes each panel as an argument and remove the class 'active'from the classList if present.

